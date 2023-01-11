import React from "react"
import Scroll from "./Scroll"
import Link from "next/link"

export default function ProcessSection() {
  return (
    <div className="w-full pt-20 pb-20 bg-lighterYellow h-fit md:pt-28">
      <div
        className="flex flex-col items-center w-full mb-10 text-center topText lg:pl-20 lg:text-start lg:items-start md:mb-16"
      >
        <div className="mb-3 text-sm font-semibold text-lighterGray">
          HOW IT WORKS
        </div>
        <div className="lg:text-6xl w-8/12 md:text-5xl text-3xl leading-tight tracking-[2px] lg:text-start text-center">
          Designing delightful user experiences for your brand
        </div>
      </div>
      <Scroll />
      <div className="flex justify-center w-full lg:justify-start">
        <div className="w-7/12 text-2xl text-center lg:text-start lg:ml-24 md:pb-14 pt-28">
          Learn more about the{" "}
          <Link className="underline" href={"/"}>
            process
          </Link>
        </div>
      </div>
    </div>
  )
}
