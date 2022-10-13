//import {makeOptions} from "./utils/fetchUtils.js";

const editButton = document.getElementById("btn-edit-id").addEventListener("click", toggle);

function toggle() {

    console.log('hello!')

    /*
    let riderRequest = {
        "name" : document.getElementById("name-id").value,
        "country" : document.getElementById("country-id").value, 
        "teamName" : document.getElementById("team-select").value }

    fetch(URL + "/riders/edit/" +  riderId, makeOptions("PATCH", riderRequest))
        .then(res=>{
            if(!res.ok){
                return Promise.reject("Error: " + res.status)
            }
            return res.json()
        })
        .catch(e => console.error(e))

        alert("Rytter gemt")
        window.location.href = "/#/riders";
    */
    
}