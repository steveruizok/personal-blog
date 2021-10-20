import Link from "next/link"
import { Icon } from "~components/icon"
import { ThemeSwitch } from "~components/theme-switch"
import { styled } from "~stitches.config"

export function Header() {
  return (
    <Container>
      <Link href="/" passHref>
        <Lockup>
          <Icon />
          <h1>Steve Ruiz</h1>
        </Lockup>
      </Link>
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/archive">Archive</Link>
        </li>
      </ol>
      <ThemeSwitch />
    </Container>
  )
}

const Container = styled("header", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontFamily: "$ui",
  mx: "-$0",
  h1: {
    margin: 0,
    fontSize: "$2",
    fontWeight: "bold",
  },
  a: {
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "$1",
    borderRadius: 4,
    transition: "background-color .16s",
    bg: "transparent",
    py: "$1",
    px: "$0",
    m: 0,
    sm: {
      "&:hover": {
        bg: "$hover",
      },
    },
  },
  "& > ol": {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    m: 0,
    p: 0,
  },
  "& > ol > li": {
    display: "flex",
    flexDirection: "row",
    listStyleType: "none",
    m: 0,
    p: 0,
  },
})

const Lockup = styled("a", {
  display: "flex",
  alignItems: "center",
  gap: "$1",
  flexGrow: 2,
})
