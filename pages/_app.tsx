import React from "react"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import useGtag from "~hooks/useGtag"
import { globalStyles } from "~stitches.config"
import "~styles/globals.css"

function App({ Component, pageProps }: AppProps) {
  globalStyles()
  useGtag()

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
