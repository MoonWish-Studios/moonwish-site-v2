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
    <div className="relative flex items-center space-x-10 overflow-x-auto  ">
      <ProcessImage
        image={"process/contact.png"}
        title={"Contact"}
        first={true}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"process/brainstorm.png"}
        title={"Brainstorm"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"process/design.png"}
        title={"Design"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />

      <ProcessImage
        image={"process/code.png"}
        title={"Code"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"process/live.png"}
        title={"Go Live"}
        first={false}
        arrow={true}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
      <ProcessImage
        image={"process/update.png"}
        title={"Maintain/Update"}
        first={false}
        arrow={false}
        width={"lg:w-[12em] md:w-[10em] w-[7em]"}
      />
    </div>
  )
}
