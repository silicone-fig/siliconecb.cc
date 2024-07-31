import { error, redirect } from '@sveltejs/kit';
import fetch from 'node-fetch';

export async function load() {
  try {
    const response = await fetch('https://blog.siliconecb.cc');
    if (response.status === 502) {
      throw error(503, 'Service Unavailable');
    } else if (response.status === 200) {
      throw redirect(302, 'https://blog.siliconecb.cc');
    }
  } catch (error) {
    throw error;
  }
}