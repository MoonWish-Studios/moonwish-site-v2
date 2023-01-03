import "./styles/globals.css"
import { Outfit } from "@next/font/google"
import Navbar from "./components/Navbar"

const outfit = Outfit({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
