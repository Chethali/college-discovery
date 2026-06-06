import type { JWTPayload } from "@/types"
import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Convert secret string to bytes (jose requires this format)
const getSecret = () => new TextEncoder().encode(process.env.JWT_SECRET!)

// Creates a JWT token containing user info
export async function signToken(payload: JWTPayload): Promise<string> {
  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(getSecret())
}

// Verifies a JWT token and returns the payload
export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload as unknown as JWTPayload
  } catch {
    // Token is invalid or expired
    return null
  }
}

// Sets the JWT as an httpOnly cookie
export async function setAuthCookie(token: string): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set("auth-token", token, {
    httpOnly: true,      // Cannot be read by JavaScript
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
    sameSite: "lax",     // Protects against CSRF
    maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    path: "/",
  })
}

// Removes the auth cookie (logout)
export async function removeAuthCookie(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete("auth-token")
}

// Gets and verifies the current user from cookie
export async function getCurrentUser(): Promise<JWTPayload | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value
  if (!token) return null
  return verifyToken(token)
}

// Call this at the top of any server layout that requires auth
export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    redirect("/login")
  }
  return user
}
