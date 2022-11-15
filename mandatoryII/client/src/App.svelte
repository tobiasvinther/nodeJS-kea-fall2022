<script>
	import { Router, Link, Route } from "svelte-navigator";
  
  import Home from "./pages/Home/Home.svelte";
  import Signin from "./pages/Signin/Signin.svelte";
  import Secrets from "./pages/Secrets/Secrets.svelte";
  import Contact from "./pages/Contact/Contact.svelte";
  import Footer from "./components/Footer/Footer.svelte";
</script>

<Router>
  <nav>
    <ul>
      <span class="link-item">
        <Link to="/" >Home</Link>
      </span>
      <span class="link-item">
        <Link to="/signin">Sign in</Link>
      </span>
      <span class="link-item">
        <Link to="/secrets">Secrets</Link>
      </span>
      <span class="link-item">
        <Link to="/contact">Contact</Link>
      </span>
    </ul>
  </nav>
  
  <div>
      <Route path="/"><Home /></Route>
      <Route path="/signin"><Signin /></Route>
      <Route path="/secrets"><Secrets /></Route>
      <Route path="/contact"><Contact /></Route>
  </div>
</Router>

<!--<Footer></Footer>-->

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

