import type { APIRoute } from 'astro';
import { db, Bookings, BlockedDates, eq } from 'astro:db';

export const GET: APIRoute = async () => {
  try {
    // Obtener todas las reservas confirmadas
    const bookings = await db
      .select()
      .from(Bookings)
      .where(eq(Bookings.status, 'confirmada'));

    // Obtener fechas bloqueadas
    const blockedDates = await db.select().from(BlockedDates);

    // Crear array de fechas ocupadas
    const occupiedDates: string[] = [];

    // Agregar fechas de reservas
    bookings.forEach(booking => {
      const start = new Date(booking.startDate);
      const end = new Date(booking.endDate);

      // Agregar todas las fechas en el rango
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split('T')[0];
        if (!occupiedDates.includes(dateStr)) {
          occupiedDates.push(dateStr);
        }
      }
    });

    // Agregar fechas bloqueadas
    blockedDates.forEach(blocked => {
      const dateStr = new Date(blocked.date).toISOString().split('T')[0];
      if (!occupiedDates.includes(dateStr)) {
        occupiedDates.push(dateStr);
      }
    });

    return new Response(
      JSON.stringify({ occupiedDates }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error getting available dates:', error);
    return new Response(
      JSON.stringify({ error: 'Error al obtener fechas disponibles' }),
      { status: 500 }
    );
  }
};
