import { styled, Grid, Footer, Heading2, Text, BoxLink, A } from "./theme"
import Link from "next/link"

const LinkContainer = styled(BoxLink, {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "240px auto",
  minHeight: 144,
  gap: "$2",
  gridAutoFlow: "row",
  my: "$2",
  textDecoration: "none",
  sm: {
    gridTemplateColumns: "2fr 5fr",
    gridTemplateRows: "min-content",
    gap: "$2",
    my: 0,
  },
})

const TitleContainer = styled("div", {
  height: "min-content",
  display: "grid",
  gridGap: "$1",
})

const PostImage = styled("div", {
  width: "100%",
  height: "100%",
  backgroundColor: "#ccc",
  borderRadius: 4,
  backgroundPosition: "center center",
  backgroundSize: "cover",
})

export default function PostLink({
  title,
  date,
  readingTime,
  description,
  slug,
  hero,
}: Blog.Post) {
  return (
    <article>
      <Link href={slug}>
        <LinkContainer href={slug}>
          <PostImage
            css={{
              backgroundImage: `url(${hero})`,
            }}
          />
          <TitleContainer>
            <header>
              <Heading2 css={{ mt: 0, mb: 0 }}>{title}</Heading2>
            </header>
            <Text variant="detail">
              <time dateTime={date}>{date} </time> • {readingTime.text}
            </Text>
            <Text variant="detail">{description}</Text>
          </TitleContainer>
        </LinkContainer>
      </Link>
    </article>
  )
}
