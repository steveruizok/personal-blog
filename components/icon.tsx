import { styled } from "~stitches.config";

export const Icon = styled("div", {
  height: 32,
  width: 32,
  my: "$1",
  backgroundColor: "$text",
  "&:hover": {
    animation: "forwards .2s rotate",
  },
});
