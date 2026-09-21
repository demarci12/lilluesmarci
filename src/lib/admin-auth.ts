import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "admin_session";

function sign(value: string) {
  return createHmac("sha256", process.env.ADMIN_SESSION_SECRET!)
    .update(value)
    .digest("hex");
}

export async function createAdminSession() {
  const cookieStore = await cookies();
  const issuedAt = Date.now().toString();
  const signature = sign(issuedAt);
  cookieStore.set(COOKIE_NAME, `${issuedAt}.${signature}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function destroyAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const raw = cookieStore.get(COOKIE_NAME)?.value;
  if (!raw) return false;

  const [issuedAt, signature] = raw.split(".");
  if (!issuedAt || !signature) return false;

  const expected = sign(issuedAt);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function verifyAdminPassword(password: string) {
  return password === process.env.ADMIN_PASSWORD;
}
