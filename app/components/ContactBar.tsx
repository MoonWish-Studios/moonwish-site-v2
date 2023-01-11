"use client"
import React, { useState } from "react"
import Button from "./Button"

import { PopupButton } from "react-calendly"
export default function ContactBar() {
  return (
    <div className="flex flex-col justify-start w-full pt-20 pb-20 pl-12 space-y-6 text-left md:flex-row md:justify-center md:text-center bg-neutral-50 md:space-y-0 md:pt-36 md:pb-36">
      <div className="flex flex-col items-start justify-center meetingSection md:w-1/3 md:items-center">
        <h1 className="mb-3 text-sm font-semibold text-lightestGray ">
          OR SCHEDULE A MEETING
        </h1>
        {/* <PopupButton
          url="https://calendly.com/mooonwishstudios/appointment"
          rootElement={document.getElementById("root")!}
          className="inline-block text-center bg-black hover:transition-all
          box-content rounded-md my-0  bg-opacity-0 hover:text-black hover:border-black
          border-gray border-2 text-lightestGray px-[18px] py-[8px] font-light"
          text="Schedule Meeting"
        /> */}
      </div>
      <div className="flex flex-col items-start justify-center addressSection md:w-1/3 md:items-center ">
        <h1 className="text-sm font-semibold text-lightestGray ">ADDRESS</h1>
        <div className="text-gray-800 text-xl tracking-[1px] w-8/12">
          10564 Progress Way Cypress, 90630, United States
        </div>
      </div>
      <div className="md:w-1/3">
        <h1 className="text-sm font-semibold text-lightestGray">FOUNDED</h1>
        <div className="text-gray-800 text-xl tracking-[1px]">2022</div>
      </div>
    </div>
  )
}
