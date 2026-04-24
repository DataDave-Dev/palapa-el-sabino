import { d as db, U as Users } from './_astro_db_N9dzpGpA.mjs';
import { h as hashPassword, c as createSessionCookie } from './auth_DPx11g5j.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

const POST = async ({ request, cookies }) => {
  try {
    const body = await request.json();
    const { email, password, nombre, telefono } = body;
    if (!email || !password || !nombre || !telefono) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son requeridos" }),
        { status: 400 }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Email inválido" }),
        { status: 400 }
      );
    }
    if (password.length < 6) {
      return new Response(
        JSON.stringify({ error: "La contraseña debe tener al menos 6 caracteres" }),
        { status: 400 }
      );
    }
    const existingUser = await db.select().from(Users).where(eq(Users.email, email));
    if (existingUser.length > 0) {
      return new Response(
        JSON.stringify({ error: "El email ya está registrado" }),
        { status: 400 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const result = await db.insert(Users).values({
      email,
      password: hashedPassword,
      nombre,
      telefono
    }).returning();
    const user = result[0];
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
    console.error("Error en registro:", error);
    return new Response(
      JSON.stringify({ error: "Error al registrar usuario" }),
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
