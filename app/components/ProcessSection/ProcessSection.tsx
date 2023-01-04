import React from "react"
import Scroll from "./Scroll"
import Link from "next/link"

export default function ProcessSection() {
  return (
    <div className="w-full bg-lighterYellow h-fit pt-20 pb-20 md:pt-28">
      <div
        className="topText flex flex-col w-full lg:pl-20 lg:text-start text-center lg:items-start
       items-center mb-10 md:mb-16"
      >
        <div className="mb-3 text-sm font-semibold text-lighterGray">
          HOW IT WORKS
        </div>
        <div className="lg:text-6xl w-8/12 md:text-5xl text-3xl leading-tight tracking-[2px] lg:text-start text-center">
          Designing delightful user experiences for your brand
        </div>
      </div>
      <Scroll />
      <div className="w-full flex justify-center lg:justify-start">
        <div className="w-7/12 text-center lg:text-start lg:ml-24 md:pb-14 pt-28 text-2xl">
          Learn more about the{" "}
          <Link className="underline" href={"/"}>
            process
          </Link>
        </div>
      </div>
    </div>
  )
}
