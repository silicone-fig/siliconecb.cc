<script>
  import App from "$lib/components/threlte-1/App.svelte";
</script>

<div>
  <App />
</div>

<style>
  :global(body){
    margin: 0;
  }
  div {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(
      45deg,
      #364038,
      #8c8c8c,
      #000000,
      #202822,
      #6d9c79
    );
    background-size: 600% 100%;
    animation: gradient 50s cubic-bezier(0.25, 0.5, 0.5, 1) infinite;
  }
  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
</style>
