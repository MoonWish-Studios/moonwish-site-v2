"use client"
import React from "react"
import Button from "./Button"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"

export default function Action({ direction }: { direction: string }) {
  let text = direction == "services" ? "Our Services" : "Our Process"
  const { ref, inView } = useInView({
    threshold: 0.3,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1.5,
        transition: {
          duration: 0.5,
          opacity: 0,
        },
      })
    }
    if (!inView) {
      animation.start({ opacity: 0 })
    }
  }, [inView])

  return (
    <div className="flex flex-row items-center h-screen my-60">
      <div className="relative z-40 w-full textSection lg:pl-36 ">
        <div className="flex flex-col items-center w-full text-center lg:text-start lg:items-start ">
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
        <div className="items-center mt-8 space-x-5 text-center lg:text-start lg:items-start">
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
        <motion.div
          ref={ref}
          animate={animation}
          className="absolute transform  scale-150 top-1/2 left-1/2 abs-transform -z-10 lg:left-[70%] lg:scale-[175%]"
        >
          <Image
            src={"/assets/icons/smallMoon.svg"}
            alt={""}
            height={600}
            width={600}
          />
        </motion.div>
      </div>
    </div>
  )
}
