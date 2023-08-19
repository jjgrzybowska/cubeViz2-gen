export function load(eitherCvd, that) {
  const vp = that.viewport
  let cvd;
  if (eitherCvd.Right) {
    cvd = eitherCvd.Right;
  } else {
    throw new Error("failed to load cvd");
  }

  console.log(that);

  const gl = that.webGlResources.gl;
  console.log(gl);

  // setup GLSL program
  var program = webglUtils.createProgramFromSources(gl, [vs, fs]);

  gl.useProgram(program);
  const uLoc = {};
  const aLoc = {};

  const getLoc = function (n) {
    aLoc[n] = gl.getAttribLocation(program, n);
  };
  const attrs = ["vPosition", "Normal", "Color", "Mode", "VisFlagF"];
  attrs.map(getLoc);

  const getULoc = function (n) {
    uLoc[n] = gl.getUniformLocation(program, n);
  };

  const unis = [
    "euler",
    "screen",
    "shade",
    "scaleG",
    "screenDelta",
    "VisF",
    "slice",
    "poseMat",
    "projMat",
    "modelMat",
    "alphaOverwrite",
    "uHover",
    "uTime",
  ];
  unis.map(getULoc);

  const cells = {};
  gl.useProgram(program);
  const initiated = cvd.webGlDescriptors.slice(0, 3).map(function (d) {
    var buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    var buffData = new Float32Array(d.dvertexData);
    gl.bufferData(gl.ARRAY_BUFFER, buffData, gl.STATIC_DRAW);
    var f = new Function(
      "program",
      "webgl",
      "w",
      "h",
      "uLoc",
      "aLoc",
      d.dInitCommands + d.dDrawCommands,
    );

    d.dAddrMap.forEach(function (cell, cellK) {
      // console.log(cell);
      const cellAddr = cell[0];
      const fstV = cell[1][0][0];
      const countV = cell[1][0][1];
      let kNum = cellK * 10;
      let ccc = new Float32Array([
        kNum % 256,
        (kNum >> 8) % 256,
        (kNum >> 16) % 256,
      ]);
      let cntrPoint = cell[1][1];
      while (cntrPoint.length < 3) {
        cntrPoint.push(0.0);
      }
      cells[cellAddr] = {
        visible: true,
        center: new Float32Array(cntrPoint.concat([1.0])),
        cellK: cellK,
        cellColorCode: ccc,
        codePt: undefined,
      };
    });

    return { buf: buf, f: f, d: d, buffData: buffData };
  });
  const modelPos = new Float32Array([0.0, 0.0, 0.0]);
  let cfft = new Float32Array([0]);

  const modelMat = new Float32Array([
    1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0,
    1.0,
  ]);

  const cmm = function () {
    m4.translate(
      m4.identity(),
      modelPos[0],
      modelPos[1],
      modelPos[2],
      modelMat,
    );
    m4.yRotate(modelMat, vp.vpGamma, modelMat);
    m4.xRotate(modelMat, vp.vpBeta, modelMat);
    m4.zRotate(modelMat, vp.vpAlpha, modelMat);
    m4.scale(modelMat, vp.vpScale, vp.vpScale, vp.vpScale, modelMat);
    m4.translate(modelMat, -0.5, -0.5, -0.5, modelMat);
  };



  let VisF = 1;
  let hoveredAddress = "";

  let sliceVal = 0.5;
  if (cvd.exprDim == 2) {
    vp.vpAlpha = 0;
    vp.vpBeta = 0;
    vp.vpGamma = 0;
    vp.vpScale = 2.0;
  }

  const toggleVisGroup = function (k) {
    VisF = VisF ^ (1 << (4 + k));
    //	console.log(VisF);
  };

  [1, 2, 3, 4, 5, 6, 7, 8].forEach(toggleVisGroup);

  gl.enable(gl.DEPTH_TEST);

  gl.lineWidth(1);
  // lineWRange[1]
  const drawPrimitives = function (i) {
    if (i.d.dElemNum < 1) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, i.buf);
    i.f(program, gl, gl.canvas.clientWidth, gl.canvas.clientHeight, uLoc, aLoc);

    //let vMat = [vp.vpAlpha * 360, vp.vpBeta * 360, vp.vpGamma * 360, vp.vpScale];

    //gl.uniform4fv(uLoc["euler"], vMat);
    gl.uniformMatrix4fv(uLoc["poseMat"], false, poseMat);
    gl.uniformMatrix4fv(uLoc["projMat"], false, projMat);
    gl.uniformMatrix4fv(uLoc["modelMat"], false, modelMat);

    // {console.log(poseMat.join("|"))};
    gl.uniform1fv(uLoc["VisF"], [VisF]);

    gl.uniform1fv(uLoc["uTime"], cfft);

    i.d.dAddrMap.forEach(function (cell, cellK) {
      if (window.maxI && window.maxI < cellK) {
        return;
      }
      const cellAddr = cell[0];
      const fstV = cell[1][0][0];
      const countV = cell[1][0][1];

      gl.uniform1fv(
        uLoc["uHover"],
        new Float32Array([cellAddr == hoveredAddress ? 1.0 : 0.0]),
      );

      if (cells[cellAddr].visible) {
        gl.uniform1fv(uLoc["alphaOverwrite"], [1.0]);
      } else {
        return;
        gl.uniform1fv(uLoc["alphaOverwrite"], [0.3]);
      }

      gl.drawArrays(gl[i.d.dPrimitiveMode.toUpperCase()], fstV, countV);
    });

    gl.uniform1fv(uLoc["slice"], [sliceVal]);
  };
  let lastFrameTime = 0;
  let firstFrameTime = -1;
  let poseMat, projMat, cuMat;

  const drawDesktop = function (currentFrameTime, frame) {
    if (firstFrameTime == -1) {
      firstFrameTime = currentFrameTime;
    }
    cfft[0] = currentFrameTime;
    lastFrameTime = currentFrameTime;
    cmm();

    // Now call the scene rendering code once for each of
    // the session's views.
    poseMat = m4.translation(0.0, 0.0, -3.0);

    projMat = m4.perspective(
      Math.PI / 6.0,
      gl.canvas.clientWidth / gl.canvas.clientHeight,
      0.01,
      20,
    );
    gl.useProgram(program);

    initiated.forEach(drawPrimitives);
  };
  that.draw = drawDesktop;
  gl.clearColor(0, 0, 0, 0);
  gl.cullFace(gl.FRONT_AND_BACK);
}
