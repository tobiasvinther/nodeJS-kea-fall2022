import fs from "fs";

const navComponent = fs.readFileSync("./public/components/navbar/navbar.html").toString();
const footerComponent = fs.readFileSync("./public/components/footer/footer.html").toString();

export function renderPage(path, options = {}) {
    const page = fs.readFileSync("./public/pages"+path).toString();

    return navComponent
        .replace("%%TAB_TITLE%%", options.tabTitle || "Pokemon")
        .replace("%%PAGE_CSS_LINK%%",
            options.cssLink || ""
        ) 
        + page
        + footerComponent;
}


const battle = fs.readFileSync("./public/pages/battle/battle.html").toString();
export const battlePage = navComponent
                    .replace("%%PAGE_CSS_LINK%%",
                    `<link rel="stylesheet" href="/pages/battle/battle.css">`
                    )
                    + battle + footerComponent;

export function injectData(pageString, data) {
    const brokenUpHTML = pageString.split("</head>")
    const variableName = Object.keys(data)[0]
    return brokenUpHTML[0] + `<script>const ${variableName} = ${JSON.stringify(data[variableName])}</script></head>` + brokenUpHTML[1]
}
