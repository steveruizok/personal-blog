import { TwitterTweetEmbed } from "react-twitter-embed"
import { styled, Box } from "./theme"

export default function Tweet({ id }: { id: string }) {
  return (
    <Centered>
      <TwitterTweetEmbed tweetId={id} />
    </Centered>
  )
}

const Centered = styled("div", {
  py: "$2",
  "& > *": {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
})
