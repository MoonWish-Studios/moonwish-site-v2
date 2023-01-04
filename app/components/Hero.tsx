import React from "react"
import Button from "./Button"

import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="home w-full mb-12 flex flex-col items-center md:items-start  md:flex-row-reverse md:justify-between justify-start  ">
      <div className=" imageSection pb-10 flex w-80 md:w-2/3 ">
        <div>
          <Image
            className=""
            src="/assets/personCoding.svg"
            height={900}
            width={900}
            alt={""}
          />
        </div>
      </div>
      <div
        className="textSection  flex text-center md:text-left justify-center md:mt-20 lg:mt-48
        lg:pl-28 md:pl-16 flex-col lg:w-8/12 md:w-3/4  ml-3 mr-3 md:ml-0 md:mr-0 "
      >
        <h1 className="inline lg:text-5xl text-4xl font-medium tracking-[0.03em]">
          We make modern websites for your business{" "}
          <Image
            className="inline"
            src="/assets/icons/smallMoon.svg"
            width={35}
            height={35}
            alt={""}
          />
        </h1>
        <div className="space-x-5 mt-8 ">
          <Button className="px-[30px] border-black border">Learn More</Button>
          <Button
            className="bg-opacity-0 
          border-gray border-2 text-gray px-[30px] hover:border-black hover:text-black"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}
