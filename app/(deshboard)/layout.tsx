import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"
import { getApiLimitCount } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"

const DeshboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()
  return (
    <div className="h-screen relative">
      <div className="hidden md:w-72 h-screen md:flex md:flex-col md:fixed md:inset-y-0 z-0  bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  )
}
export default DeshboardLayout
