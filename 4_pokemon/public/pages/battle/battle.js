//Understående er en anden måde at gøre det på:
//const pathVariables = location.pathname.split("/")
//const pokemonName = pathVariables[pathVariables.length-1]

fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
    .then(response => response.json()) //en readable stream som er en bytestream, konvertering til json
    .then(result => {
        console.log(result) 
        console.log("You are battling", result.name)
        const randomMove = Math.floor(Math.random()*result.moves.length)
        console.log(result.name + " uses " + result.moves[randomMove].move.name)

        const battlingPokemonSprite = document.getElementById("battling-pokemon-sprite")
        battlingPokemonSprite.src = result.sprites.other.dream_world.front_default

        const iWon = Math.random() >= 0.5
        const whoWonHeader = document.getElementById("who-won")

        if(iWon) {
            whoWonHeader.innerText = "You won!"
            console.log("I won")
        } else {
            whoWonHeader.innerText = "You Lost!"
            console.log("I lost")
        }
        setTimeout(() => {

        }, 3000)
    })