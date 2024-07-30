import { error } from '@sveltejs/kit';

export function load() {
  throw error(503, 'Service Unavailable');
}