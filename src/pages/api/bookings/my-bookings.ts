import type { APIRoute } from 'astro';
import { db, Bookings, eq } from 'astro:db';
import { getUserFromCookies } from '../../../lib/auth';

export const GET: APIRoute = async ({ cookies }) => {
  try {
    // Verificar autenticación
    const user = getUserFromCookies(cookies);
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Debes iniciar sesión' }),
        { status: 401 }
      );
    }

    // Obtener reservas del usuario
    const bookings = await db
      .select()
      .from(Bookings)
      .where(eq(Bookings.userId, user.userId))
      .orderBy(Bookings.createdAt);

    return new Response(
      JSON.stringify({ bookings }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error getting user bookings:', error);
    return new Response(
      JSON.stringify({ error: 'Error al obtener las reservas' }),
      { status: 500 }
    );
  }
};
