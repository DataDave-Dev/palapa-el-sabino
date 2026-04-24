import { g as getUserFromCookies } from './auth_DPx11g5j.mjs';

const GET = async ({ cookies }) => {
  const user = getUserFromCookies(cookies);
  if (!user) {
    return new Response(
      JSON.stringify({ user: null }),
      { status: 200 }
    );
  }
  return new Response(
    JSON.stringify({ user }),
    { status: 200 }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
