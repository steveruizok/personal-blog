import { Footer as _Footer, A, Text, IconButton } from "./theme"
import { Rss } from "react-feather"
import Link from "next/link"

export default function Footer() {
  return (
    <_Footer>
      <Text variant="detail">
        Made in London •{" "}
        <A variant="author" href="https://twitter.com/steveruizok">
          Steve Ruiz
        </A>{" "}
        • 2021
      </Text>
      <Link href="/rss" title="Rss Feed">
        <IconButton>
          <Rss size={20} style={{ marginTop: "-2px" }} />
        </IconButton>
      </Link>
    </_Footer>
  )
}
