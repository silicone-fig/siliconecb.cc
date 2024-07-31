<script>
  let projects = [
    {
      title: "klydeOPT",
      description: "an openly available clone of Clyde AI (killed by Discord)",
      link: "https://klydeopt.onrender.com/killed-by-discord",
      link_name: "website ↗",
    },
    {
      title: "ri-2e",
      description: "customizable friend bot, successor to klydeOPT",
      link: "https://github.com/silicone-fig/ri-2e",
      link_name: "github ↗",
    },
    {
      title: "siliconecb.cc",
      description: "the website you are looking at right now!",
      link: "https://github.com/silicone-fig/beta.siliconecb.cc",
      link_name: "github ↗",
    },
    {
      title: "wasteof.me",
      description: "free memorable shortlinks for wasteof.money",
      link: "https://wasteof.me",
      link_name: "website ↗",
    },
    //{ title: '(project title here)', description: '(description here)', link: 'https://example.com/', link_name: 'github ↗' },
  ];
</script>

<sveltekit:head>
  <title>projects | siliconeCB_</title>
  <link rel="icon" href="/favicon.png" />
  <meta name="og:title" content="siliconeCB_ - amateur web dev" />
  <meta name="title" content="siliconeCB_ - amateur web dev" />
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
    content="https://cdn.siliconecb.cc/f/gh-bannernew.png"
  />
</sveltekit:head>

<div class="wrapper">
  <!-- background animation (don't delete) -->
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
      <h2 class="text-2xl font-bold lowercase text-white text-center">
        projects
      </h2>
      <div class="overflow-y-auto h-[300px] p-4">
        <div class="flex flex-col gap-4">
          {#each projects as project}
            <div
              class="w-full h-[100px] rounded-lg p-4"
              style="background-color: rgba(255, 255, 255, 0.10);"
            >
              <div
                class="flex flex-col"
                style="position: relative; z-index: 2;"
              >
                <span class="text-base font-bold text-white"
                  >{project.title}</span
                >
                <p class="text-xs text-white mt-2">{project.description}</p>
                <a
                  class="text-white hover:text-green-500 underline underline-offset-4 lowercase underline-[1px] text-right"
                  href={project.link}
                  target="_blank">{project.link_name}</a
                >
              </div>
            </div>
          {/each}
        </div>
      </div>
      <a
        class="text-white hover:text-green-500 underline underline-offset-4 lowercase underline-[1px]"
        href="/">← back</a
      >
    </div>
  </div>
</div>

<style>
  :global(body) {
    background-color: black;
  }
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

  @media only screen and (max-width: 471px) {
    .w-full.h-\[100px\] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .w-full.h-\[100px\] * {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .flex.flex-col.gap-4 .text-xs {
      overflow: visible;
      text-overflow: clip;
      white-space: normal;
      word-break: break-all;
    }

    .flex.flex-col.gap-4 a {
      position: relative;
      top: -0.5em;
      display: inline-block;
      width: 100%;
      overflow: visible;
      text-overflow: clip;
      white-space: normal;
    }

    .overflow-y-auto::-webkit-scrollbar {
      display: none;
      overflow: none;
    }

    .overflow-y-auto {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: none;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>
