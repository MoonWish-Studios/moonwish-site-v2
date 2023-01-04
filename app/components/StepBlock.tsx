import React from "react"
import Image from "next/image"
import Link from "next/link"

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
  //   space-x-5
  let imgState = reverse ? "lg:mr-16 md:mr-5 justify-start" : "justify-end"
  let justifyState = reverse ? "justify-end" : "justify-start"
  let alignState = reverse ? "items-start" : "items-end"

  return (
    <div className="w-full flex justify-center mb-16">
      <div
        className={`w-full flex flex-col ${textState} md:container items-center  justify-center lg:pr-5 md:pr-5 md:pl-5 lg:pl-5`}
      >
        <div
          className={`textSection flex flex-col xl:w-6/12 md:w-8/12 text-center md:text-left md:pl-0 mb-4 ${alignState} tracking-wider`}
        >
          <div className="xl:w-9/12 md:w-12/12 flex flex-col items-center md:items-start">
            <h1 className="text-lightGray text-8xl">{number}</h1>
            <h1 className="lg:text-3xl text-3xl text-highlight font-medium mb-4">
              {title}
            </h1>
            <p className="lg:text-xl text-lg font-light text-darkGray tracking-wide w-9/12  ">
              {children}{" "}
            </p>
          </div>
        </div>

        <div className={`xl:w-1/2 md:w-8/12 flex ${justifyState}`}>
          <Image
            className={`imageSection flex items-center m-10 justify-start ${imgState}`}
            src={img}
            width={390}
            height={390}
            alt={""}
          />
        </div>
      </div>
    </div>
  )
}
