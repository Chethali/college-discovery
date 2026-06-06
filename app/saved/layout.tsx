// app/saved/layout.tsx
import { requireAuth } from "@/lib/auth"

export default async function SavedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  await requireAuth() // Redirects to /login if not authenticated
  return <>{children}</>
}

