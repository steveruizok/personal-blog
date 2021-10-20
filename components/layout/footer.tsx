import { styled } from "~stitches.config"
import { Text } from "../text"

const date = new Date()

export function Footer() {
  return (
    <FooterContainer>
      <Text variant="detail">Steve Ruiz © {date.getFullYear()}</Text>
    </FooterContainer>
  )
}

const FooterContainer = styled("div", {
  mt: "$5",
  mb: "$8",
  textAlign: "center",
})
