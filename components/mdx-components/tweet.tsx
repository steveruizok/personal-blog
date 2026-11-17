import TweetEmbed from "react-tweet-embed";
import { styled } from "~stitches.config";

export function Tweet({ id }: { id: string }) {
  return (
    <Centered>
      <TweetEmbed tweetId={id} />
    </Centered>
  );
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
});
