<sveltekit:head>
  <title>socials | siliconeCB_</title>
  <link rel="icon" href="https://u.cubeupload.com/siliconefig/picture2.png"/>
  <meta name="og:title" content="siliconeCB_ - amateur web dev [BETA]"/>
  <meta name="title" content="siliconeCB_ - amateur web dev [BETA]"/>
  <meta name="og:description" content="i'm a front-end web developer from the US with around 3 years of experience. check out my projects and blog!"/>
  <meta name="description" content="i'm a front-end web developer from the US with around 3 years of experience. check out my projects and blog!"/>
  <meta property="twitter:image" content="https://cdn.siliconecb.cc/f/betasite.png"/>
  <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</sveltekit:head>

<div class="wrapper">
  <!-- background animation -->
</div>

<div class="flex items-center justify-center min-h-screen" style="position: relative; z-index: 1;">
  <div class="flex flex-col w-[90%] max-w-[600px] rounded-lg border border-white" style="background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(10px); box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
    <div class="flex flex-col justify-between gap-8 p-8">
      <h2 class="text-2xl font-bold lowercase text-white text-center">my socials</h2>
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="https://github.com/silicone-fig" target="_blank">
          <div class="social-tile w-32 h-12 rounded-lg" style="background-color: rgba(255, 255, 255, 0.10);">
            <div class="flex items-center justify-center h-full">
              <i class='bx bxl-github' style='color:#ffffff; font-size: 24px; margin-right: 8px;'></i>
              <p class="text-white text-center">github</p>
            </div>
          </div>
        </a>
        <a href="https://wasteof.money/users/siliconecb_" target="_blank">
          <div class="social-tile w-32 h-12 rounded-lg" style="background-color: rgba(255, 255, 255, 0.10);">
            <div class="flex items-center justify-center h-full">
              <img src="/icon/womicon.png" alt="icon" width="19px" height="19px" style="margin-right: 9px; width: 19px; height: 19px; border-radius: 15%;">
              <p class="text-white text-center">wasteof</p>
            </div>
          </div>
        </a>
        <a href="mailto:me@siliconecb.cc" target="_blank">
          <div class="social-tile w-32 h-12 rounded-lg" style="background-color: rgba(255, 255, 255, 0.10);">
            <div class="flex items-center justify-center h-full">
              <i class='bx bxs-envelope' style='color:#ffffff; font-size: 24px; margin-right: 8px;'></i>
              <p class="text-white text-center">email</p>
            </div>
          </div>
        </a>
      </div>
      <a class="text-white hover:text-green-500 underline underline-offset-4 lowercase underline-[1px]" href="/">← back</a>
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
    100% {background-position:0%}
  }
  .social-tile:hover {
    animation: hover 0.3s ease-in-out forwards;
  }
  @keyframes hover {
    0% {
      background-color: rgba(255, 255, 255, 0.10);
    }
    100% {
      background-color: rgba(255, 255, 255, 0.20);
    }
  }

  .social-tile {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.10);
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
</style>