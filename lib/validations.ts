export interface ValidationError {
  field: string
  message: string
}

export function validateSignup(data: unknown): ValidationError[] {
  const errors: ValidationError[] = []
  const body = data as Record<string, unknown>

  if (!body.name || typeof body.name !== "string" || body.name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" })
  }

  if (!body.email || typeof body.email !== "string") {
    errors.push({ field: "email", message: "Email is required" })
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push({ field: "email", message: "Invalid email format" })
  }

  if (!body.password || typeof body.password !== "string") {
    errors.push({ field: "password", message: "Password is required" })
  } else if (body.password.length < 8) {
    errors.push({ field: "password", message: "Password must be at least 8 characters" })
  }

  return errors
}

export function validateLogin(data: unknown): ValidationError[] {
  const errors: ValidationError[] = []
  const body = data as Record<string, unknown>

  if (!body.email || typeof body.email !== "string") {
    errors.push({ field: "email", message: "Email is required" })
  }

  if (!body.password || typeof body.password !== "string") {
    errors.push({ field: "password", message: "Password is required" })
  }

  return errors
}
