import { json } from '@sveltejs/kit';

export async function GET() {
  const fetch = await import('node-fetch').then(m => m.default);
  // dummy request to test hiding server-side requests from the client (i.e database polling)
  const response = await fetch('https://example.com');
  return json({ message: 'hello, world!' }, 200);
}