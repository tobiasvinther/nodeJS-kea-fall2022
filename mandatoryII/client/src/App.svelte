<script>
	import { Router, Link, Route } from "svelte-navigator"
  import { SvelteToast, toast } from '@zerodevx/svelte-toast'
  import { SHOW_LOGIN } from "./store/globals.js"
  
  import Home from "./pages/Home/Home.svelte"
  import Signin from "./pages/Signin/Signin.svelte"
  import Secrets from "./pages/Secrets/Secrets.svelte"
  import Contact from "./pages/Contact/Contact.svelte"


  async function logOut() {
    await fetch("http://localhost:8080/api/logout", {
      credentials: "include"
      })
      console.log("Log out successful")
      toast.push("Logged out")
      SHOW_LOGIN.set(true)
  }
</script>

<Router>
  <nav>
    <ul>
      <span class="link-item">
        <Link to="/" >Home</Link>
      </span>
      <span class="link-item">
        <Link to="/secrets">Secrets</Link>
      </span>
      <span class="link-item">
        <Link to="/contact">Contact</Link>
      </span>
      {#if $SHOW_LOGIN === true}
      <span class="link-item">
        <Link to="/login">Log in</Link>
      </span>
      {/if}
      {#if $SHOW_LOGIN === false}
      <span class="link-item">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <Link to=""on:click={logOut}>Log out</Link>
      </span>
      {/if}
    </ul>
  </nav>
  
  <div>
      <Route path="/" primary={false}><Home /></Route>
      <Route path="/login" primary={false}><Signin /></Route>
      <Route path="/secrets" primary={false}><Secrets /></Route>
      <Route path="/contact" primary={false}><Contact /></Route>
  </div>
</Router>

<SvelteToast />


<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: rgb(0, 0, 0);
	}
  .link-item {
    padding-left: 6px;
    padding-right: 6px;
  }
  nav {
    padding-bottom: 1.5em;
  }
</style>

