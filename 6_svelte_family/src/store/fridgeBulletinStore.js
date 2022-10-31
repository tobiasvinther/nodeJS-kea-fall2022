import { writable } from "svelte/store" //der findes forskellige typer stores, fx readable (read only, kan ikke ændres)

//normalt kalder man det ofte det samme som filnavnet, i modsætning til her
export let fridgeMessageStore = writable("Write your message")