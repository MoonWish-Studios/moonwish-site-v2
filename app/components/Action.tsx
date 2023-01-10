import React from "react"
import Button from "./Button"
import Image from "next/image"
import Link from "next/link"

export default function Action({ direction }: { direction: string }) {
  let text = direction == "services" ? "Our Services" : "Our Process"

  return (
    <div className="h-screen flex flex-row items-center">
      <div className="textSection z-40 lg:pl-36 w-full ">
        <div
          className="flex flex-col w-full  lg:text-start text-center lg:items-start
       items-center "
        >
          <div className="mb-3 text-sm font-semibold text-lighterGray">
            READY TO WORK WITH US?
          </div>
          <div
            className="lg:text-7xl font-medium w-7/12 md:text-5xl text-4xl md:leading-tight 
          md:tracking-[2.5px] lg:text-start text-center tracking-[1px]"
          >
            Let us build your dream website
          </div>
        </div>
        <div className="space-x-5 mt-8 w-full text-center lg:text-start items-center lg:items-start">
          <Button
            href="/contact"
            className="px-[30px] text-white hover:text-gray border-black border"
          >
            Contact Us
          </Button>

          <Button
            href={`/${direction}`}
            className="bg-opacity-0 hover:text-black hover:border-black
          border-gray border-2 text-lightestGray px-[30px] "
          >
            {text}
          </Button>
        </div>
      </div>
      <div className="imageSection w-full flex justify-center z-0 absolute lg:w-full pl-10 pr-10">
        <Image
          src={"/assets/icons/smallMoon.svg"}
          alt={""}
          height={650}
          width={650}
        />
      </div>
    </div>
  )
}
