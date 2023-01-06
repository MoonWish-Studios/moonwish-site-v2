import React from "react"
import Link from "next/link"
import Image from "next/image"
import ContactBar from "../components/ContactBar"

import Action from "../components/Action"

export default function page() {
  return (
    <div>
      <div className="home w-full flex flex-col items-center md:items-start  md:flex-row-reverse md:justify-between justify-start  ">
        <div className="hidden  imageSection md:flex w-80 md:w-2/3 ">
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
        <div
          className="textSection  flex text-center md:text-left justify-center mb-20 md:mb-0 mt-20 lg:mt-48
        lg:pl-28 md:pl-16 flex-col lg:w-8/12 md:w-3/4  ml-3 mr-3 md:ml-0 md:mr-0 "
        >
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
            <div className="text-lighterGray font-medium text-sm">
              @gmail.com
            </div>
          </div>
        </div>
      </div>
      <ContactBar />
    </div>
  )
}
