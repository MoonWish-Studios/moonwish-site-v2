import React from "react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <div className="bg-black flex flex-col h-[38rem]">
      <div className="logoSection">
        <Link href="/">
          <Image
            src="/assets/logo-with-text.svg"
            alt="Moonwish Studios Logo"
            width="190"
            height="100"
            // className="ml-4"
          />
        </Link>
      </div>
    </div>
  )
}
