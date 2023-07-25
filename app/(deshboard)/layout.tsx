import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { Button } from "@/components/ui/button"

const DeshboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen relative">
      <div className="hidden md:w-72 h-screen md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className=" md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  )
}
export default DeshboardLayout
