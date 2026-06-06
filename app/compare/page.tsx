"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

interface Course {
  id: string
  name: string
  duration: string
  fees: number
}

interface Placement {
  averagePackage: number
  highestPackage: number
  placementPercentage: number
  topRecruiters: string
  year: number
}

interface College {
  id: string
  name: string
  location: string
  type: string
  rating: number
  totalFees: number
  establishedYear: number
  courses: Course[]
  placements: Placement[]
}

function CompareContent() {
  const searchParams = useSearchParams()
  const [colleges, setColleges] = useState<College[]>([])
  const [loading, setLoading] = useState(false)

  const ids = searchParams.getAll("id")

  useEffect(() => {
    if (ids.length >= 2) fetchCompare()
  }, [searchParams.toString()])

  async function fetchCompare() {
    setLoading(true)
    const params = ids.map((id) => `id=${id}`).join("&")
    const res = await fetch(`/api/compare?${params}`)
    const data = await res.json()
    if (data.success) setColleges(data.data)
    setLoading(false)
  }

  if (ids.length < 2) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-lg font-medium text-gray-900 mb-2">No colleges selected</p>
        <p className="text-sm mb-4">Go to a college page and click Compare to add colleges.</p>
        <Link href="/colleges" className="text-blue-600 hover:underline text-sm">
          Browse colleges →
        </Link>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {ids.map((id) => (
          <div key={id} className="bg-white rounded-xl border p-5 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        ))}
      </div>
    )
  }

  const rows = [
    { label: "Location", key: "location" },
    { label: "Type", key: "type" },
    { label: "Rating", key: "rating" },
    { label: "Annual Fees", key: "totalFees" },
    { label: "Established", key: "establishedYear" },
    { label: "Avg Package", key: "avgPackage" },
    { label: "Highest Package", key: "highestPackage" },
    { label: "Placement %", key: "placement" },
    { label: "Top Recruiters", key: "recruiters" },
    { label: "Courses", key: "courses" },
  ]

  function getValue(college: College, key: string) {
    const placement = college.placements?.[0]
    switch (key) {
      case "rating": return `⭐ ${college.rating.toFixed(1)}`
      case "totalFees": return `₹${(college.totalFees / 100000).toFixed(1)}L/yr`
      case "courses": return `${college.courses.length} courses`
      case "avgPackage": return placement ? `₹${(placement.averagePackage / 100000).toFixed(1)}L` : "N/A"
      case "highestPackage": return placement ? `₹${(placement.highestPackage / 100000).toFixed(1)}L` : "N/A"
      case "placement": return placement ? `${placement.placementPercentage}%` : "N/A"
      case "recruiters": return placement ? placement.topRecruiters : "N/A"
      default: return (college as any)[key]
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 bg-gray-50 border border-gray-200 w-32 text-sm text-gray-500 font-medium">
              Feature
            </th>
            {colleges.map((college) => (
              <th key={college.id} className="p-4 bg-gray-50 border border-gray-200 text-center">
                <Link
                  href={`/colleges/${college.id}`}
                  className="font-semibold text-gray-900 hover:text-blue-600 transition"
                >
                  {college.name}
                </Link>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} className="hover:bg-gray-50">
              <td className="p-4 border border-gray-200 text-sm font-medium text-gray-600">
                {row.label}
              </td>
              {colleges.map((college) => (
                <td key={college.id} className="p-4 border border-gray-200 text-center text-sm text-gray-700">
                  {getValue(college, row.key)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ComparePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Compare Colleges</h1>
      <Suspense fallback={<div className="text-gray-500">Loading...</div>}>
        <CompareContent />
      </Suspense>
    </div>
  )
}
