"use client"
import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const testimonials = [
  {
    name: "Antio",
    avitar: "A",
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis atque nesciunt maxime laboriosam? Expedita eum quam explicabo, natus quia ipsa.",
  },
  {
    name: "Avi",
    avitar: "A",
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis atque nesciunt maxime laboriosam? Expedita eum quam explicabo, natus quia ipsa.",
  },
  {
    name: "Alice",
    avitar: "A",
    title: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis atque nesciunt maxime laboriosam? Expedita eum quam explicabo, natus quia ipsa.",
  },
]

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-4xl text-white font-bold mb-7 pl-4">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.title}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
