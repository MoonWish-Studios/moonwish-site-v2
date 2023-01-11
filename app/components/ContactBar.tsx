"use client"
import React, { useState } from "react"
import Button from "./Button"

import { PopupButton } from "react-calendly"
export default function ContactBar() {
  const [scheduleMode, setScheduleMode] = useState(false)

  return (
    <div
      className="flex md:flex-row flex-col w-full  md:justify-center justify-start
     md:text-center text-left bg-gray-100  space-y-6 md:space-y-0 pt-20 pb-20 md:pt-36 md:pb-36 pl-12"
    >
      <div className="meetingSection md:w-1/3 flex flex-col items-start md:items-center justify-center">
        <h1 className="text-sm font-semibold text-lightestGray mb-3 ">
          OR SCHEDULE A MEETING
        </h1>
        <PopupButton
          url="https://calendly.com/mooonwishstudios/appointment"
          rootElement={document.getElementById("root")}
          className="inline-block text-center bg-black hover:transition-all
          box-content rounded-md my-0  bg-opacity-0 hover:text-black hover:border-black
          border-gray border-2 text-lightestGray px-[18px] py-[8px] font-light"
          text="Schedule Meeting"
        />
      </div>
      <div className="addressSection md:w-1/3 flex flex-col justify-center md:items-center items-start ">
        <h1 className="text-sm font-semibold text-lightestGray ">ADDRESS</h1>
        <div className="text-black text-xl font-light tracking-[1px] w-8/12">
          10564 Progress Way Cypress, 90630, United States
        </div>
      </div>
      <div className="md:w-1/3">
        <h1 className="text-sm font-semibold text-lightestGray">FOUNDED</h1>
        <div className="text-black text-xl font-light tracking-[1px]">2022</div>
      </div>
    </div>
  )
}
