import type { APIRoute } from 'astro';
import { db, Users, eq } from 'astro:db';
import { hashPassword, createSessionCookie } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { email, password, nombre, telefono } = body;

    // Validaciones básicas
    if (!email || !password || !nombre || !telefono) {
      return new Response(
        JSON.stringify({ error: 'Todos los campos son requeridos' }),
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Email inválido' }),
        { status: 400 }
      );
    }

    // Validar longitud de password
    if (password.length < 6) {
      return new Response(
        JSON.stringify({ error: 'La contraseña debe tener al menos 6 caracteres' }),
        { status: 400 }
      );
    }

    // Verificar si el email ya existe
    const existingUser = await db.select().from(Users).where(eq(Users.email, email));
    if (existingUser.length > 0) {
      return new Response(
        JSON.stringify({ error: 'El email ya está registrado' }),
        { status: 400 }
      );
    }

    // Hashear password
    const hashedPassword = await hashPassword(password);

    // Crear usuario
    const result = await db.insert(Users).values({
      email,
      password: hashedPassword,
      nombre,
      telefono
    }).returning();

    const user = result[0];

    // Crear sesión
    createSessionCookie(cookies, {
      userId: user.id,
      email: user.email,
      nombre: user.nombre
    });

    return new Response(
      JSON.stringify({
        success: true,
        user: {
          id: user.id,
          email: user.email,
          nombre: user.nombre
        }
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Error en registro:', error);
    return new Response(
      JSON.stringify({ error: 'Error al registrar usuario' }),
      { status: 500 }
    );
  }
};
