import React from "react"
import Image from "next/image"

export default function PhaseBlock({
  number,
  title,
  children,
  outcome,
  image,
  last,
}: {
  number: string
  title: string
  children: string
  outcome: any
  image: string
  last: boolean
}) {
  return (
    <div className="flex justify-center w-full mb-16">
      <div
        className={`w-full flex flex-col md:flex-row md:container items-center md:items-start  justify-start `}
      >
        <div
          className={`md:w-4/12 w-4/12 lg:mr-10 md:mr-10 lg:ml-0 md:ml-3 mb-8 flex items-center flex-col`}
        >
          <Image
            className={`imageSection flex items-center  justify-start`}
            src={`/assets/${image}`}
            width={250}
            height={250}
            alt={""}
          />
          {!last ? (
            <Image
              className={`hidden md:block h-[12rem] mt-10`}
              src={`/assets/icons/line.svg`}
              width={10}
              height={10}
              alt={""}
            />
          ) : null}
        </div>
        <div
          className={`textSection flex flex-col xl:w-6/12 md:w-8/12 text-justify hyphens-auto md:text-left md:pl-0 mb-4  tracking-wider`}
        >
          <div className="flex flex-col items-center md:w-12/12 md:items-start">
            <h1 className="text-sm font-semibold text-lightestGray">
              PHASE {number}
            </h1>
            <h1 className="mb-4 text-3xl font-medium lg:text-5xl text-highlight">
              {title}
            </h1>
            <p className="w-10/12 mb-6 text-xl font-normal tracking-wide lg:text-2xl text-lightestGray lg:w-full md:w-11/12">
              {children}
            </p>
            <h1 className="mb-2 text-2xl font-medium">Outcome</h1>
            <ul className="grid grid-cols-2 ml-4 text-lg text-left gap-x-6 lg:gap-x-16 text-lightestGray">
              {outcome.map((item: string) => (
                <li className="mr-0 ">- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
