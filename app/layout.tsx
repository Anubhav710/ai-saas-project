import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { ModelProvider } from "@/components/model-provider"
const inter = Inter({ subsets: ["latin"] })
import Image from "next/image"
import { ToasterProvider } from "@/components/toster-provider"
import { CrispProvider } from "@/components/provider"
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <CrispProvider />
        <body className={`inter.className`}>
          <ModelProvider />
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
