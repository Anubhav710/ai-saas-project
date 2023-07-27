import Heading from "@/components/Heading"
import { SubscriptionButton } from "@/components/subscription-buttion"
import { checkSubscription } from "@/lib/subscription"
import { Settings } from "lucide-react"

export default async function SettingPage() {
  const isPro = await checkSubscription()
  return (
    <div>
      <Heading
        title="settings"
        description="Manage account settings"
        icon={Settings}
        iconColor="text-gray-700"
        bg-bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You currntly on a pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  )
}
