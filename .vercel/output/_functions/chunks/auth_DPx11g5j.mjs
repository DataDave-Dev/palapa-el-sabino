import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;
async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUNDS);
}
async function verifyPassword(password, hash) {
  return await bcrypt.compare(password, hash);
}
function createToken(payload) {
  const data = JSON.stringify({
    ...payload,
    exp: Date.now() + 7 * 24 * 60 * 60 * 1e3
    // 7 días
  });
  return Buffer.from(data).toString("base64");
}
function verifyToken(token) {
  try {
    const data = JSON.parse(Buffer.from(token, "base64").toString());
    if (data.exp < Date.now()) {
      return null;
    }
    return {
      userId: data.userId,
      email: data.email,
      nombre: data.nombre
    };
  } catch {
    return null;
  }
}
function getUserFromCookies(cookies) {
  const token = cookies.get("session")?.value;
  if (!token) return null;
  return verifyToken(token);
}
function createSessionCookie(cookies, user) {
  const token = createToken(user);
  cookies.set("session", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60,
    // 7 días
    path: "/"
  });
}
function clearSessionCookie(cookies) {
  cookies.delete("session", {
    path: "/"
  });
}

export { clearSessionCookie as a, createSessionCookie as c, getUserFromCookies as g, hashPassword as h, verifyPassword as v };
