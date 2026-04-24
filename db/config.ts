import { defineDb, defineTable, column, NOW } from 'astro:db';

const Users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text({ unique: true }),
    password: column.text(),
    nombre: column.text(),
    telefono: column.text(),
    createdAt: column.date({ default: NOW })
  }
});

const Sessions = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // UUID for session ID
    userId: column.number({ references: () => Users.columns.id }),
    expiresAt: column.date(),
    createdAt: column.date({ default: NOW })
  }
});

const Bookings = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => Users.columns.id }),
    startDate: column.date(),
    endDate: column.date(),
    tipo: column.text(), // 'baja' o 'completa'
    status: column.text({ default: 'pendiente_confirmacion' }), // 'pendiente_confirmacion', 'confirmada', 'cancelada'
    guests: column.number(),
    totalPrice: column.number({ optional: true }),
    notes: column.text({ optional: true }),
    createdAt: column.date({ default: NOW })
  }
});

const Reviews = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    userId: column.number({ references: () => Users.columns.id }),
    bookingId: column.number({ references: () => Bookings.columns.id, optional: true }),
    rating: column.number(), // 1-5
    comment: column.text(),
    createdAt: column.date({ default: NOW })
  }
});

const BlockedDates = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    date: column.date(),
    reason: column.text({ optional: true })
  }
});

export default defineDb({
  tables: {
    Users,
    Sessions,
    Bookings,
    Reviews,
    BlockedDates
  }
});
