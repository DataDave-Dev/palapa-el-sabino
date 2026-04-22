import bcrypt from 'bcrypt';
import type { AstroCookies } from 'astro';

const JWT_SECRET = import.meta.env.JWT_SECRET;
const SALT_ROUNDS = 10;

export interface UserSession {
  userId: number;
  email: string;
  nombre: string;
}

// Hash password con bcrypt
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

// Verificar password
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}

// Crear JWT token simple (usando base64)
// Nota: Para producción, considera usar una librería como jose
export function createToken(payload: UserSession): string {
  const data = JSON.stringify({
    ...payload,
    exp: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 días
  });
  return Buffer.from(data).toString('base64');
}

// Verificar y decodificar token
export function verifyToken(token: string): UserSession | null {
  try {
    const data = JSON.parse(Buffer.from(token, 'base64').toString());

    // Verificar expiración
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

// Obtener usuario de la sesión
export function getUserFromCookies(cookies: AstroCookies): UserSession | null {
  const token = cookies.get('session')?.value;
  if (!token) return null;

  return verifyToken(token);
}

// Crear cookie de sesión
export function createSessionCookie(cookies: AstroCookies, user: UserSession) {
  const token = createToken(user);
  cookies.set('session', token, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60, // 7 días
    path: '/'
  });
}

// Eliminar cookie de sesión
export function clearSessionCookie(cookies: AstroCookies) {
  cookies.delete('session', {
    path: '/'
  });
}
