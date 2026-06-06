import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// GET all saved colleges for current user
export async function GET() {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      )
    }

    const savedColleges = await prisma.savedCollege.findMany({
      where: { userId: user.userId },
      include: {
        college: {
          select: {
            id: true,
            name: true,
            location: true,
            state: true,
            type: true,
            rating: true,
            totalFees: true,
            imageUrl: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json({
      success: true,
      message: "Saved colleges fetched",
      data: savedColleges,
    })
  } catch (error) {
    console.error("Saved fetch error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}

// POST save a college
export async function POST(request: NextRequest) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      )
    }

    const { collegeId } = await request.json()
    if (!collegeId) {
      return NextResponse.json(
        { success: false, message: "collegeId is required" },
        { status: 400 }
      )
    }

    const saved = await prisma.savedCollege.create({
      data: { userId: user.userId, collegeId },
    })

    return NextResponse.json(
      { success: true, message: "College saved", data: saved },
      { status: 201 }
    )
  } catch (error: any) {
    // P2002 = unique constraint violation (already saved)
    if (error?.code === "P2002") {
      return NextResponse.json(
        { success: false, message: "College already saved" },
        { status: 409 }
      )
    }
    console.error("Save error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
