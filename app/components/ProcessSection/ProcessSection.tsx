"use client"
import React from "react"
import Scroll from "./Scroll"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"

export default function ProcessSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: 0.8,
          opacity: 0,
        },
      })
    }
    if (!inView) {
      animation.start({ opacity: 0 })
    }
  }, [inView])

  return (
    <div className="w-full pt-20 pb-20 bg-lighterYellow h-fit md:pt-28">
      <motion.div
        animate={animation}
        ref={ref}
        className="flex flex-col items-center w-full mb-10 text-center topText lg:pl-20 lg:text-start lg:items-start md:mb-16"
      >
        <div className="mb-3 text-sm font-semibold text-lighterGray 3xl:text-center">
          HOW IT WORKS
        </div>
        <div className=" lg:text-6xl w-full md:text-5xl text-3xl leading-tight tracking-[2px] ">
          Designing delightful user experiences for your brand
        </div>
      </motion.div>
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
