"use client"

import CollegeCard from "@/components/colleges/CollegeCard"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface College {
  id: string
  name: string
  location: string
  state: string
  type: string
  rating: number
  totalFees: number
  imageUrl: string | null
  _count: { courses: number }
}

interface Pagination {
  total: number
  page: number
  limit: number
  totalPages: number
}

export default function CollegesPage() {
  const router = useRouter()
  const [colleges, setColleges] = useState<College[]>([])
  const [pagination, setPagination] = useState<Pagination | null>(null)
  const [search, setSearch] = useState("")
  const [state, setState] = useState("")
  const [type, setType] = useState("")
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [compareIds, setCompareIds] = useState<string[]>([])

  useEffect(() => {
    fetchColleges()
  }, [search, state, type, page])

  async function fetchColleges() {
    setLoading(true)
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (state) params.set("state", state)
    if (type) params.set("type", type)
    params.set("page", page.toString())

    const res = await fetch(`/api/colleges?${params.toString()}`)
    const data = await res.json()

    if (data.success) {
      setColleges(data.data.colleges)
      setPagination(data.data.pagination)
    }
    setLoading(false)
  }

  function handleCompareToggle(id: string) {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id)
      if (prev.length >= 3) return prev
      return [...prev, id]
    })
  }

  function handleCompare() {
    const params = compareIds.map((id) => `id=${id}`).join("&")
    router.push(`/compare?${params}`)
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pb-32">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Explore Colleges</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Filter by state..."
          value={state}
          onChange={(e) => { setState(e.target.value); setPage(1) }}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={type}
          onChange={(e) => { setType(e.target.value); setPage(1) }}
          className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="Government">Government</option>
          <option value="Private">Private</option>
          <option value="Deemed">Deemed</option>
        </select>
      </div>

      {/* Results */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-5 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
              <div className="h-9 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      ) : colleges.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          <p className="text-lg">No colleges found.</p>
          <p className="text-sm mt-1">Try adjusting your filters.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-500 mb-4">
            Showing {colleges.length} of {pagination?.total} colleges
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onCompareToggle={handleCompareToggle}
                isCompareSelected={compareIds.includes(college.id)}
              />
            ))}
          </div>

          {pagination && pagination.totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50"
              >
                Previous
              </button>
              <span className="px-4 py-2 text-sm text-gray-600">
                Page {page} of {pagination.totalPages}
              </span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={page === pagination.totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-50 hover:bg-gray-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {/* Floating Compare Bar */}
      {compareIds.length >= 2 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg px-6 py-4 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">
                {compareIds.length} colleges selected
              </span>
              <span className="text-sm text-gray-500">
                {colleges
                  .filter((c) => compareIds.includes(c.id))
                  .map((c) => c.name)
                  .join(" vs ")}
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setCompareIds([])}
                className="border border-gray-300 text-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition"
              >
                Clear
              </button>
              <button
                onClick={handleCompare}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
              >
                Compare Now →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
