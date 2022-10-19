//import {makeOptions} from "./utils/fetchUtils.js";
const pathVariables = location.pathname.split("/")
const pathVariableId = pathVariables[pathVariables.length-1]

const editButton = document.getElementById("btn-edit-id").addEventListener("click", saveEdit);

function saveEdit() {

    fetch("/node-documentation/" + pathVariableId, {
        method: "PATCH",
        body: JSON.stringify({
            text: document.getElementById("documentation-text-id").value,
        }),
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
    })

    alert("Changes saved!")
    console.log(document.getElementById("documentation-text-id").value)
}