"use client"
import React, { useEffect, useState } from "react"
import { Card, CardContent } from "./ui/card"
import { MAX_FREE_COUNTS } from "@/constants"
import { Progress } from "./ui/progress"
import { Button } from "./ui/button"
import { Zap } from "lucide-react"
import { useProModel } from "@/hooks/use-pre-model"

interface FreecounterProps {
  apiLimitCount: number
  isPro: boolean
}

const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
}: FreecounterProps) => {
  const proModel = useProModel()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (isPro) {
    return null
  }

  return (
    <div>
      <Card className="bg-white/10 border-0 p-2">
        <CardContent>
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount}/{MAX_FREE_COUNTS} Free Generation
            </p>
            <Progress
              className="h-3"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>
          <Button
            onClick={proModel.onOpen}
            className="w-full  "
            variant="premium"
          >
            Upgrade
            <Zap className="w-4 h-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default FreeCounter
