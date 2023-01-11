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
      className={`text-lg md:text-lg font-normal text-white md:text-black hover:underline first-letter underline-offset-8
        px-2 md:px-3 transition decoration-gray py-1  ${
          href === currentPath && "md:underline "
        }`}
      about={`${text} Link`}
    >
      {text}
    </Link>
  )
}
