import React from "react"
import Image from "next/image"

export default function ProcessImage({
  image,
  title,
  first,
  arrow,
  width,
  className,
}: {
  image: string
  title: string
  first: boolean
  arrow: boolean
  width: string
  className?: string
}) {
  let possiblePad = first ? "md:ml-20 ml-12" : ""
  return (
    <div className="imageItem min-w-fit flex flex-row space-x-10 items-center pr-10">
      <div className="flex flex-col space-y-4 items-center ">
        <Image
          className={`${width} h-auto ${possiblePad} `}
          src={`/assets/${image}`}
          alt={""}
          height={100}
          width={100}
        />
        <h1 className={`${possiblePad}`}>{title}</h1>
      </div>
      {arrow ? (
        <Image
          className="w-[70px] h-[40px]"
          src="/assets/arrow.png"
          alt={""}
          height={100}
          width={100}
        />
      ) : null}
    </div>
  )
}
