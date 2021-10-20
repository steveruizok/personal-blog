import "../styles/globals.css"
import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import { globalStyles } from "~stitches.config"
import React from "react"

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default App
