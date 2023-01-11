import React from "react"
import Image from "next/image"

export default function TechStack() {
  let names = [
    "figma",
    "js",
    "next",
    "node_js",
    "react",
    "tailwind",
    "typescript",
    "vercel",
    "vs_code",
  ]
  return (
    <div className="flex flex-col items-start bg-lightGray py-20 px-10">
      <h1 className="text-sm mb-2 font-semibold text-lightestGray">
        TECH STACK
      </h1>
      <h1 className="lg:text-5xl text-3xl text-highlight font-medium mb-4">
        Technologies & Software
      </h1>
      <p className="lg:text-2xl text-xl font-normal text-lightestGray tracking-wide mb-6">
        We use the latest technologies and software to design your website
      </p>
      <div className="relative flex flex-wrap gap-10  items-center overflow-x-auto mt-6 scrollbar-hide justify-center sm:justify-start sm:items-start">
        {names.map((item: string) => (
          <Image
            src={`/assets/techStack/${item}.png`}
            alt={item}
            height={50}
            width={50}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  )
}
