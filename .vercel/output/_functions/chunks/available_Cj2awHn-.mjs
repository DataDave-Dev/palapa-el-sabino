import { d as db, B as Bookings, a as BlockedDates } from './_astro_db_N9dzpGpA.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const GET = async () => {
  try {
    const bookings = await db.select().from(Bookings).where(eq(Bookings.status, "confirmada"));
    const blockedDates = await db.select().from(BlockedDates);
    const occupiedDates = [];
    bookings.forEach((booking) => {
      const start = new Date(booking.startDate);
      const end = new Date(booking.endDate);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dateStr = d.toISOString().split("T")[0];
        if (!occupiedDates.includes(dateStr)) {
          occupiedDates.push(dateStr);
        }
      }
    });
    blockedDates.forEach((blocked) => {
      const dateStr = new Date(blocked.date).toISOString().split("T")[0];
      if (!occupiedDates.includes(dateStr)) {
        occupiedDates.push(dateStr);
      }
    });
    return new Response(
      JSON.stringify({ occupiedDates }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error getting available dates:", error);
    return new Response(
      JSON.stringify({ error: "Error al obtener fechas disponibles" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
