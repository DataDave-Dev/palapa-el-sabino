import type { APIRoute } from 'astro';
import { getUserFromCookies } from '../../../lib/auth';

export const GET: APIRoute = async ({ cookies }) => {
  const user = getUserFromCookies(cookies);

  if (!user) {
    return new Response(
      JSON.stringify({ user: null }),
      { status: 200 }
    );
  }

  return new Response(
    JSON.stringify({ user }),
    { status: 200 }
  );
};
