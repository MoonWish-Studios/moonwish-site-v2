import React from "react"

export default function Statement({
  title,
  children,
}: {
  title: string
  children: string
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 bg-lightGray h-[50vh]">
      <div className="title text-gray font-semibold text-center">{title}</div>
      <div className="body text-black lg:text-4xl md:text-3xl text-2xl  text-center w-8/12 leading-tight">
        {children}
      </div>
    </div>
  )
}
