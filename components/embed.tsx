import Link from "next/link"
import { styled, A } from "./theme"
import { ExternalLink } from "react-feather"

export default function Embed({ src }: { src: string }) {
  return (
    <Container>
      <StyledIFrame src={src} />
      <StyledLink>
        <A href={src} target="_blank" rel="noopener noreferrer nofollow">
          <ExternalLink size={16} />
        </A>
      </StyledLink>
    </Container>
  )
}

const Container = styled("div", {
  width: "100%",
  position: "relative",
  height: 700,
})

const StyledIFrame = styled("iframe", {
  display: "block",
  width: "100%",
  height: "100%",
  border: "none",
})

const StyledLink = styled("div", {
  position: "absolute",
  top: 8,
  right: 8,
  a: {
    fontFamily: "$body",
    fontSize: "$1",
    py: "$1",
    px: "$1",
    backgroundColor: "$muted",
    borderRadius: 4,
  },
})
