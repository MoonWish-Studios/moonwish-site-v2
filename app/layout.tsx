import "./styles/globals.css"
import { Outfit } from "@next/font/google"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Script from "next/script"

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

      {/* <!-- Google tag (gtag.js) --> */}

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-WD36EMCCJT"
      />
      <Script
        id="google-tag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-WD36EMCCJT');`,
        }}
      />
      <head />
      <body>
        <div id="root">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
