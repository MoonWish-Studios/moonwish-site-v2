"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import NavLink from "./NavLink"
import Button from "./Button"

export default function Navbar() {
  const pathname = usePathname()
  // set menu state
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log(open)
  })
  return (
    <div className=" lg:mx-auto  xl:w-[80rem] z-[999] relative">
      <div className="flex items-center justify-between py-4 ml-5 mr-5 md:mt-6 md:ml-10 md:mr-10">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo-with-text.svg"
            alt="Moonwish Studios Logo"
            width="190"
            height="100"
            // className="ml-4"
          />
        </Link>
        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!open)}
          className={`${
            open && "bg-black"
          }  rounded-lg mx-3 p-2 transition-colors duration-200 md:hidden`}
        >
          {open ? (
            <Image
              src="/assets/icons/menu-close.svg"
              alt="Menu Icon"
              width="25"
              height="25"
            />
          ) : (
            <Image
              src="/assets/icons/menu.svg"
              alt="Menu Icon"
              width="25"
              height="25"
            />
          )}
        </div>

        {/* Mobile Navbar */}
        <nav
          onClick={() => setOpen(!open)}
          className={`${
            !open && "hidden"
          } absolute left-1/2 top-36 transform -translate-x-1/2  -translate-y-1/2  flex flex-col gap-2 z-50 bg-black p-4 w-[90%] rounded-lg`}
        >
          <NavLink href="/process" text="Process" currentPath={pathname} />
          <NavLink href="/services" text="Services" currentPath={pathname} />
          <NavLink href="/contact" text="Contact" currentPath={pathname} />
        </nav>
        {/* Desktop Navbar */}
        <nav className="items-center hidden md:flex md:flex-row md:gap-3 md:px-4">
          <NavLink href="/process" text="Process" currentPath={pathname} />
          <NavLink href="/services" text="Services" currentPath={pathname} />
          <Button href="contact" className="text-white hover:text-gray ">
            Contact
          </Button>
        </nav>
      </div>
    </div>
  )
}
