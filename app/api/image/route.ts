import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import { Configuration, OpenAIApi } from "openai"
import Replicate from "replicate"
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt, amount = 1, resolution = "512x512" } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 })
    }
    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 })
    }
    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 })
    }
    const freeTrial = await checkApiLimit()
    const isPro = await checkSubscription()

    if (!freeTrial && !isPro) {
      return new NextResponse("Free Trial has expired.", { status: 403 })
    }

    const response = await replicate.run(
      "ai-forever/kandinsky-2.2:ea1addaab376f4dc227f5368bbd8eff901820fd1cc14ed8cad63b29249e9d463",
      {
        input: {
          prompt: prompt,
        },
      }
    )
    if (!isPro) {
      await increaseApiLimit()
    }
    return NextResponse.json(response)
  } catch (error) {
    console.log("[Image_ERROR]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
