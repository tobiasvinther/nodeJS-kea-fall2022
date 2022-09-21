let id = 3

//maybe overkill with a function to do this.
//we learned in class that using ++ in FRONT of a variable will increment and update the variable immediatly
export const incrementId = () => {
    id++
    return id
}