"use client"
import React from "react"
import Button from "./Button"
import { useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const whoWeAre = useRef(null)

  const scrollDown = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }
  return (
    <div>
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
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollDown(whoWeAre)}
              className="px-[30px] border-black  text-white border hover:text-gray
          inline-block text-center bg-black hover:transition-all
      box-content rounded-md my-0 py-[10px]"
            >
              Learn More
            </motion.button>
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
      </div>
      <div
        ref={whoWeAre}
        className=" flex flex-col items-center justify-center space-y-8 bg-lightGray h-[50vh]"
      >
        <div className="title text-gray font-semibold text-center">
          WHO WE ARE
        </div>
        <div className="body text-black lg:text-4xl md:text-3xl text-2xl  text-center w-8/12 leading-tight">
          Our mission is to make a positive impact on businesses in our
          community who want to provide the best service to their customers. We
          strive to highlight the amazing products and services that your
          business offers.
        </div>
      </div>
    </div>
  )
}
