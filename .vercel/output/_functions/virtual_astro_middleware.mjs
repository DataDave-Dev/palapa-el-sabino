import { a8 as defineMiddleware, ah as sequence } from './chunks/sequence_DNlBr1nX.mjs';
import 'piccolore';
import 'clsx';
import { g as getUserFromCookies } from './chunks/auth_DPx11g5j.mjs';

const protectedRoutes = ["/reservar", "/perfil"];
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;
  const pathname = url.pathname;
  const isProtected = protectedRoutes.some((route) => pathname.startsWith(route));
  if (isProtected) {
    const user = getUserFromCookies(cookies);
    if (!user) {
      return redirect("/login?redirect=" + encodeURIComponent(pathname));
    }
    context.locals.user = user;
  }
  return next();
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
