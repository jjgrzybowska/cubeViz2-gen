export function load(eitherCvd, that) {

  let cvd;
  if (eitherCvd.Right) {
    cvd = eitherCvd.Right;
  } else {
    throw new Error("failed to load cvd");
  }

  console.log(that);
  const glConf = {};

  const gl = that.webGlResources.gl;
  console.log(gl);

  // setup GLSL program
  var program = webglUtils.createProgramFromSources(gl, [vs, fs]);
  var programCursor = webglUtils.createProgramFromSources(gl, [
    vsCursor,
    fsCursor,
  ]);
  var programCodeView = webglUtils.createProgramFromSources(gl, [
    vsCodeView,
    fsCodeView,
  ]);

  gl.useProgram(program);
  const uLoc = {};
  const aLoc = {};
  const uLocCursor = {};
  const aLocCursor = {};
  const uLocCodeView = {};
  const aLocCodeView = {};

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

  //forCursor
  gl.useProgram(programCursor);
  const getLocC = function (n) {
    aLocCursor[n] = gl.getAttribLocation(programCursor, n);
  };
  const attrsC = ["vPosition", "vColor"];
  attrsC.map(getLocC);

  const getULocC = function (n) {
    uLocCursor[n] = gl.getUniformLocation(programCursor, n);
  };

  const unisC = ["poseMat", "projMat", "cuMat"];
  unisC.map(getULocC);

  //forCodeView
  gl.useProgram(programCodeView);
  const getLocCV = function (n) {
    aLocCodeView[n] = gl.getAttribLocation(programCodeView, n);
  };
  const attrsCV = ["vPosition"];
  attrsCV.map(getLocCV);

  const getULocCV = function (n) {
    uLocCodeView[n] = gl.getUniformLocation(programCodeView, n);
  };

  const unisCV = [
    "poseMat",
    "projMat",
    "modelMat",
    "u_texture",
    "u_textureMap",
    "coCu",
    "uTime",
    "selectedCC",
  ];
  unisCV.map(getULocCV);

  const cells = {};

  function setOnlyThisVisible(targetKey) {
    for (const key in cells) {
      if (cells.hasOwnProperty(key) && cells[key].hasOwnProperty("visible")) {
        cells[key].visible = key === targetKey;
      }
    }
  }
  console.log(cells);
  function toggleVisibility(targetKey) {
    if (targetKey in cells) {
      cells[targetKey].visible = !cells[targetKey].visible;
    }
  }

  //codeView setup

  var codeViewVtxBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, codeViewVtxBuf);

  let pPt00 = [0.0, 0.0, 0.0];
  let pPt01 = [0.0, 1.0, 0.0];
  let pPt10 = [0.5, 0.0, 0.0];
  let pPt11 = [0.5, 1.0, 0.0];

  var codeViewBuffData = new Float32Array(
    [
      //0.0 , 0.0 , 0.0 ,
      pPt00,
      pPt01,
      pPt11,
      pPt00,
      pPt11,
      pPt10,

      //0.0 , 0.0 , 1.0 ,
    ].flat(),
  );
  // console.log(cursorBuffData);
  gl.bufferData(gl.ARRAY_BUFFER, codeViewBuffData, gl.STATIC_DRAW);
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.activeTexture(gl.TEXTURE0);

  // Fill the texture with a 1x1 blue pixel.
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([0, 0, 255, 255]),
  );

  var textureMap = gl.createTexture();

  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, textureMap);
  // Fill the texture with a 1x1 blue pixel.
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([0, 255, 0, 255]),
  );

  const initCodeViewDraw = function () {
    var size = 3; // 2 components per iteration
    var type = gl.FLOAT; // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0; // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0; // start at the beginning of the buffer

    // gl.bindVertexArray(vao);

    gl.bindBuffer(gl.ARRAY_BUFFER, codeViewVtxBuf);
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, texture);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, textureMap);

    gl.vertexAttribPointer(
      aLocCodeView["vPosition"],
      size,
      type,
      normalize,
      stride,
      offset,
    );
    gl.enableVertexAttribArray(attrsCV["vPosition"]);
  };

  //codeView setup End

  var cursorVtxBuf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, cursorVtxBuf);
  let pPtTrans = function (p) {
    const a = 0.3;
    return [
      a * (p[0] - 1.0) + 1.0,
      a * (p[1] + 1.0) - 1.0,
      a * (p[2] - 1.0) + 1.0,
    ];
  };
  let pPt0 = [0.0, 0.0, 0.0];
  let pPtX = pPtTrans([1.0, 0.0, 0.0]);
  let pPtY = pPtTrans([0.0, -1.0, 0.0]);
  let pPtZ = pPtTrans([0.0, 0.0, 1.0]);

  let po0Col = [1.0, 0.3, 0.3];
  let poACol = [0.3, 0.3, 0.3];

  let zipPt = function (p, c) {
    return p.concat(c);
    // [p[0],c[0],p[1],c[1],p[2],c[2]];
  };

  var cursorBuffData = new Float32Array(
    [
      //0.0 , 0.0 , 0.0 ,
      zipPt(pPtX, poACol),
      zipPt(pPtY, poACol),
      zipPt(pPtZ, poACol),

      zipPt(pPt0, po0Col),
      zipPt(pPtY, poACol),
      zipPt(pPtZ, poACol),

      zipPt(pPtX, poACol),
      zipPt(pPt0, po0Col),
      zipPt(pPtZ, poACol),

      zipPt(pPtX, poACol),
      zipPt(pPtY, poACol),
      zipPt(pPt0, po0Col),
      //0.0 , 0.0 , 1.0 ,
    ].flat(),
  );
  // console.log(cursorBuffData);
  gl.bufferData(gl.ARRAY_BUFFER, cursorBuffData, gl.STATIC_DRAW);

  const initCoursorDraw = function () {
    var size = 3; // 2 components per iteration
    var type = gl.FLOAT; // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 24; // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0; // start at the beginning of the buffer

    // gl.bindVertexArray(vao);

    gl.bindBuffer(gl.ARRAY_BUFFER, cursorVtxBuf);

    gl.vertexAttribPointer(
      aLocCursor["vPosition"],
      size,
      type,
      normalize,
      stride,
      offset,
    );
    gl.enableVertexAttribArray(attrsC["vPosition"]);

    gl.vertexAttribPointer(
      aLocCursor["vColor"],
      size,
      type,
      normalize,
      stride,
      12,
    );
    gl.enableVertexAttribArray(attrsC["vColor"]);
  };
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

  // console.log(cells);

  const addressClickTest = function (cMat) {
    let testedPt = m4.transformPoint(cMat, new Float32Array([0, 0, 0, 1.0]));

    let nearestAddr = Object.keys(cells)
      .filter(function (addr) {
        return cells[addr] && cells[addr].domElem; // && cells[addr].codePt
      })
      .map(function (addr) {
        let cntr = cells[addr].center;
        if (cntr.length == 4) {
          let pC = m4.transformPoint(modelMat, cells[addr].center);
          return { caddr: addr, dst: m4.distance(pC, testedPt) };
        }
      })
      .sort(function (a, b) {
        return a.dst - b.dst;
      })[0].caddr;
    return nearestAddr;
  };

  // renderCheckboxesForObject(cells,document.getElementById("cellCntrl"));

  let vpAlpha = 0;
  let vpBeta = 0;
  let vpGamma = 0;
  const modelPos = new Float32Array([0.0, 0.0, 0.0]);
  let vpScale = 1.0;
  let cfft = new Float32Array([0]);
  let codeCoursor = new Float32Array([0.75, 0.23]);

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
    m4.yRotate(modelMat, vpGamma, modelMat);
    m4.scale(modelMat, vpScale, vpScale, vpScale, modelMat);
    m4.translate(modelMat, -0.5, -0.5, -0.5, modelMat);
    // console.log(modelMat);
    // m4.zRotate(modelMat,vpAlpha);
    // m4.translation(modelPos[0],modelPos[1],modelPos[2],modelMat);
  };

  cmm();
  // const phiRot = function(phi){
  //     let tm = m4.translation(-0.5,-0.5,-0.5);
  //     m4.multiply(m4.yRotation(phi) , tm , tm);
  //     m4.multiply(m4.translation(0.5,0.5,0.5) , tm , tm);
  //     m4.multiply(modelMat, tm , modelMat);
  // };

  // const thetaRot = function(theta){
  //     let tm = m4.translation(-0.5,-0.5,-0.5);
  //     m4.multiply(m4.xRotation(theta) , tm , tm);
  //     m4.multiply(m4.translation(0.5,0.5,0.5) , tm , tm);
  //     m4.multiply(modelMat, tm , modelMat);
  // };

  // const scaleModelMat = function(inputMat,s){
  //     let tm = m4.translation(-0.5,-0.5,-0.5);
  //     m4.multiply(m4.scaling(s,s,s) , tm , tm);
  //     m4.multiply(m4.translation(0.5,0.5,0.5) , tm , tm);
  //     m4.multiply(inputMat, tm , modelMat);
  // };

  // window.pr = phiRot;

  let codeMat = new Float32Array([
    1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0,
    1.0,
  ]);

  let codeMatInv = new Float32Array([
    1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0,
    1.0,
  ]);

  let VisF = 1;
  let hoveredAddress = "";

  let sliceVal = 0.5;
  if (cvd.exprDim == 2) {
    vpAlpha = 0;
    vpBeta = 0;
    vpGamma = 0;
    vpScale = 2.0;
  }


  // };

  // window.rc = renderCode();

  document.querySelectorAll("#termMap .addrWrapper").forEach(function (x) {
    const addr = x.id.slice(10);

    if (addr in cells) {
      let ccc = cells[addr].cellColorCode;
      let color = "rgba(" + ccc.join(",") + ")";
      x.style.color = color;
      x.style.backgroundColor = color;

      let rect = x.getBoundingClientRect();
      let codePt = new Float32Array([
        (rect.left + rect.right) / 2 / 1024,
        (rect.top + rect.bottom) / 2 / 2048,
      ]);
      cells[addr].codePt = codePt;

      cells[addr].domElem = x;
    } else {
      // console.log("notIn",addr);
    }
  });

  document.querySelectorAll("#term .addrWrapper").forEach(function (x) {
    const addr = x.id.slice(10);

    if (addr in cells) {
      x.classList.add("hasCells");
      // console.log("isIn",addr);
      x.addEventListener("mouseenter", function (e) {
        hoveredAddress = addr;
      });
      x.addEventListener("mouseleave", function (e) {
        hoveredAddress = "";
      });
      x.addEventListener("click", function (e) {
        if (e.shiftKey) {
          e.preventDefault();
          cells[addr].visible = !cells[addr].visible;
        } else {
          setOnlyThisVisible(addr);
        }
      });
    } else {
      // console.log("notIn",addr);
    }
  });

  const toggleVisGroup = function (k) {
    VisF = VisF ^ (1 << (4 + k));
    //	console.log(VisF);
  };

  [1, 2, 3, 4, 5, 6, 7, 8].forEach(toggleVisGroup);

  let dragStartPos = null;
  let dragStartModelPos = null;
  let dragStartModelScale = null;

  let draggingSource = null;
  let draggingSource2 = null;
  let dragStartDist = null;

  let fN = 0;
  gl.enable(gl.DEPTH_TEST);
  const drawCursor = function () {
    initCoursorDraw();

    gl.uniformMatrix4fv(uLocCursor["poseMat"], false, poseMat);
    gl.uniformMatrix4fv(uLocCursor["projMat"], false, projMat);
    gl.uniformMatrix4fv(uLocCursor["cuMat"], false, cuMat);
    gl.drawArrays(gl.TRIANGLES, 0, 12);
  };

  const drawCodeView = function () {
    // return;

    initCodeViewDraw();

    gl.uniformMatrix4fv(uLocCodeView["poseMat"], false, poseMat);
    gl.uniformMatrix4fv(uLocCodeView["projMat"], false, projMat);
    gl.uniformMatrix4fv(uLocCodeView["modelMat"], false, codeMat);
    gl.uniform2fv(uLocCodeView["coCu"], codeCoursor);

    gl.uniform1fv(uLocCodeView["uTime"], cfft);

    if (cells[hoveredAddress] && cells[hoveredAddress].cellColorCode) {
      // codeCoursor.set(cells[addr].codePt);
      gl.uniform3fv(
        uLocCodeView["selectedCC"],
        cells[hoveredAddress].cellColorCode,
      );
    } else {
    }

    gl.uniform1i(uLocCodeView["u_texture"], 0); // texture unit 0
    gl.uniform1i(uLocCodeView["u_textureMap"], 1); // texture unit 1

    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  const lineWRange = gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE);
  gl.lineWidth(1);
  // lineWRange[1]
  const drawPrimitives = function (i) {
    if (i.d.dElemNum < 1) return;

    gl.bindBuffer(gl.ARRAY_BUFFER, i.buf);
    i.f(program, gl, gl.canvas.clientWidth, gl.canvas.clientHeight, uLoc, aLoc);

    let vMat = [vpAlpha * 360, vpBeta * 360, vpGamma * 360, vpScale];

    gl.uniform4fv(uLoc["euler"], vMat);
    gl.uniformMatrix4fv(uLoc["poseMat"], false, poseMat);
    gl.uniformMatrix4fv(uLoc["projMat"], false, projMat);
    gl.uniformMatrix4fv(uLoc["modelMat"], false, modelMat);

    // {console.log(poseMat.join("|"))};
    gl.uniform1fv(uLoc["VisF"], [VisF]);

    gl.uniform1fv(uLoc["uTime"], cfft);

    //console.log(i.d.dElemNum, i.buffData.length);
    //    gl.drawArrays(gl[i.d.dPrimitiveMode.toUpperCase()], i.d.StartIndex,
    // i.d.dElemNum
    //    )

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

  const clickedState = { right: {}, left: {} };

  let lastRotationTick = -1;
  var doAfterDraw = null;

  const drawDesktop = function (currentFrameTime, frame) {
    if (firstFrameTime == -1) {
      firstFrameTime = currentFrameTime;
    }
    cfft[0] = currentFrameTime;

    // if(fN%30==0){
    // 	console.log(fN);
    // }

    // gl.clearColor(0, 0, 0, 0.0);
    // gl.clearDepth(1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Compute the time elapsed since the last frame was rendered.
    // Use this value to ensure your animation runs at the exact
    // rate you intend.

    const deltaTime = currentFrameTime - lastFrameTime;
    lastFrameTime = currentFrameTime;

    // vpGamma += deltaTime * 0.0001;
    cmm();

    // Now call the scene rendering code once for each of
    // the session's views.

    // const viewport = glLayer.getViewport(view);

    // console.log(viewport.x, viewport.y, viewport.width, viewport.height);
    poseMat = m4.translation(0.0, 0.0, -3.0);

    projMat = m4.perspective(
      Math.PI / 6.0,
      gl.canvas.clientWidth / gl.canvas.clientHeight,
      0.01,
      20,
    );
    gl.useProgram(program);
    // gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

    initiated.forEach(drawPrimitives);
  };

  gl.clearColor(0, 0, 0, 0);
  // gl.clear(gl.COLOR_BUFFER_BIT)
  gl.cullFace(gl.FRONT_AND_BACK);
  //draw();

  function step(timestamp, frame) {
    fN++;
    // console.log(frame);

    let draw = drawDesktop;

    draw(timestamp, frame);
    if (doAfterDraw) {
      doAfterDraw();
      doAfterDraw = null;
    }
    if (!window.stopStep) {
      window.requestAnimationFrame(step);
    }
  }

  console.log("firstFrameReq");
  window.requestAnimationFrame(step);
}
