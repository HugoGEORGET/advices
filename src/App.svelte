<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Advice from "./Advice.svelte";

  let adviceSlip = {};

  const typewriter = (node, { speed = 50 }) => {
    const valid =
      node.childNodes.length === 1 &&
      node.childNodes[0].nodeType === Node.TEXT_NODE;

    if (!valid) {
      throw new Error(
        `This transition only works on elements with a single text node child`
      );
    }

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration,
      tick: (t) => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      },
    };
  };

  const getAdvice = async () => {
    console.log("getAdvice");
    const res = await fetch("https://api.adviceslip.com/advice");
    const adviceSlipJson = await res.json();
    adviceSlip = adviceSlipJson;
  };

  onMount(getAdvice);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  {#if adviceSlip.slip}
    <Advice slip={adviceSlip.slip} />
  {:else}
    <p in:typewriter>Loading advice...</p>
  {/if}
  <br />
  <button transition:fade on:click={() => window.location.reload()}>
    New advice ?
  </button>
</main>
