import { Header } from "./header"
import { styled } from "~stitches.config"
import * as React from "react"
import { useScrollPosition } from "~hooks/useScrollPosition"
import { darkTheme, dimTheme, lightTheme } from "~stitches.config"
import { useTheme } from "next-themes"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  useScrollPosition()

  const { theme } = useTheme()

  React.useEffect(() => {
    document.body.classList.remove(darkTheme)
    document.body.classList.remove(dimTheme)
    document.body.classList.remove(lightTheme)

    if (theme === "dark") {
      document.body.classList.add(darkTheme)
    } else if (theme === "dim") {
      document.body.classList.add(dimTheme)
    } else {
      document.body.classList.add(lightTheme)
    }
  }, [theme])

  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  )
}

const Container = styled("div", {
  maxWidth: 720,
  margin: "0px auto",
  p: "$1",
  sm: {
    p: "$2",
  },
  md: {
    p: "$3",
  },
  lg: {
    p: "$4",
  },
  "& sup > a": {
    fontSize: "$0",
    p: 2,
    textDecoration: "none",
  },
  "& .footnotes > ol": {
    p: 0,
    ml: "$1",
  },
  "& .footnotes .footnote-backref": {
    ml: "$0",
  },
  "& .footnotes *": {
    fontSize: "$1",
    lineHeight: 1.32,
  },
})
