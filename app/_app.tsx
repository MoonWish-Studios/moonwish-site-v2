import type { AppProps } from "next/app"
import { motion, AnimatePresence } from "framer-motion"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="base-page-size">
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  )
}
