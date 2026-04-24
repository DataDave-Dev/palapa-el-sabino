import type { APIRoute } from 'astro';
import { db, Bookings, eq } from 'astro:db';
import { getUserFromCookies } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // Verificar autenticación
    const user = getUserFromCookies(cookies);
    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Debes iniciar sesión para reservar' }),
        { status: 401 }
      );
    }

    const body = await request.json();
    const { startDate, endDate, tipo, guests, notes } = body;

    // Validaciones
    if (!startDate || !endDate || !tipo || !guests) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son requeridos' }),
        { status: 400 }
      );
    }

    // Validar tipo
    if (tipo !== 'baja' && tipo !== 'completa') {
      return new Response(
        JSON.stringify({ error: 'Tipo de cabaña inválido' }),
        { status: 400 }
      );
    }

    // Validar número de huéspedes según tipo
    const maxGuests = tipo === 'baja' ? 8 : 20;
    if (guests < 1 || guests > maxGuests) {
      return new Response(
        JSON.stringify({ error: `Número de huéspedes inválido (1-${maxGuests})` }),
        { status: 400 }
      );
    }

    // Validar que start date sea antes que end date
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start >= end) {
      return new Response(
        JSON.stringify({ error: 'La fecha de salida debe ser posterior a la fecha de entrada' }),
        { status: 400 }
      );
    }

    // Validar que no sean fechas pasadas
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (start < today) {
      return new Response(
        JSON.stringify({ error: 'No puedes reservar fechas pasadas' }),
        { status: 400 }
      );
    }

    // Validar que sea viernes a domingo (3 días)
    const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    if (daysDiff !== 2) {
      return new Response(
        JSON.stringify({ error: 'Solo se permiten reservas de fin de semana (Viernes a Domingo)' }),
        { status: 400 }
      );
    }

    // Validar que empiece en viernes (día 5)
    if (start.getDay() !== 5) {
      return new Response(
        JSON.stringify({ error: 'Las reservas deben iniciar en viernes' }),
        { status: 400 }
      );
    }

    // Verificar disponibilidad
    const existingBookings = await db
      .select()
      .from(Bookings)
      .where(eq(Bookings.status, 'confirmada'));

    // Verificar si hay conflicto con reservas existentes
    for (const booking of existingBookings) {
      const bookingStart = new Date(booking.startDate);
      const bookingEnd = new Date(booking.endDate);

      // Verificar si hay overlap
      if (start <= bookingEnd && end >= bookingStart) {
        return new Response(
          JSON.stringify({ error: 'Las fechas seleccionadas no están disponibles' }),
          { status: 400 }
        );
      }
    }

    // Calcular precio total basado en el tipo (fin de semana completo)
    const precios = {
      baja: 5499,
      completa: 8500
    };
    const totalPrice = precios[tipo as keyof typeof precios];

    // Crear reserva
    const result = await db.insert(Bookings).values({
      userId: user.userId,
      startDate: start,
      endDate: end,
      tipo,
      guests,
      totalPrice,
      notes: notes || null,
      status: 'pendiente_confirmacion'
    }).returning();

    const booking = result[0];

    return new Response(
      JSON.stringify({
        success: true,
        booking: {
          id: booking.id,
          startDate: booking.startDate,
          endDate: booking.endDate,
          tipo: booking.tipo,
          guests: booking.guests,
          status: booking.status
        }
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating booking:', error);
    return new Response(
      JSON.stringify({ error: 'Error al crear la reserva' }),
      { status: 500 }
    );
  }
};
