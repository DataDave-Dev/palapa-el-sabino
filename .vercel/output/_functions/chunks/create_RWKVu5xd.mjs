import { d as db, B as Bookings } from './_astro_db_N9dzpGpA.mjs';
import { g as getUserFromCookies } from './auth_DPx11g5j.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const POST = async ({ request, cookies }) => {
  try {
    const user = getUserFromCookies(cookies);
    if (!user) {
      return new Response(
        JSON.stringify({ error: "Debes iniciar sesión para reservar" }),
        { status: 401 }
      );
    }
    const body = await request.json();
    const { startDate, endDate, tipo, guests, notes } = body;
    if (!startDate || !endDate || !tipo || !guests) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son requeridos" }),
        { status: 400 }
      );
    }
    if (tipo !== "baja" && tipo !== "completa") {
      return new Response(
        JSON.stringify({ error: "Tipo de cabaña inválido" }),
        { status: 400 }
      );
    }
    if (guests < 1 || guests > 20) {
      return new Response(
        JSON.stringify({ error: "Número de huéspedes inválido (1-20)" }),
        { status: 400 }
      );
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start >= end) {
      return new Response(
        JSON.stringify({ error: "La fecha de salida debe ser posterior a la fecha de entrada" }),
        { status: 400 }
      );
    }
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    if (start < today) {
      return new Response(
        JSON.stringify({ error: "No puedes reservar fechas pasadas" }),
        { status: 400 }
      );
    }
    const existingBookings = await db.select().from(Bookings).where(eq(Bookings.status, "confirmada"));
    for (const booking2 of existingBookings) {
      const bookingStart = new Date(booking2.startDate);
      const bookingEnd = new Date(booking2.endDate);
      if (start <= bookingEnd && end >= bookingStart) {
        return new Response(
          JSON.stringify({ error: "Las fechas seleccionadas no están disponibles" }),
          { status: 400 }
        );
      }
    }
    const result = await db.insert(Bookings).values({
      userId: user.userId,
      startDate: start,
      endDate: end,
      tipo,
      guests,
      notes: notes || null,
      status: "pendiente_confirmacion"
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
    console.error("Error creating booking:", error);
    return new Response(
      JSON.stringify({ error: "Error al crear la reserva" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
