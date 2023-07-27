import { LandingContent } from "@/components/LandingContent"
import LandingHero from "@/components/LandingHero"
import { LandingNavbar } from "@/components/LandingNavbar"
import React from "react"

const LnadingPage = () => {
  return (
    <div className="h-full w-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default LnadingPage
