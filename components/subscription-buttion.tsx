"use client"

import axios from "axios"

interface SubscriptionButtonProps {
  isPro: boolean
}

import React, { useState } from "react"
import { Button } from "./ui/button"
import { Zap } from "lucide-react"
import toast from "react-hot-toast"

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false)
  const onClick = async () => {
    try {
      setLoading(true)
      const response = await axios.get("/api/stripe")
      window.location.href = response.data.url
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }
  return (
    <Button
      disabled={loading}
      variant={isPro ? "default" : "premium"}
      onClick={onClick}
    >
      {isPro ? "Mange Subscription" : "Upgrade"}
      {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
    </Button>
  )
}
