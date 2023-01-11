"use client"
import React from "react"
import Image from "next/image"
import ContactBar from "../components/ContactBar"

export default function page() {
  return (
    <div className="mx-auto lg:max-w-screen-2xl ">
      <div className="flex flex-col items-center justify-start w-full home md:items-start md:flex-row-reverse md:justify-between ">
        <div className="hidden imageSection md:flex w-80 md:w-2/3 ">
          <div>
            <Image
              className=""
              src="/assets/contactGuy.svg"
              height={600}
              width={750}
              alt={""}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center mt-20 mb-20 ml-3 mr-3 text-center textSection md:text-left md:mb-0 lg:mt-48 lg:pl-16 xl:pl-40 md:pl-16 lg:w-8/12 md:w-3/4 md:ml-0 md:mr-0 ">
          <h1 className="text-sm font-semibold text-lightestGray">
            GIVE US A CALL
          </h1>
          <div className="inline lg:text-6xl text-5xl font-medium tracking-[0.03em] mb-8">
            714 330-9387{" "}
          </div>
          <h1 className="text-sm font-semibold text-lightestGray">
            CONTACT US VIA EMAIL
          </h1>
          <div className="text-lighterGray lg:text-5xl text-4xl w-fit flex flex-col items-end tracking-[0.03em] ">
            mooonwishstudios
            <div className="text-sm font-medium text-lighterGray">
              @gmail.com
            </div>
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  )
}
