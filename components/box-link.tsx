import { styled } from "~stitches.config";

export const BoxLink = styled("a", {
  display: "block",
  cursor: "pointer",
  borderRadius: 4,
  color: "$text",
  textDecoration: "none",
  p: "$1",
  mx: "-$1",
  sm: {
    p: "$1",
    mx: "-$1",
    "&:hover": {
      bg: "$hover",
      color: "$text",
    },
  },
  md: {
    p: "$2",
    mx: "-$2",
  },
  lg: {
    p: "$2",
    mx: "-$2",
  },
});
