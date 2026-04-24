import { a as clearSessionCookie } from './auth_DPx11g5j.mjs';

const POST = async ({ cookies }) => {
  clearSessionCookie(cookies);
  return new Response(
    JSON.stringify({ success: true }),
    { status: 200 }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
