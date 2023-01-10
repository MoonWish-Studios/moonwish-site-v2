import React from "react"
import Image from "next/image"
import { link } from "fs"

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
    <div className="w-full flex justify-center mb-16">
      <div
        className={`w-full flex flex-col md:flex-row md:container items-center md:items-start  justify-start `}
      >
        <div
          className={`md:w-3/12 w-2/12 lg:mr-10 md:mr-10 lg:ml-0 md:ml-3 mb-8 flex items-center flex-col`}
        >
          <Image
            className={`imageSection flex items-center  justify-start`}
            src={`/assets/envelope.png`}
            width={180}
            height={180}
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
          className={`textSection flex flex-col xl:w-6/12 md:w-8/12 text-center md:text-left md:pl-0 mb-4  tracking-wider`}
        >
          <div className="md:w-12/12 flex flex-col items-center md:items-start">
            <h1 className="text-sm font-semibold text-lightestGray">
              PHASE {number}
            </h1>
            <h1 className="lg:text-5xl text-3xl text-highlight font-medium mb-4">
              {title}
            </h1>
            <p className="lg:text-2xl text-xl font-normal text-lightestGray tracking-wide mb-6 lg:w-full md:w-11/12 w-10/12">
              {children}
            </p>
            <h1 className="text-2xl font-medium">Outcome</h1>
            <ul className="grid grid-cols-2  text-lightestGray text-lg pl-3 pr-3">
              {outcome.map((item: string) => (
                <li className="mr-0 md:mr-20">- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
