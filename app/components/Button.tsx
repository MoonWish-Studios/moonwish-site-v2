import Link from "next/link"
import { motion } from "framer-motion"

export default function Button({
  href,
  children,
  className,
}: {
  href?: string
  children: string
  className?: string
}) {
  return (
    <Link
      href={`${href}`}
      className={`inline-block text-center bg-black hover:transition-all
      box-content rounded-md px-[35px] my-0 py-[10px] ${className} `}
    >
      {children}
    </Link>
  )
}
