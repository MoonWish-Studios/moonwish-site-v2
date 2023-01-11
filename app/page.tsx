"use client"

import Hero from "./components/Hero"

import WhyUs from "./components/WhyUs"
import ProcessSection from "./components/ProcessSection/ProcessSection"
import Action from "./components/Action"
import Image from "next/image"

// download headwind extension to autosort classnames so we see the same thing
export default function Home() {
  return (
    <div className="">
      <Hero />
      <WhyUs />
      <ProcessSection />
      <Action direction="process" />
      <div className="relative w-full h-[34rem] flex justify-center items-end  bg-lightGray">
        <Image
          className="transform translate-y-[26px] z-50 top-0"
          src={"/assets/twoPeople.svg"}
          alt={""}
          height={900}
          width={900}
        />
      </div>
    </div>
  )
}
