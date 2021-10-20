import { styled } from "~stitches.config"

export const CodeBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  position: "relative",
  bg: "$codeBg",
  color: "$text",
  my: "$3",
  mx: "-$1",
  px: "$1",
  py: "$3",
  sm: {
    borderRadius: 4,
    mx: "-$1",
    px: "$1",
    py: "$2",
  },
  md: {
    mx: "-$2",
    p: "$2",
  },
  lg: {
    mx: "-$3",
    p: "$3",
  },
  "&:after": {
    fontFamily: "$ui",
    fontSize: "$0",
    color: "$text",
    content: "'Interactive'",
    position: "absolute",
    opacity: 0.3,
    top: 8,
    right: 12,
  },
})
