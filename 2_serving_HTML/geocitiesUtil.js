let visitorCounter = 0

export function incrementVisitorCounter() {
    visitorCounter++
    return visitorCounter
}

/*
//can't use this in module type syntax. IThis belongs in commonjs syntax
module.exports = {
    incrementVisitorCounter: incrementVisitorCounter
}
*/