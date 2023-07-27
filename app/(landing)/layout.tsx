import React from "react"

const LeadingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen w-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  )
}

export default LeadingLayout
