//hoisting: den går gennem hele filen og finder fx funktionsdeklerationer og "hoister" dem op i toppen
//Derfor kan man kalde en funktion før de er deklareret
add(5, 28)

function add(a, b) {
    return a + b
}

//in JS we can have functions as variables
//anonym function after equal sign... does not have a name
//just another way to declare a function
const addAnonymousFunction = function(a, b) {
    return a + b
}

console.log(addAnonymousFunction(3, 6))

//en funktion uden funktionsdeklerationen
const addArrowFunction = (a, b) => {
    return a + b
}

//kan ikke bruges hvis man har brug for at skrive flere linjer
const addArrowFunctionCompact = (a, b) => a + b

//der er ikke én der er bedre en anden. Men vær konsekvent. Hvis du gerne vil bruge arrow functions, så brug dem hele vejen igennem
//moderne kode bruger arrow functions. I arrow functions refererer "this" til sig selv, men i den gamle slags funktioner refererer 
//"this" til der hvor man kalder funktionen fra

//det er vigtigt at skrive clean og konsistent kode
//husk fx mellemrum efter kommaer og brug fx ikke tal i variablenavne


//a callback function is a reference to executalbe code that is passed as an argument to another piece of code
//vi sender en refererationsreference som et argument til en anden funktion
function genericActionExecutor(anyCallbackFunction, name) {
    //execute some code
    return anyCallbackFunction(name)
}

const spitting = (name) => `${name} is spitting`

console.log(genericActionExecutor(spitting, "Amanda"))

//reference to function vs calling the function 
const functionReference = add
const functionCall = add()


// task create a function that allows Malte to shoot and call it
// task result should be Malte i shooting

const shoot = (name) => `${name} is shooting`
console.log(genericActionExecutor(shoot, "Malte"))

//create a single statement below that console logs "Murat" i running away
console.log(genericActionExecutor((name) => `${name} is running away`, "Murat"))
