// The data we store inside a JWT
export interface JWTPayload {
  userId: string
  email: string
  name: string
}

// What the signup API expects in the request body
export interface SignupInput {
  name: string
  email: string
  password: string
}

// What the login API expects in the request body
export interface LoginInput {
  email: string
  password: string
}

// What we return about a user (never include password)
export interface UserResponse {
  id: string
  name: string
  email: string
  createdAt: Date
}

// Standard API response shape
export interface ApiResponse<T = void> {
  success: boolean
  message: string
  data?: T
}
