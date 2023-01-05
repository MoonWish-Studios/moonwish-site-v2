import React from "react"
import Image from "next/image"

export default function PhaseBlock() {
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

          <Image
            className={`hidden md:block h-[12rem] mt-10`}
            src={`/assets/icons/line.svg`}
            width={10}
            height={10}
            alt={""}
          />
        </div>
        <div
          className={`textSection flex flex-col xl:w-6/12 md:w-8/12 text-center md:text-left md:pl-0 mb-4  tracking-wider`}
        >
          <div className="md:w-12/12 flex flex-col items-center md:items-start">
            <h1 className="text-sm font-semibold text-lightestGray">
              PHASE ONE
            </h1>
            <h1 className="lg:text-5xl text-3xl text-highlight font-medium mb-4">
              Contact
            </h1>
            <p className="lg:text-2xl text-xl font-normal text-lightestGray tracking-wide mb-6 lg:w-full md:w-11/12 w-10/12">
              Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis
              sem ultrices. Tellus in diam tellus quis dui pretium velit odio a.
              Tellus dictum porttitor nisl leo non velit. Faucibus mattis
              potenti cursus et. Amet iaculis auctor nec eget diam sit sed
              cursus. Pellentesque ipsum commodo suspendisse at ultrices dui
              porta.
            </p>
            <h1 className="text-2xl font-medium">Outcome</h1>
            <ul className="flex flex-row space-x-14 text-lightestGray text-lg ">
              <li>- Get to know you</li>
              <li>- Arrange first meeting</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-row w-full">
    //   <div className="left flex-col w-1/4 ml-20 mr-20">
    //     <div className="icon ">
    //       <Image
    //         className={` h-auto`}
    //         src={`/assets/envelope.png`}
    //         alt={""}
    //         height={250}
    //         width={250}
    //       />
    //     </div>
    //   </div>
    //   <div className="textSection ">
    //     <div
    //       className="flex flex-col w-full  lg:text-start text-center lg:items-start
    //    items-center "
    //     >
    //       <div className="mb-3 text-sm font-semibold text-lightestGray">
    //         PHASE ONE
    //       </div>
    //       <div
    //         className="lg:text-5xl font-medium w-7/12 md:text-5xl text-4xl md:leading-tight
    //       md:tracking-[2.5px] lg:text-start text-center tracking-[1px]"
    //       >
    //         Contact
    //       </div>
    //       <div className="text-lightestGray mt-6 md:text-xl">
    //         Lorem ipsum dolor sit amet consectetur. Amet nec facilisi lobortis
    //         sem ultrices. Tellus in diam tellus quis dui pretium velit odio a.
    //         Tellus dictum porttitor nisl leo non velit. Faucibus mattis potenti
    //         cursus et. Amet iaculis auctor nec eget diam sit sed cursus.
    //         Pellentesque ipsum commodo suspendisse at ultrices dui porta.
    //       </div>
    //       <h1>Outcome</h1>
    //       <ul className="flex flex-row text-lightestGray">
    //         <li>- Get to know you</li>
    //         <li>- Arrange first meeting</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  )
}
