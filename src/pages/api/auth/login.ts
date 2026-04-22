import type { APIRoute } from 'astro';
import { db, Users, eq } from 'astro:db';
import { verifyPassword, createSessionCookie } from '../../../lib/auth';

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { email, password } = body;

    // Validaciones básicas
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: 'Email y contraseña son requeridos' }),
        { status: 400 }
      );
    }

    // Buscar usuario
    const users = await db.select().from(Users).where(eq(Users.email, email));

    if (users.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Credenciales inválidas' }),
        { status: 401 }
      );
    }

    const user = users[0];

    // Verificar password
    const isValid = await verifyPassword(password, user.password);

    if (!isValid) {
      return new Response(
        JSON.stringify({ error: 'Credenciales inválidas' }),
        { status: 401 }
      );
    }

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
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en login:', error);
    return new Response(
      JSON.stringify({ error: 'Error al iniciar sesión' }),
      { status: 500 }
    );
  }
};
