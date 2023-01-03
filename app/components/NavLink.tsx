import Link from "next/link"

interface NavLinkTypes {
  href: string
  text: string
  currentPath: string | null
}
export default function NavLink({ href, text, currentPath }: NavLinkTypes) {
  return (
    <Link
      href={href}
      className={`text-lg md:text-lg font-normal text-white md:text-black hover:text-gray
        px-2 md:px-3 transition py-1 rounded-lg sm:rounded-full ${
          href === currentPath && "bg-gradient"
        }`}
      about={`${text} Link`}
    >
      {text}
    </Link>
  )
}
