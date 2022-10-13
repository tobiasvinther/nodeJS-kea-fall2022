import { documentation } from "./database.js"

export const tab = documentation.map(documentationSnippet => 
    `
    <button class="nav-link${documentationSnippet.active}" id="v-pills-${documentationSnippet.id}-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${documentationSnippet.id}" 
    type="button" role="tab" aria-controls="v-pills-${documentationSnippet.id}" aria-selected="${documentationSnippet.selected}" style="width:130px;">
    ${documentationSnippet.name}
    </button>
    `
    ).join("\n")


export const tabContent = documentation.map(documentationSnippet => 
    `
    <div class="tab-pane fade${documentationSnippet.show}" id="v-pills-${documentationSnippet.id}" role="tabpanel" aria-labelledby="v-pills-${documentationSnippet.id}-tab">
    ${documentationSnippet.text}
    <br>
    <a type="button" href="/node-documentation/${documentationSnippet.id}" class="btn mt-4" style="background-color: lightgrey;" id="btn-edit-id">Edit text</a>
    </div>  
    `
    ).join("\n")

export function editContent(receivedId) {
    const foundDocumentation = documentation.find(doc => doc.id === receivedId)
    return foundDocumentation.text
}