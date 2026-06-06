import { getCurrentUser } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

// DELETE unsave a college
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ collegeId: string }> }
) {
  try {
    const user = await getCurrentUser()
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Not authenticated" },
        { status: 401 }
      )
    }

    const { collegeId } = await params

    await prisma.savedCollege.deleteMany({
      where: {
        userId: user.userId,
        collegeId,
      },
    })

    return NextResponse.json({
      success: true,
      message: "College removed from saved",
    })
  } catch (error) {
    console.error("Unsave error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
