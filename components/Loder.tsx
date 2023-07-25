import Image from "next/image"
import React from "react"

const Loder = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image src="/logo.png" alt="logo" fill />
      </div>
      <p className="text-sm text-muted-foreground">Genius is thinking...</p>
    </div>
  )
}

export default Loder
