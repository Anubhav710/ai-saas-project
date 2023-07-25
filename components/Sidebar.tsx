"use client"
import Link from "next/link"
import Image from "next/image"
import { Montserrat } from "next/font/google"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  MusicIcon,
  VideoIcon,
  Code,
  Settings,
} from "lucide-react"

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] })

const routes = [
  {
    label: "Deshboard",
    icon: LayoutDashboard,
    href: "/deshboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-700",
  },
  {
    label: "Deshboard",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-700",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-700",
  },
  {
    label: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-green-700",
  },
  {
    label: "Setting",
    icon: Settings,
    href: "/setting",
  },
]
export default function Sidebar() {
  const parthName = usePathname()
  return (
    <div className="space-y-4 flex flex-col h-screen bg-[#111827] text-white   ">
      <div className="px-3 py-2 flex-1">
        <Link href="/deshboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4 ">
            <Image src="/logo.png" alt="Logo" fill sizes="50px" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Genius
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                parthName === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
