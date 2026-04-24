import { d as db, U as Users } from './_astro_db_N9dzpGpA.mjs';
import { v as verifyPassword, c as createSessionCookie } from './auth_DPx11g5j.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const POST = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email y contraseña son requeridos" }),
        { status: 400 }
      );
    }
    const users = await db.select().from(Users).where(eq(Users.email, email));
    if (users.length === 0) {
      return new Response(
        JSON.stringify({ error: "Credenciales inválidas" }),
        { status: 401 }
      );
    }
    const user = users[0];
    const isValid = await verifyPassword(password, user.password);
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: "Credenciales inválidas" }),
        { status: 401 }
      );
    }
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
    console.error("Error en login:", error);
    return new Response(
      JSON.stringify({ error: "Error al iniciar sesión" }),
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
