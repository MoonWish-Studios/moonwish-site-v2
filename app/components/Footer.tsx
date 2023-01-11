import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <div className="bg-black w-full">
      <div className="xl:max-w-screen-2xl xl:mx-auto w-full flex flex-col h-fit pt-20 pb-10">
        <div className="topSection pl-16 lg:pl-20 mb-20">
          <div className="logoSection">
            <Link href="/">
              <Image
                src="/assets/logo-with-text2.svg"
                alt="Moonwish Studios Logo"
                width="190"
                height="100"
                // className="ml-4"
              />
            </Link>
          </div>
          <h1 className="text-white md:text-5xl text-4xl font-medium lg:w-6/12 md:w-8/12 w-10/12 pt-6 tracking-[1.5px] mb-10">
            Starting a new project or want to collaborate with us?
          </h1>
          <div className="Chunks flex md:flex-row flex-col gap-x-10  lg:gap-x-32 space-x-0 space-y-9 md:space-y-0 text-lightestGray">
            <div className="Chunk">
              <h1 className="text-3xl font-semibold mb-2">Chat with us</h1>
              <ul className="space-y-1 flex flex-col">
                <Link
                  className="hover:text-white"
                  href={"mailto:mooonwishstudios@gmail.com"}
                >
                  mooonwishstudios@gmail.com
                </Link>
                <Link className="hover:text-white" href={"tel:7143309387"}>
                  (714) 330-9387
                </Link>
              </ul>
            </div>
            <div className="Chunk">
              <h1 className="text-3xl font-semibold mb-2">Find us</h1>
              <Link
                className="hover:text-white"
                target="_blank"
                rel="noreferrer noopener"
                href={"https://goo.gl/maps/UtiZwyULrD6RBVADA"}
              >
                10564 Progress Way, Cypress 90630
              </Link>
            </div>
            <div className="Chunk">
              <h1 className="text-3xl font-semibold mb-2">Company</h1>
              <ul className="space-y-1 flex flex-col">
                <Link className="hover:text-white" href={"/"}>
                  Home
                </Link>
                <Link className="hover:text-white" href={"/process"}>
                  Process
                </Link>
                <Link className="hover:text-white" href={"/services"}>
                  Services
                </Link>
                <Link className="hover:text-white" href={"/contact"}>
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="trademark w-full border-t-[0.5px] border-darkGray border-b-0">
          <div className="pl-20 text-lightestGray text-sm pt-10 ">
            2023 MOONWISH STUDIOS - ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </div>
  )
}
