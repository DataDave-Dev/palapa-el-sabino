import { db, Users, Reviews, BlockedDates } from 'astro:db';

export default async function seed() {
  // Crear algunos usuarios de ejemplo
  await db.insert(Users).values([
    {
      email: 'demo@example.com',
      password: '$2a$10$K7L1OJ0TfI0u0sLx6M3Vg.0FMGV1kqGhZ3eE6oG3h6cJvGm1NqGZS', // password: demo123
      nombre: 'Usuario Demo',
      telefono: '8112345678'
    }
  ]);

  // Crear algunas reseñas de ejemplo
  await db.insert(Reviews).values([
    {
      userId: 1,
      rating: 5,
      comment: 'Excelente cabaña, las vistas son espectaculares y el cielo nocturno es impresionante. La familia quedó encantada con la experiencia.'
    },
    {
      userId: 1,
      rating: 5,
      comment: 'Un lugar mágico para desconectar. El camino de acceso está en perfectas condiciones y las instalaciones superaron nuestras expectativas.'
    },
    {
      userId: 1,
      rating: 4,
      comment: 'Hermosa cabaña con todo lo necesario. El único detalle es que la señal de celular es limitada, pero es parte del encanto de estar en la montaña.'
    }
  ]);

  // Bloquear algunas fechas para mantenimiento
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  await db.insert(BlockedDates).values([
    {
      date: nextMonth,
      reason: 'Mantenimiento programado'
    }
  ]);

  console.log('✅ Seed data inserted successfully!');
}
