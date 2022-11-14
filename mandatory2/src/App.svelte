<script>
  import NavBar from "./components/NavBar.svelte";
  import SignUp from "./components/SignUp.svelte";
  import { SvelteToast } from '@zerodevx/svelte-toast'
  const options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
</script>



<main>
  <NavBar/>
  <SignUp/>
  <SvelteToast {options} />
</main>

<style>
</style>
