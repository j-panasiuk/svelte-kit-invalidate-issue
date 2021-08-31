<script context="module">
  import { invalidate } from "$app/navigation";

  export function load() {
    console.log("load...");
    return {
      props: {
        number: Math.random(),
      },
    };
  }
</script>

<script>
  export let number = 0;

  function mutate() {
    console.log("mutate...");
    invalidate(".");
  }
</script>

<div>Number = {number}</div>
<button on:click={mutate}>Refresh</button>
