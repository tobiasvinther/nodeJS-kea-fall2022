<!--strukturen er: scripts er øverst, html i midten, og styles i bunden-->

<script>
    import Date from "./components/Date.svelte";

  const name = "Tobias"
  const age = 37

</script>

<h2 id="page-title">First Svelte Project</h2>
<div>More content for {name}.</div>
<div>Age: {age}.</div>
<Date></Date>

<style>
  #page-title {
    color: blue;
  }
</style>