import { styled, Grid, Footer, Heading3, Text, BoxLink, A } from "./theme"
import Link from "next/link"

const LinkContainer = styled(BoxLink, {
  display: "grid",
  gap: "$2",
})

const TitleContainer = styled("div", {})

export default function SecondaryPostLink({
  title,
  date,
  readingTime,
  slug,
  hero,
}: Blog.Post) {
  return (
    <article>
      <Link href={slug}>
        <LinkContainer>
          <TitleContainer>
            <header>
              <Heading3 css={{ m: 0, mb: "$0" }}>{title}</Heading3>
            </header>
            <Text variant="detail">
              <time dateTime={date}>{date} </time> • {readingTime.text}
            </Text>
          </TitleContainer>
        </LinkContainer>
      </Link>
    </article>
  )
}
