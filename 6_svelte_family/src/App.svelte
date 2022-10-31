<script>
  import Parent from "./components/Parent/Parent.svelte";
  import Home from "./components/Home/Home.svelte";

  const parents = ["Kurt", "Katja"]
  const children = [
    {
      name: "Flemming",
      blackSheep: "ultra-blacksheep"
    },
    {
      name: "Erik",
      blackSheep: "medium-blacksheep",
      brightKid: true
    },
    {
      name: "Ingrid",
      brightKid: true,
      isGirl: true
    },
  ]



  const pets = [
    {type: "Panda", name: "Po"},
    {type: "Dinosaur", name: "Little Foot"},

  ]
</script>

<main>
  <Home>
    <Parent name={parents[0]} children={children}></Parent>
    <Parent name={parents[1]} children={children}/> <!-- Dette er det samme som ovenfor, det kaldes et self enclosing tag -->
  </Home>
</main>

<style>
</style>
