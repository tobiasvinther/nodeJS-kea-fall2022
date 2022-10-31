<script>
  import Choice from '../public/Properties/Choice.svelte';
  import EventText from '../public/Properties/EventText.svelte';
  import Event from '../public/Properties/Event.svelte';
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'

  let database = [
    {
      id : 1,
      title : "The Adventure Begins",
      text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      choices : [
        {
          id : 1,
          text : "First choice",
          goto : ""
        },
        {
          id : 2,
          text : "Second choice",
          goto : ""
        },
      ]
    }
  ]

  let currentEvent = database[0]
  let currentChoices = [
        {
          id : 1,
          text : "First choice",
          goto : ""
        },
        {
          id : 2,
          text : "Second choice",
          goto : ""
        },
      ]
  
  let url = "http://localhost:5173/"

</script>

<main class="container">
  <Event eventTitle={currentEvent.title}/>
  <EventText eventText={currentEvent.text}/>
  {#each currentChoices as choice (choice.id)}
    <Choice choiceText={choice.text} goto={url + "events/" + choice.id.toString()}/>
  {/each}

</main>

<style>
</style>
