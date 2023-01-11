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
    <div className="flex flex-row items-center pr-10 space-x-10 imageItem min-w-fit">
      <div className="flex flex-col items-center space-y-4 ">
        <Image
          className={`${width} mix-blend-darken h-auto ${possiblePad}  `}
          src={`/assets/${image}`}
          alt={""}
          height={125}
          width={125}
        />
        <h1 className={` font-medium ${possiblePad}`}>{title}</h1>
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
