import Link from "next/link"

export default function BookNowButton({
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
      className={`inline-block bg-black  hover:text-gray hover:transition-all
      box-content rounded-md px-[35px] my-0 text-base py-[10px] text-white ${className} `}
    >
      {children}
    </Link>
  )
}
