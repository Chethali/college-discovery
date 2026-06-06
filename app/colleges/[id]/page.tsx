"use client"

import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Course {
  id: string
  name: string
  duration: string
  fees: number
}

interface College {
  id: string
  name: string
  description: string | null
  location: string
  state: string
  type: string
  rating: number
  totalFees: number
  establishedYear: number
  website: string | null
  imageUrl: string | null
  courses: Course[]
  _count: { savedBy: number }
}

export default function CollegeDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [college, setCollege] = useState<College | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    fetch("/api/auth/me")
      .then((r) => r.json())
      .then((data) => { if (data.success) setUser(data.data) })

    fetch(`/api/colleges/${id}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.success) setCollege(data.data)
        else router.push("/colleges")
      })
      .finally(() => setLoading(false))
  }, [id])

  async function handleSave() {
    if (!user) { router.push("/login"); return }
    setSaving(true)
    const res = await fetch("/api/saved", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ collegeId: id }),
    })
    const data = await res.json()
    if (data.success) setSaved(true)
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-8" />
        <div className="h-40 bg-gray-200 rounded mb-4" />
      </div>
    )
  }

  if (!college) return null

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <Link href="/colleges" className="text-blue-600 text-sm hover:underline mb-4 block">
        ← Back to Colleges
      </Link>

      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{college.name}</h1>
            <p className="text-gray-500 mt-1">{college.location}</p>
          </div>
          <span className="bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
            {college.type}
          </span>
        </div>

        {college.description && (
          <p className="text-gray-600 mb-4">{college.description}</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">⭐ {college.rating.toFixed(1)}</p>
            <p className="text-xs text-gray-500 mt-1">Rating</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">
              ₹{(college.totalFees / 100000).toFixed(1)}L
            </p>
            <p className="text-xs text-gray-500 mt-1">Annual Fees</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">{college.establishedYear}</p>
            <p className="text-xs text-gray-500 mt-1">Established</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">{college._count.savedBy}</p>
            <p className="text-xs text-gray-500 mt-1">Saved by</p>
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleSave}
            disabled={saving || saved}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition disabled:opacity-50"
          >
            {saved ? "✓ Saved" : saving ? "Saving..." : "Save College"}
          </button>
          <WebsiteLink url={college.website} />
          <Link
            href={`/compare?id=${college.id}`}
            className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Compare
          </Link>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Courses Offered ({college.courses.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {college.courses.map((course) => (
            <div key={course.id} className="border border-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-gray-900">{course.name}</h3>
              <div className="flex gap-4 mt-2 text-sm text-gray-500">
                <span>⏱ {course.duration}</span>
                <span>₹{(course.fees / 100000).toFixed(1)}L/yr</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WebsiteLink({ url }: { url: string | null }) {
  if (!url) return null
  const Tag = "a" as keyof JSX.IntrinsicElements
  return (
    <Tag
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
    >
      Visit Website
    </Tag>
  )
}
