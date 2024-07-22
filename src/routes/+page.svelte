<sveltekit:head>
  <title>home (beta) | siliconeCB_</title>
  <link rel="icon" href="/favicon.png"/>
  <meta name="og:title" content="siliconeCB_ - amateur web dev [BETA]"/>
  <meta name="title" content="siliconeCB_ - amateur web dev [BETA]"/>
  <meta name="og:description" content="i'm a front-end web developer from the US with around 3 years of experience. check out my projects and blog!"/>
  <meta name="description" content="i'm a front-end web developer from the US with around 3 years of experience. check out my projects and blog!"/>
  <meta property="twitter:image" content="https://cdn.siliconecb.cc/f/betasite.png"/>
</sveltekit:head>

<div class="wrapper">
  <!-- empty div for gradient animation -->
</div>

<div class="flex items-center justify-center min-h-screen" style="position: relative; z-index: 1;">
  <div class="flex flex-col w-[90%] max-w-[600px] rounded-lg border border-white md:flex-row" style="background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
    <div class="flex-1 md:order-2">
      <div class="flex items-center justify-center h-full">
        <div class="w-12 h-12 bg-white rounded-sm"></div>
      </div>
    </div>
    <div class="flex flex-col justify-between gap-8 p-8">
      <div>
        <h1 class="text-4xl font-bold lowercase text-white">hi, i'm siliconeCB_</h1>
        <p class="text-gray-500 lowercase">frontend developer</p>
        <p class="mt-4 text-white">hello, world!</p>
      </div>
      <div class="flex justify-between w-full gap-4">
        <a class="text-white hover:text-green-500 underline underline-offset-4 lowercase" href="blog">
          blog
        </a>
        <a class="text-white hover:text-green-500 underline underline-offset-4 lowercase" href="projects">
          projects
        </a>
        <a class="text-white hover:text-green-500 underline underline-offset-4 lowercase" href="about">
          about
        </a>
        <a class="text-white hover:text-green-500 underline underline-offset-4 lowercase" href="socials">
          socials
        </a>
      </div>
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

