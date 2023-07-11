import { getJSON, logToDiv } from "./utils.js";
import { main } from "./main.js";

function createPreTag(content) {
  // Create a new <pre> element
  const preElement = document.createElement("pre");

  // Set the content of the <pre> element
  preElement.textContent = content;

  // Append the <pre> element to the body
  document.body.appendChild(preElement);
}
//TODO: start your analyze here
let jsonFileName = window.location.hash.slice(1);
console.log(jsonFileName)
if (jsonFileName) {
  jsonFileName = "../assets/CubicalJSONs/" + jsonFileName + ".json";
} else {
  jsonFileName = "cvd.json";
}
console.log(jsonFileName)
getJSON(jsonFileName, function (e, cvdR) {
  if (cvdR.Right) {
    // const sesionTy = "immersive-vr"
    if (window.embedMode) {
      main(cvdR.Right, null, null);
      document.body.classList.add("onDesktop");
      return;
    }

    const startSession = function () {
      if (navigator.xr) {
        // If the device allows creation of exclusive sessions set it as the
        // target of the 'Enter XR' button.

        function startSesionOfType(sesionTy) {
          navigator.xr.requestSession(sesionTy).then((session) => {
            window.addEventListener("error", function (a, b, c, d, e) {
              let errMsg = "";
              errMsg += `\nmessage: ${a}`;
              errMsg += `\nsource: ${b}`;
              errMsg += `\nlineno: ${c}`;
              errMsg += `\ncolno: ${d}`;
              errMsg += `\nerror: ${e}`;
              logToDiv("error:\n " + errMsg);
              session.end();
              return true;
            });

            document.body.removeEventListener("click", startSession);
            session.requestReferenceSpace("local").then((refSpace) => {
              // console.log(refSpace);
              // if (session.domOverlayState) {
              //   logToDiv("session.domOverlayState.type");
              // } else {
              //   logToDiv("DOM overlay not supported or enabled!");
              // }

              main(cvdR.Right, session, refSpace);
            });

            /* continue to set up the session */
          });
        }
        let supportedModes = [];
        navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
          if (supported) {
            supportedModes.push("immersive-ar");
          }
          navigator.xr.isSessionSupported("immersive-vr").then((supported) => {
            if (supported) {
              supportedModes.push("immersive-vr");
            }
            supportedModes.forEach(function (m) {
              var b = logToDiv("ready: " + m);

              b.addEventListener("click", function () {
                startSesionOfType(m);
              });
            });
          });
        });
      } else {
      }
    };

    (function () {
      var b = logToDiv("desktop session");

      b.addEventListener("click", function () {
        main(cvdR.Right, null, null);
        document.body.classList.add("onDesktop");
      });
    })();

    startSession();
    // document.body.addEventListener("click",startSession);
  } else {
    createPreTag(cvdR.Left);
  }
});
