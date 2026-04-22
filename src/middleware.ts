import { defineMiddleware } from 'astro:middleware';
import { getUserFromCookies } from './lib/auth';

// Rutas que requieren autenticación
const protectedRoutes = ['/reservar', '/perfil'];

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  const pathname = url.pathname;

  // Verificar si la ruta requiere autenticación
  const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

  if (isProtected) {
    const user = getUserFromCookies(cookies);

    if (!user) {
      // Redirigir al login si no está autenticado
      return redirect('/login?redirect=' + encodeURIComponent(pathname));
    }

    // Agregar usuario al locals para acceso en páginas
    context.locals.user = user;
  }

  return next();
});
