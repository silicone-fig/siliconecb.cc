import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      port: 4112 // took me forever to figure this out, modify this when running on production (npm start)
    })
  },
  vite: {
    server: {
      cors: true
    }
  },
  preprocess: vitePreprocess()
};

export default config;