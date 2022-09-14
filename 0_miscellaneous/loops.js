const barbieMovies = [
    { name: "Swan Lake", year: 2001},
    { name: "Princess and the Pauper", year: 2008},
    { name: "Fairies", year: 2014}
]

//use map below to give all the movies a 10 rating (out of 10)

//callback function
//map returnerer et nyt array, den mapper en til en
const barbieMoviesRated = barbieMovies.map(movie => {
    movie.rating = 10
    return movie
})

console.log(barbieMoviesRated)

// task give me movies more recent than 2005
//filter takes a predicate that is either true or false
const moviesAfter2005 = barbieMovies.filter(movie => movie.year > 2005)

console.log(moviesAfter2005)

/*loop advice
ONly use for loops if you are doing "funger counting", i.e. counting to a number

Don't use enhanced for loops

Only use forEach if you are doing something and don't care about the result
i.e. populating the DOM with elements

Always prefer functional loops such as:
map, filter, and reduce

Map for mapping 1:1
Filter for filtering the array
Reduce to reduce the content of the array (more advanced, not required for this semester, but we are welcome to use it)
*/




//forEach (not functional)
//map, reduce, filter (this is what professionals use)