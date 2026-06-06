import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const search = searchParams.get("search") || ""
    const state = searchParams.get("state") || ""
    const type = searchParams.get("type") || ""
    const minRating = parseFloat(searchParams.get("minRating") || "0")
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const skip = (page - 1) * limit

    const where: any = {}

    if (search) {
      where.name = { contains: search, mode: "insensitive" }
    }
    if (state) {
      where.state = { contains: state, mode: "insensitive" }
    }
    if (type) {
      where.type = type
    }
    if (minRating > 0) {
      where.rating = { gte: minRating }
    }

    const [colleges, total] = await Promise.all([
      prisma.college.findMany({
        where,
        skip,
        take: limit,
        orderBy: { rating: "desc" },
        select: {
          id: true,
          name: true,
          location: true,
          state: true,
          type: true,
          rating: true,
          totalFees: true,
          establishedYear: true,
          imageUrl: true,
          _count: { select: { courses: true } },
        },
      }),
      prisma.college.count({ where }),
    ])

    return NextResponse.json({
      success: true,
      message: "Colleges fetched successfully",
      data: {
        colleges,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      },
    })
  } catch (error) {
    console.error("Colleges fetch error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
