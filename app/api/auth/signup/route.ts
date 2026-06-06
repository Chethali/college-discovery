import { setAuthCookie, signToken } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { validateSignup } from "@/lib/validations"
import type { UserResponse } from "@/types"
import { hash } from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    // Step 1: Parse the request body
    const body = await request.json()

    // Step 2: Validate input
    const errors = validateSignup(body)
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: errors[0].message },
        { status: 400 }
      )
    }

    const { name, email, password } = body

    // Step 3: Check if email already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    })

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 } // 409 = Conflict
      )
    }

    // Step 4: Hash the password
    const hashedPassword = await hash(password, 10)

    // Step 5: Create the user
    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase(),
        password: hashedPassword,
      },
    })

    // Step 6: Create JWT and set cookie
    const token = await signToken({
      userId: user.id,
      email: user.email,
      name: user.name,
    })
    await setAuthCookie(token)

    // Step 7: Return user data (never return password)
    const userResponse: UserResponse = {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    }

    return NextResponse.json(
      { success: true, message: "Account created successfully", data: userResponse },
      { status: 201 } // 201 = Created
    )

  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
