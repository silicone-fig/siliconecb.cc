<script>
  import { page } from "$app/stores";

  // error code parsing
  function formatErrorMessage(message) {
    if (!message) return "UNKNOWN_ERROR";
    return message.toUpperCase().replace(/\s+/g, "_");
  }
</script>

<sveltekit:head>
  <title>{$page.status} | siliconeCB_</title>
  <link rel="icon" href="https://u.cubeupload.com/siliconefig/picture2.png" />
  <meta name="og:title" content="siliconeCB_ - amateur web dev [BETA]" />
  <meta name="title" content="siliconeCB_ - amateur web dev [BETA]" />
  <meta
    name="og:description"
    content="i'm a front-end web developer from the US with around 3 years of experience. check out my projects and blog!"
  />
  <meta
    name="description"
    content="i'm a front-end web developer from the US with around 3 years of experience. check out my projects and blog!"
  />
  <meta
    property="twitter:image"
    content="https://cdn.siliconecb.cc/f/betasite.png"
  />
</sveltekit:head>

<div class="wrapper">
  <!-- background animation -->
</div>

<div
  class="flex items-center justify-center min-h-screen"
  style="position: relative; z-index: 1;"
>
  <div
    class="flex flex-col w-[90%] max-w-[600px] rounded-lg border border-white"
    style="background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);"
  >
    <div class="flex flex-col justify-between gap-8 p-8">
      <h1 class="text-5xl font-bold lowercase text-white text-center">
        {$page.status}
      </h1>
      <p class="text-white text-center">that's an error :(</p>
      <p class="error-name">{formatErrorMessage($page.error?.message)}</p>
      <a
        class="text-white hover:text-green-500 underline underline-offset-4 lowercase underline-[1px]"
        href="/">← home</a
      >
    </div>
  </div>
</div>

<style>
  .wrapper {
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

  .error-name {
    font-family: "Roboto Mono", monospace;
    text-transform: uppercase;
    background-color: rgba(128, 128, 128, 0.2);
    display: inline-block;
    padding: 4px 8px;
    margin-top: 1rem;
    border-radius: 4px;
    color: white;
  }
</style>
