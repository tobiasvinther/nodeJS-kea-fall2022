export let users = [
    {
        name: "TestUser",
        email: "test@email.com",
        password: "test123"
    }
]

export let documentation = [
    {
        id: "introduction",
        name: "Introduction",
        text: `
        <b>Git in the terminal</b>
        <br>
        Git has various commands which can be used through the terminal, if you have git installed on your machine.<br>
        <i>Git clone [repository url]</i> will clone a repository to the directory you are currently in.
        Git add, git commit, git push and git pull are some of the commands used most of the time when working on a project with other collaborators. Remember that these commands only work when you are inside your local git repository, where there will be a (hidden) .git folder.
        <br>
        <br>
        <b>Data types in Javascript</b>
        <br>
        Like other programming languages, JavaScript has a number of data types. The five most basic types of data in JavaScript are strings, numbers, booleans, undefined, and null. 
        <br>
        Javascript is a dynamic typing language, which means you don’t need to specify the data type, as the engine will infer the data type based on value assignment.
        <br>
        The triple equal sign will also compare data type:
        <br><i>1 === '1';    // false</i>
        <br><i>1 == '1';     // true</i>
        <br>
        <br>
        <b>What is Node.js?</b>
        <br>
        Node.js let’s us run JavaScript outside of a browser. It uses a JavaScript engine, such as Chrome’s V8 to accomplish this.
        To run a file with node.js, you type <br><i>node [your JavaScript file] (usually app.js)</i>
        <br>
        <br>
        <b>REST API design</b>
        <br>
        A REST API follows some conventions. If we are designing an API for painters, the endpoint naming would be:
        /painters to get all painters
        /painters/{id} to get a specific painter
        As we can see, the naming is plural and simple and shouldn’t be for instance /getPainters
        The order of http methods should be:<br>
        - GET (all)<br>
        - GET (single)<br>
        - POST<br>
        - PUT<br>
        - PATCH<br>
        - DELETE<br>
        <br>
        <b>Package.json</b><br>
        First and foremost, you need a couple of curly brackets, so it reads as JSON. Then, we can define properties, e.g.:<br>
        <i>"dependencies": {<br>   
        "express" : "^4.18.1"}</i><br>
        This way our project "knows" that it needs express to run. It is like the pom.xml-file in a Maven project.
        `,
        active: " active",
        show: " active show",
        selected: "true"
    },
    {
        id: "firstServer",
        name: "First Server",
        text: "<b>Sed ut perspiciatis</b> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "servingHTML",
        name: "Serving HTML",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "restAPI",
        name: "Rest API",
        text: `
        <b>The three duties of package.json</b><br>
        <ul>
        <li><b>Meta data:</b> is simply data about the application, e.g. "name" or "type".</li>
        <li><b>Dependencies:</b> are things we need to download for the application to work, such as express. Like in pom.xml when using Maven, the package.json is scanned and the relevant files are downloaded when typing <i>npm install</i> in the terminal.</li>
        <li><b>Scripts:</b> are custom scripts that we can define. E.g. in this project there is a script called “start” and when that is run by typing in <i>npm run start</i> in the console, it is the same as writing <i>node.js app.js</i>, because we have defined that in package.js</li>
        </ul>
        <br>
        <b>Defining and invoking scripts</b><br>
        Some text
        <br><br>
        <b>Using fetch</b><br>
        Some text
        <br><br>
        <b>using CSS</b><br>
        There are basically three ways of applying CSS to your HTML pages:
        <ul>
        <li>Inline</li>
        <li>Via style tags in HTML</li>
        <li>CSS files</li>
        </ul>
        Inline styling is quick and dirty. It will override stylings from other sources. The disadvatage is that it's not scalable, since it only applies to that specific line.<br>
        Style tags lets you define styles inside the HTML that applies to a class or an id. It will only apply to the page it's a part of. It's more scalable than inline, but takes up space in the HTML file.<br>
        CSS files are probably the preferred way of applying CSS. Here youwrite the CSS rules in a separate file and then import that file to your HTML. The same CSS file can then be imported to several HTML files.
        Bootstrap and similar styling libraries are basically very large CSS files that you can import and use. 
        `,
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "fetchingRedirecting",
        name: "Fetching and redirecting",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "ssr",
        name: "SSR",
        text: `<b>Server Side Rendering</b><br>Server Side Rendering (SSR) means that we render the HTML pages before we serve them, instead of assembling them on arrival, which would be Client Side Rendering (CSR). The main advantage of SSR is that it’s better for SCO rankings (Social Channel Optimisation). It also is less demanding for the client, since the computations happen on the server.`,
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "injectingData",
        name: "Injecting data",
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "routes",
        name: "Routes",
        text: `<b>Routes</b><br>
        Routes is a way of splitting up into separate files instead of having everything inside the app.js file. Instead, you import the route from another file:<br><br>
        <i>import pokemonRouter from "./routers/pokemonRouter.js"<br>
        app.use(pokemonRouter)</i><br><br>
        PokemonRouter.js looks like this:<br><br>
        <i>import { Router } from "express"<br>
        const router = Router()<br><br>
        
        router.get("/api/pokemon", (req, res) => {<br>
            fetch("https://pokeapi.co/api/v2/pokemon")<br>
            .then(response => response.json())<br>
            .then(result => res.send({ data: result }))<br>
        })<br>
        <br>
        export default router</i>
        `,
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "svelte",
        name: "Svelte",
        text: `
        <b>Svelte</b><br>
        Svelte is a lightweight web framework. From the Svelte website:
        <br><br>
        “Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app”.
        <br><br>
        To start a new Svelte project, you simply type in a few commands in the terminal:
        <br><br>
        <i>- npm create vite</i><br>
        <i>- cd [project name]</i><br>
        <i>- npm install</i><br>
        <i>- npm run dev</i>
        <br><br>
        The overall structure in a .svelte file is scripts at the top, then HTML, then styles (css) at the button. Each file contains the relevant JavaScript, HTML, and styling.
        `,
        active: "",
        show: "",
        selected: "false"
    }
]

export function getUser(email) {
    const foundUser = users.find(user => user.email === email) 

    if(!foundUser) {
        alert("User not found");
    } else {
        alert("Logged in");
        return foundUser 
    }  
}