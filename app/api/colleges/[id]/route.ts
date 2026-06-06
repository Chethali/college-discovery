import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const college = await prisma.college.findUnique({
      where: { id },
      include: {
        courses: true,
        placements: true,
        _count: {
          select: { savedBy: true },
        },
      },
    })

    if (!college) {
      return NextResponse.json(
        { success: false, message: "College not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "College fetched successfully",
      data: college,
    })
  } catch (error) {
    console.error("College fetch error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
