import React from "react"
import Image from "next/image"
import ProcessImage from "./ProcessImage"

export default function Scroll() {
  //   const list = [
  //     "envelope.png",
  //     "envelope.png",
  //     "envelope.png",
  //     "envelope.png",
  //     "envelope.png",
  //     "envelope.png",
  //     "envelope.png",
  //   ]
  return (
    <div className="relative flex items-center overflow-x-auto scrollbar-hide space-x-10 ">
      <ProcessImage
        image={"envelope.png"}
        title={"Contact"}
        first={true}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"envelope.png"}
        title={"Brainstorm"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"envelope.png"}
        title={"Design"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"envelope.png"}
        title={"Revise"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"envelope.png"}
        title={"Code"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"envelope.png"}
        title={"Go Live"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"envelope.png"}
        title={"Maintain/Update"}
        first={false}
        arrow={false}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
    </div>
  )
}
