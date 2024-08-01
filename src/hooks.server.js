/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const response = await resolve(event);

  if (event.url.pathname === "/robots.txt") {
    response.headers.set("Cache-Control", "no-cache, must-revalidate");
  }

  return response;
}
