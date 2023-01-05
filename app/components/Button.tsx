import Link from "next/link"

export default function Button({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  return (
    <Link
      href=""
      //   hover:bg-opacity-0 hover:outline hover:outline-2
      //   hover:outline-gray
      className={`inline-block bg-black hover:transition-all
      box-content rounded-md px-[35px] my-0 py-[10px] ${className} `}
    >
      {children}
    </Link>
  )
}
