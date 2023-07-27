"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("6e4ecdc0-08de-4ad2-b778-af04e4e52723")
  }, [])
  return null
}
