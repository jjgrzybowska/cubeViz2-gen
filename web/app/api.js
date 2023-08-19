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

    return {
      loadDiagram: function (diagramData) {
        return new Promise((resolve, reject) => {
          load(diagramData, this);
          console.log("Loading diagram data:", diagramData);
          resolve("Diagram loaded successfully");
        });
      },
      webGlResources: {
        canvas: canvas,
        gl: gl,
      },
    };
  },
};
