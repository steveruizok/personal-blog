import { styled } from "~stitches.config";

export const Text = styled("p", {
  fontSize: "$2",
  fontWeight: "normal",
  fontFamily: "$body",
  lineHeight: "$body",
  variants: {
    variant: {
      caption: {
        margin: "$1",
        lineHeight: 1.3,
        fontSize: "$1",
        fontFamily: "$ui",
      },
      ui: {
        margin: 0,
        lineHeight: 1,
        fontFamily: "$ui",
      },
      detail: {
        margin: 0,
        lineHeight: 1.5,
        fontSize: "$1",
        fontFamily: "$ui",
      },
      default: {
        fontSize: "$2",
        fontFamily: "$body",
      },
    },
  },
});
