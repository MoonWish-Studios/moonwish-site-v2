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
    <div className="flex flex-col items-start px-10 py-20 md:pl-36 bg-neutral-100">
      <h1 className="mb-2 text-sm font-semibold text-lightestGray">
        TECH STACK
      </h1>
      <h1 className="mb-4 text-3xl font-medium lg:text-5xl text-highlight">
        Technologies & Software
      </h1>
      <p className="mb-6 text-xl font-normal tracking-wide lg:text-2xl text-lightestGray">
        We use the latest technologies and software to design your website
      </p>
      <div className="relative flex flex-wrap items-center justify-center gap-10 mt-6 overflow-x-auto scrollbar-hide sm:justify-start sm:items-start">
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
