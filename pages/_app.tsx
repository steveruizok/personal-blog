import React from "react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import useGtag from "~hooks/useGtag";
import { globalStyles } from "~stitches.config";
import "~styles/globals.css";

const themes = ["light", "dim", "dark"];

function App({ Component, pageProps }: AppProps) {
  globalStyles();
  useGtag();

  return (
    <ThemeProvider
      storageKey="ruiz_blog_theme"
      defaultTheme="light"
      enableSystem
      themes={themes}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;
