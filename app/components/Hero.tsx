"use client"
import React from "react"
import Button from "./Button"
import { useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"

export default function Hero() {
  const whoWeAre = useRef(null)
  const { ref, inView } = useInView({
    threshold: 0.3,
  })
  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
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

  const scrollDown = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <div className="relative mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center justify-start w-full mb-12 overflow-x-clip home md:items-start md:flex-row-reverse md:justify-between "
      >
        <motion.div className="flex w-full pb-10 imageSection md:w-2/3">
          <div>
            <Image
              className=""
              src="/assets/personCoding.svg"
              height={900}
              width={900}
              alt={""}
            />
          </div>
        </motion.div>
        <motion.div className="flex flex-col justify-center max-w-[56rem]   ml-3 mr-3 text-center textSection md:text-left md:mt-20 lg:mt-32 xl:ml-48 md:ml-16 lg:w-8/12  md:w-3/4 md:mr-0  ">
          <h1 className=" inline lg:text-5xl text-4xl font-medium tracking-[0.03em] lg:leading-tight">
            We make modern websites for your business{" "}
            <Image
              className="inline"
              src="/assets/icons/smallMoon.svg"
              width={35}
              height={35}
              alt={""}
            />
          </h1>
          <div className="w-full gap-5 mx-auto mt-8 space-x-5 sm:flex-row">
            <button
              onClick={() => scrollDown(whoWeAre)}
              className="px-[30px] border-black  text-white border hover:text-gray
          inline-block text-center bg-black hover:transition-all
      box-content rounded-md my-0 py-[10px]"
            >
              Learn More
            </button>
            {/* <Button
            onClick={scrollDown}
            className="px-[30px] border-black  text-white border hover:text-gray"
          >
            Learn More
          </Button> */}
            <Button
              href="contact"
              className="bg-opacity-0 hover:text-black hover:border-black
          border-gray border-2 text-gray px-[30px] "
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </motion.div>
      <div ref={ref}>
        <motion.div
          animate={animation}
          ref={whoWeAre}
          className="flex flex-col  items-center justify-center space-y-8 bg-gray-100 py-36"
        >
          <div className="font-semibold text-center title text-gray">
            WHO WE ARE
          </div>
          <div className="w-8/12 text-2xl text-center text-black lg:leading-snug body lg:text-4xl md:text-3xl ">
            Our mission is to make a positive impact on businesses in our
            community who want to provide the best service to their customers.
            We strive to highlight the amazing products and services that your
            business offers.
          </div>
          <Button
            href="contact"
            className="bg-opacity-0 hover:text-black hover:border-black
          border-gray border-2 text-gray px-[30px] "
          >
            See Services
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
