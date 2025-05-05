import { styled } from "~stitches.config";

export const GhostLink = styled("a", {
  textDecoration: "none",
  color: "$text",
  "&:hover": {
    textDecoration: "none",
  },
});
