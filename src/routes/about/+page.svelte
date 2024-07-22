<sveltekit:head>
  <title>about | siliconeCB_</title>
  <link rel="icon" href="https://u.cubeupload.com/siliconefig/picture2.png"/>
  <meta name="og:title" content="siliconeCB_ - amateur web dev [BETA]"/>
  <meta name="title" content="siliconeCB_ - amateur web dev [BETA]"/>
  <meta name="og:description" content="i'm a front-end web developer from the US with around 3 years of experience. check out my projects and blog!"/>
  <meta name="description" content="i'm a front-end web developer from the US with around 3 years of experience. check out my projects and blog!"/>
  <meta property="twitter:image" content="https://cdn.siliconecb.cc/f/betasite.png"/>
</sveltekit:head>

<div class="wrapper">
  <!-- background animation -->
</div>

<div class="flex items-center justify-center min-h-screen" style="position: relative; z-index: 1;">
  <div class="flex flex-col w-[90%] max-w-[600px] rounded-lg border border-white" style="background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
    <div class="flex flex-col justify-between gap-8 p-8">
      <h2 class="text-2xl font-bold lowercase text-white text-center">about me</h2>
      <p class="text-white text-center">Heyo! I'm siliconeCB_, an amateur web developer with just under 3 years of experience! I got into programming through Scratch in elementary school, and my life has never been the same! My favorite programming language is Svelte, which is the framework running the website you're looking at right now! <br><br>I also enjoy playing around with graphics and VFX in Photoshop, Blender, and After Effects! :)</p>
      <a class="text-white hover:text-green-500 underline underline-offset-4 lowercase underline-[1px]" href="/">← back</a>
    </div>
  </div>
</div>

<style>
  body {
    margin: 0;
  }
 .wrapper {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(45deg, #364038, #8c8c8c, #000000, #202822, #6d9c79);
    background-size: 600% 100%;
    animation: gradient 50s cubic-bezier(0.25, 0.5, 0.5, 1) infinite;
  }
  @keyframes gradient {
    0% {background-position: 0%}
    50% {background-position: 100%}
    100% {background-position: 0%}
  }
</style>