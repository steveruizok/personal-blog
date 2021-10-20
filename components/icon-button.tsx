import { styled } from "~stitches.config"
import { Button } from "./button"

export const IconButton = styled(Button, {
  p: 0,
  height: 48,
  width: 48,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$text",
  background: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",
  overflow: "hidden",
  position: "relative",
  borderRadius: 4,
  sm: {
    "&:hover": {
      bg: "$hover",
    },
  },
})
