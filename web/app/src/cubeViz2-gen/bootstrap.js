// import { getJSON, logToDiv } from "./utils.js";
// import { main } from "./main.js";
import {api} from "../../../app_legacy/api";

export const boostrap = function () {
  const origin = window.location.origin;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${origin}/assets/CubicalJSONs/Cubical.Experiments.BrunerieCobordism.b0.json`, true);

  const domEl = document.createElement("div");
  document.body.appendChild(domEl);

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 400) {
      console.log('File contents:', xhr.responseText);
      const cv = api.init(domEl , {});
      cv.loadDiagram(JSON.parse(xhr.responseText));
      //rotate test
      // cv.viewport.vpScale = 0.5;
      //  cv.viewport.vpGamma = Math.random();
      //  cv.viewport.vpBeta = Math.random();

    } else {
      console.error('Request failed:', xhr.status, xhr.statusText);
    }
  };
  xhr.send();
}








//
// function createPreTag(content) {
//   // Create a new <pre> element
//   const preElement = document.createElement("pre");
//
//   // Set the content of the <pre> element
//   preElement.textContent = content;
//
//   // Append the <pre> element to the body
//   document.body.appendChild(preElement);
// }
// //TODO: start your analyze here
// let jsonFileName = window.location.hash.slice(1);
//
// if (jsonFileName) {
//   jsonFileName = "../assets/CubicalJSONs/" + jsonFileName + ".json";
// } else {
//   jsonFileName = "cvd.json";
// }
// console.log(jsonFileName)
// getJSON(jsonFileName, function (e, cvdR) {
//   if (cvdR.Right) {
//     // const sesionTy = "immersive-vr"
//     if (window.embedMode) {
//       main(cvdR.Right, null, null);
//       document.body.classList.add("onDesktop");
//       return;
//     }
//
//     const startSession = function () {
//       if (navigator.xr) {
//         // If the device allows creation of exclusive sessions set it as the
//         // target of the 'Enter XR' button.
//
//         function startSesionOfType(sesionTy) {
//           navigator.xr.requestSession(sesionTy).then((session) => {
//             window.addEventListener("error", function (a, b, c, d, e) {
//               let errMsg = "";
//               errMsg += `\nmessage: ${a}`;
//               errMsg += `\nsource: ${b}`;
//               errMsg += `\nlineno: ${c}`;
//               errMsg += `\ncolno: ${d}`;
//               errMsg += `\nerror: ${e}`;
//               logToDiv("error:\n " + errMsg);
//               session.end();
//               return true;
//             });
//
//             document.body.removeEventListener("click", startSession);
//             session.requestReferenceSpace("local").then((refSpace) => {
//               // console.log(refSpace);
//               // if (session.domOverlayState) {
//               //   logToDiv("session.domOverlayState.type");
//               // } else {
//               //   logToDiv("DOM overlay not supported or enabled!");
//               // }
//
//               main(cvdR.Right, session, refSpace);
//             });
//
//             /* continue to set up the session */
//           });
//         }
//         let supportedModes = [];
//         navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
//           if (supported) {
//             supportedModes.push("immersive-ar");
//           }
//           navigator.xr.isSessionSupported("immersive-vr").then((supported) => {
//             if (supported) {
//               supportedModes.push("immersive-vr");
//             }
//             supportedModes.forEach(function (m) {
//               var b = logToDiv("ready: " + m);
//
//               b.addEventListener("click", function () {
//                 startSesionOfType(m);
//               });
//             });
//           });
//         });
//       } else {
//       }
//     };
//
//     (function () {
//       var b = logToDiv("desktop session");
//
//       b.addEventListener("click", function () {
//         main(cvdR.Right, null, null);
//         document.body.classList.add("onDesktop");
//       });
//     })();
//
//     startSession();
//     // document.body.addEventListener("click",startSession);
//   } else {
//     createPreTag(cvdR.Left);
//   }
// });