import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Find Your Perfect College
        </h1>
        <p className="text-xl text-gray-500 mb-8">
          Discover, compare, and save colleges across India.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/colleges"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Explore Colleges
          </Link>
          <Link
            href="/signup"
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Sign Up Free
          </Link>
        </div>
      </div>
    </main>
  )
}
