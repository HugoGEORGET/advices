<script>
  export let slip = {};
  import { fade } from "svelte/transition";
</script>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>

<h1>
  <span transition:fade>{slip.advice}</span>
</h1>
<p transition:fade>Advice #{slip.id}</p>
