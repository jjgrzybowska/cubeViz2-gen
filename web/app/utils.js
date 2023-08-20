export const getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "json";
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};


export function logToDiv(text) {
    // Create a new div element
    const div = document.createElement("div");

    // Set the inner text of the div to the input string
    div.innerText = text;

    // Apply the necessary styles to the div

    div.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    div.style.border = "1px solid black";
    div.style.padding = "20px";
    div.style.margin = "16px";
    div.style.fontFamily = "monospace";
    div.style.fontSize = "48px";
    div.style.cursor = "pointer";

    // Append the div to the body
    document.getElementById("logDiv").appendChild(div);
    return div;
}


export function renderCheckboxesForObject(obj, parentNode) {
    // Function to set all other checkboxes to false except for the target one
    function setOnlyThisVisible(targetKey) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key].hasOwnProperty("visible")) {
                obj[key].visible = key === targetKey;
            }
        }
    }

    // Create a button to set all fields to true
    const allVisibleButton = document.createElement("button");
    allVisibleButton.textContent = "Set All Fields to True";
    allVisibleButton.addEventListener("click", function () {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key].hasOwnProperty("visible")) {
                obj[key].visible = true;
            }
        }
    });

    // Add the allVisibleButton to the parentNode
    parentNode.appendChild(allVisibleButton);
    parentNode.appendChild(document.createElement("br"));

    // Iterate through each property in the object
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key].hasOwnProperty("visible")) {
            const label = document.createElement("label");
            label.textContent = key;

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.name = key;
            checkbox.checked = obj[key].visible;

            checkbox.addEventListener("change", function () {
                obj[key].visible = this.checked;
            });

            // Create a small button to set only this field's value to true
            const setOnlyThisVisibleButton = document.createElement("button");
            setOnlyThisVisibleButton.textContent = "Set Only This Field to True";
            setOnlyThisVisibleButton.addEventListener("click", function () {
                setOnlyThisVisible(key);
            });

            parentNode.appendChild(checkbox);
            parentNode.appendChild(label);
            parentNode.appendChild(setOnlyThisVisibleButton);
            parentNode.appendChild(document.createElement("br"));
        }
    }
}