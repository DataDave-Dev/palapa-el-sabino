import { db, Users, Bookings, BlockedDates } from 'astro:db';

export default async function seed() {
  // Este archivo se puede usar para hacer seed de datos iniciales
  // Por ahora lo dejamos vacío, pero puedes agregar usuarios de prueba aquí

  // Ejemplo:
  // await db.insert(Users).values([
  //   {
  //     id: 1,
  //     email: 'test@example.com',
  //     password: 'hashed_password',
  //     nombre: 'Usuario de Prueba',
  //     telefono: '1234567890'
  //   }
  // ]);
}
