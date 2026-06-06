"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface SavedCollege {
  id: string
  collegeId: string
  college: {
    id: string
    name: string
    location: string
    type: string
    rating: number
    totalFees: number
  }
}

export default function SavedPage() {
  const router = useRouter()
  const [saved, setSaved] = useState<SavedCollege[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/auth/me").then((r) => r.json()).then((data) => {
      if (!data.success) { router.push("/login"); return }
      fetchSaved()
    })
  }, [])

  async function fetchSaved() {
    const res = await fetch("/api/saved")
    const data = await res.json()
    if (data.success) setSaved(data.data)
    setLoading(false)
  }

  async function handleRemove(collegeId: string) {
    await fetch(`/api/saved/${collegeId}`, { method: "DELETE" })
    setSaved(saved.filter((s) => s.collegeId !== collegeId))
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse" />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="bg-white rounded-xl border p-5 mb-4 animate-pulse">
            <div className="h-5 bg-gray-200 rounded w-1/2 mb-3" />
            <div className="h-4 bg-gray-200 rounded w-1/3" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Saved Colleges</h1>

      {saved.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">No saved colleges yet.</p>
          <Link href="/colleges" className="text-blue-600 hover:underline text-sm mt-2 block">
            Browse colleges →
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {saved.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 p-5 flex items-center justify-between"
            >
              <div>
                <h3 className="font-semibold text-gray-900">{item.college.name}</h3>
                <p className="text-sm text-gray-500">{item.college.location}</p>
                <div className="flex gap-4 mt-2 text-sm text-gray-600">
                  <span>⭐ {item.college.rating.toFixed(1)}</span>
                  <span>₹{(item.college.totalFees / 100000).toFixed(1)}L/yr</span>
                  <span className="bg-blue-50 text-blue-700 px-2 rounded-full text-xs">
                    {item.college.type}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  href={`/colleges/${item.college.id}`}
                  className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
                >
                  View
                </Link>
                <button
                  onClick={() => handleRemove(item.collegeId)}
                  className="border border-red-200 text-red-600 px-4 py-2 rounded-lg text-sm hover:bg-red-50 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
