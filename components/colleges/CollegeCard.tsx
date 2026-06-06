import Link from "next/link"

interface College {
  id: string
  name: string
  location: string
  state: string
  type: string
  rating: number
  totalFees: number
  imageUrl: string | null
  _count?: { courses: number }
}

interface CollegeCardProps {
  college: College
  onCompareToggle?: (id: string) => void
  isCompareSelected?: boolean
}

export default function CollegeCard({
  college,
  onCompareToggle,
  isCompareSelected,
}: CollegeCardProps) {
  return (
    <div className={`bg-white rounded-xl border p-5 hover:shadow-md transition ${
      isCompareSelected ? "border-blue-500 ring-2 ring-blue-200" : "border-gray-200"
    }`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg">{college.name}</h3>
          <p className="text-gray-500 text-sm">{college.location}</p>
        </div>
        <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded-full ml-2">
          {college.type}
        </span>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <span>⭐ {college.rating.toFixed(1)}</span>
        <span>₹{(college.totalFees / 100000).toFixed(1)}L/yr</span>
        {college._count && <span>{college._count.courses} courses</span>}
      </div>

      <div className="flex gap-2">
        <Link
          href={`/colleges/${college.id}`}
          className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
        >
          View Details
        </Link>
        {onCompareToggle && (
          <button
            onClick={() => onCompareToggle(college.id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium border transition ${
              isCompareSelected
                ? "bg-blue-600 text-white border-blue-600"
                : "border-gray-300 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {isCompareSelected ? "✓" : "+"}
          </button>
        )}
      </div>
    </div>
  )
}
