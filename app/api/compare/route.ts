import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// GET compare colleges by IDs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const ids = searchParams.getAll("id")

    if (ids.length < 2 || ids.length > 3) {
      return NextResponse.json(
        { success: false, message: "Provide 2 or 3 college IDs" },
        { status: 400 }
      )
    }

    const colleges = await prisma.college.findMany({
      where: { id: { in: ids } },
      include: { 
        courses: true,
        placements: true,
       },
    })

    return NextResponse.json({
      success: true,
      message: "Comparison data fetched",
      data: colleges,
    })
  } catch (error) {
    console.error("Compare error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

// POST save a compare session
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      )
    }

    const { collegeIds } = await request.json()

    if (!Array.isArray(collegeIds) || collegeIds.length < 2 || collegeIds.length > 3) {
      return NextResponse.json(
        { success: false, message: "Provide 2 or 3 college IDs" },
        { status: 400 }
      )
    }

    const session = await prisma.compareSession.create({
      data: {
        userId: user.userId,
        colleges: {
          create: collegeIds.map((collegeId: string) => ({ collegeId })),
        },
      },
      include: { colleges: true },
    })

    return NextResponse.json(
      { success: true, message: "Compare session saved", data: session },
      { status: 201 }
    )
  } catch (error) {
    console.error("Compare session error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
