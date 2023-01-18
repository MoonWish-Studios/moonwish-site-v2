"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"

export default function StepBlock({
  reverse,
  number,
  title,
  children,
  img,
}: {
  reverse: boolean
  number: string
  title: string
  children: string
  img: string
}) {
  let textState = reverse ? "md:flex-row-reverse" : "md:flex-row "
  let imgState = reverse ? "lg:mr-16 md:mr-5 justify-start" : "justify-end"
  let justifyState = reverse ? "justify-end" : "justify-start"
  let alignState = reverse ? "items-start" : "items-end"

  const { ref, inView } = useInView({
    threshold: 0.1,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,

        transition: {
          duration: 1,
          type: "spring",
        },
      })
    }
    if (!inView) {
      if (reverse) {
        animation.start({ opacity: 0, x: 0 })
      } else {
        animation.start({ opacity: 0, x: 0 })
      }
    }
  })

  return (
    <div ref={ref} className="flex justify-center w-full mb-16">
      <div
        className={`w-full flex flex-col ${textState} md:container items-center  justify-center lg:pr-5 md:pr-5 md:pl-5 lg:pl-5 gap-10 `}
      >
        <div className={`textSection  ${alignState} tracking-wider`}>
          <div className="flex flex-col items-center max-w-md sm:max-w-lg md:items-start">
            <h1 className="text-lightGray text-8xl">{number}</h1>
            <h1 className="mb-4 text-3xl font-medium lg:text-3xl text-highlight">
              {title}
            </h1>
            <p className="w-9/12 text-lg font-light tracking-wide lg:text-xl text-darkGray ">
              {children}{" "}
            </p>
          </div>
        </div>

        <motion.div animate={animation} className={` flex ${justifyState}`}>
          <Image
            className={`imageSection flex items-center  justify-start ${imgState}`}
            src={img}
            width={390}
            height={390}
            alt={""}
          />
        </motion.div>
      </div>
    </div>
  )
}
