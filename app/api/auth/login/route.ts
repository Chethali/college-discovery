import { setAuthCookie, signToken } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { validateLogin } from "@/lib/validations"
import type { UserResponse } from "@/types"
import { compare } from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const errors = validateLogin(body)
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: errors[0].message },
        { status: 400 }
      )
    }

    const { email, password } = body

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    })

    // IMPORTANT: Same error message for wrong email or wrong password
    // Never tell attackers which one is wrong
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Verify password
    const isValidPassword = await compare(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 401 }
      )
    }

    // Create JWT and set cookie
    const token = await signToken({
      userId: user.id,
      email: user.email,
      name: user.name,
    })
    await setAuthCookie(token)

    const userResponse: UserResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    }

    return NextResponse.json({
      success: true,
      message: "Logged in successfully",
      data: userResponse,
    })

  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
