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
        `,
        active: " active",
        show: " active show",
        selected: "true"
    },
    {
        id: "express",
        name: "Express",
        text: `
        Express is a minimalist web framework for Node.js<br>
        To use Express in our node.js app, we need to do a few things:
        <ul>
        <li>Add Express as a dependency in package.json</li>
        <li>Install it by using the terminal command <i>npm install express</i></li>
        <li>Import Express inside our app.js</li>
        <li>Creating a new instance of Express by defining a variable, like so: <i>const app = express()</i></li>
        <li>Have the server listen on a port (basic version below): 
        <br><i>const server = app.listen(8080, () => {
         <br>   console.log("Server is running on port 8080")
        })</i></li>
        `,
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "servingHTML",
        name: "Serving HTML",
        text: `
        <b>Serving HTML</b><br>
        In its simplest form, we can serve an HTML page like this in Node.js:<br>
        <i>
        app.get("/", (req, res) => {<br>
            res.sendFile(path.resolve("./public/frontpage/frontpage.html"));<br>
        });<br>
        </i>
        We can also send a variable, containing HTML:<br>
        <i>app.get("/", (req, res) => {<br>
            res.send(indexPage)<br>
        })</i>
        `,
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "modules",
        name: "Modules",
        text: `
        <b>Why we need a module system</b><br>
        Since we don't want all of our JavaScript code inside one large file, we need to split it up into different files. In that way, we can better organize the code and we
        can control which part of the code is accessible.
        <br><br>
        <b>CommonJS</b><br>
        In Node.js each .js file is handled as a separate CommonJS module.
        We need to specify which parts of the code that should be exported and imported.
        <br>Below is an example of importing one of Node.js's built-in modules:<br>
        <i>const http = require("http")</i><br>
        And here we see an example of importing from another file:<br>
        <i>const someFile = require("./someFile")</i><br>
        <br>
        <b>ES Modules</b><br>
        The more modern way of using modules is to use ES Modules (ECMAScript Modules).
        To use ES modules we need to specify it in package.json, like so: <i>"type": "module"</i><br>
        Export example:<br>
        <i>export const someVariable = "Hello"</i><br>
        Import example:<br>
        <i>import { someVariable } from "./someFile.js"</i><br>
        <br>
        <b>Differences between the two approaches</b><br>
        CommonJS imports are dynamically resolved at runtime. When the code is executed, the require() function is run. This means that you can call it from anywhere in the code.
        <br>
        When using ES Modules, imports are static, meaning the execute at parse time. Imports are hoisted, so they are "moved" to the top of the file.
        `,
        active: "",
        show: "",
        selected: "false"
    },
    {
        id: "packageAndCss",
        name: "Package.json and CSS",
        text: `
        <b>The three duties of package.json</b><br>
        Package.json handles three duties, as seen below.
        <ul>
        <li><b>Meta data:</b> is simply data about the application, e.g. "name" or "type".</li>
        <li><b>Dependencies:</b> are things we need to download for the application to work, such as express. Like in pom.xml when using Maven, the package.json is scanned and the relevant files are downloaded when typing <i>npm install</i> in the terminal.</li>
        <li><b>Scripts:</b> are custom scripts that we can define. E.g. in this project there is a script called “start” and when that is run by typing in <i>npm run start</i> in the console, it is the same as writing <i>node.js app.js</i>, because we have defined that in package.js</li>
        </ul>
        Inside the package.json file, you first and foremost need a couple of curly brackets, so it reads as JSON. Then, we can define properties, e.g.:<br>
        <i>"dependencies": {<br>   
        "express" : "^4.18.1"}</i><br>
        This way our project "knows" that it needs express to run. It is like the pom.xml-file in a Maven project.
        <br><br>
        <b>Using CSS</b><br>
        There are basically three ways of applying CSS to your HTML pages:
        <ul>
        <li>Inline</li>
        <li>Via style tags in HTML</li>
        <li>CSS files</li>
        </ul>
        Inline styling is quick and dirty. It will override stylings from other sources. The disadvantage is that it's not scalable, since it only applies to that specific line.<br>
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
        text: `
        <b>Using fetch</b><br>
        Here is a simple example of the structure of the Fetch API:<br>
        <i>fetch(www.somewebsite.com/someendpoint)
        <br>.then((response) => response.json())
        <br>.then((data) => console.log(data))</i>
        <br>
        Fetch returns a response as a promise, which you can tranform into JSON, for instance, and then the data can be used.
        <br>
        You can fetch from external sites or your own backend. Fetch can be used with safe HTML methods, such as GET, but also to POST, PATCH, etc.
        <br><br>
        <b>Redirecting</b><br>
        <i>res.redirect([status, ] path)</i>
        <br>
        The status parameter is the status code to send, while the path parameter describes the path/page the app should redirect to.
        <br>The status parameter is optional and is 302 by default.
        `,
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
        id: "routes",
        name: "Routes",
        text: `<b>Routes</b><br>
        Routes is a way of splitting routes up into separate files instead of having everything inside the app.js file. Instead, you import the route from another file:<br><br>
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