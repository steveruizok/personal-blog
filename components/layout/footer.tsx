import { styled } from "~stitches.config";
import { Text } from "../text";

const date = new Date();

export function Footer() {
  return (
    <FooterContainer>
      <Text variant="detail">Steve Ruiz © {date.getFullYear()}</Text>
      <a href="https://github.com/sponsors/steveruizok">hey click here</a>
    </FooterContainer>
  );
}

const FooterContainer = styled("div", {
  mt: "$5",
  mb: "$8",
  textAlign: "center",
  lineHeight: 6,

  a: {
    fontSize: "$0",
    textDecoration: "none",
    opacity: 0.8,
  },
});
