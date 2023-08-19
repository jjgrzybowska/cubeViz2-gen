import { load } from "./load.js";

export const api = {
  init: function (domElement, config) {
    console.log("Initializing API");
    domElement.innerText = "Hello World";
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 600;
    domElement.appendChild(canvas);
    const gl = canvas.getContext("webgl2");
    if (!gl) {
      throw new Error("failed to initialize WebGL");
    } else {
    }

    const w = {
      loadDiagram: function (diagramData) {
        return new Promise((resolve) => {
          load(diagramData, this);
          window.requestAnimationFrame(this.step);
          console.log("Loading diagram data:", diagramData);
          resolve("Diagram loaded successfully");
        });
      },
      draw: null,
      webGlResources: {
        canvas: canvas,
        gl: gl,
      },
      viewport: {
        vpScale: 1.0,
        vpAlpha: 0,
        vpBeta: 0,
        vpGamma: 0,
      },
      fN: 0,
    };
    w.step = function (timestamp, frame) {
      w.fN++;
      w.draw(timestamp, frame);
      if (!window.stopStep) {
        window.requestAnimationFrame(w.step);
      }
    }
    return w
  },
};
