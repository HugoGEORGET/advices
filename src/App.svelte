<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Advice from "./Advice.svelte";

  const API_URL = "https://api.adviceslip.com/advice";

  let adviceQuery = "";

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
    const res = await fetch(API_URL);
    const adviceSlipJson = await res.json();

    if (res.ok) {
      return adviceSlipJson.slip;
    } else {
      throw new Error(adviceSlipJson);
    }
  };

  const searchAdvice = async () => {
    if (adviceQuery.length) {
      const res = await fetch(API_URL + "/search/" + adviceQuery);
      const adviceSlipsJson = await res.json();

      if (res.ok) {
        return adviceSlipsJson.slips[0];
      } else {
        throw new Error(adviceSlipsJson);
      }
    }
  };

  let adviceSlipPromise = getAdvice();

  const handleClick = () => {
    adviceSlipPromise = getAdvice();
  };
  const handleSearch = () => {
    adviceSlipPromise = searchAdvice();
  }

  onMount(getAdvice);
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  section {
    min-height: 250px;
  }

  #loading-indicator {
    height: 100%;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <section transition:fade>
    {#await adviceSlipPromise}
      <div id="loading-indicator" in:typewriter>Loading advice...</div>
    {:then adviceSlip}
      <Advice slip={adviceSlip} />
    {/await}
  </section>
  <br />
  <button transition:fade on:click={handleClick}>New advice ?</button>
  <br />
  <input
    transition:fade
    bind:value={adviceQuery}
    placeholder="Search a piece of advice..." />
  <button on:click={handleSearch}>Search</button>
</main>
