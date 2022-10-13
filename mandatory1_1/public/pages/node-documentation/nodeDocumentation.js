fetch("/api/node-documentation")
    .then(response => response.json())
    .then(documentationSnippets => {

        const tab = documentationSnippets.map(documentationSnippet => 
            `
            <button class="nav-link${documentationSnippet.active}" id="v-pills-${documentationSnippet.id}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${documentationSnippet.id}" 
            type="button" role="tab" aria-controls="v-pills-${documentationSnippet.id}" aria-selected="${documentationSnippet.selected}" style="width:130px;">
            ${documentationSnippet.name}
            </button>
            `
            ).join("\n")

            document.getElementById("v-pills-tab").innerHTML = tab   

        const tabContent = documentationSnippets.map(documentationSnippet => 
            `
            <div class="tab-pane fade${documentationSnippet.show}" id="v-pills-${documentationSnippet.id}" role="tabpanel" aria-labelledby="v-pills-${documentationSnippet.id}-tab">
            ${documentationSnippet.text}
            <br>
            <button type="button" class="btn mt-4" style="background-color: lightgrey;" id="btn-edit-id">Edit text</button>
            </div>
            
            `
            ).join("\n")

            document.getElementById("v-pills-tabContent").innerHTML = tabContent   
            
    })