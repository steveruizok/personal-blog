import { Text, Box, Divider, Heading1, A, Image } from "../components/theme"
import Link from "next/link"
import Greeting from "../components/greeting"
import Layout from "../components/layout"
import PostNavLinks from "../components/post-nav-links"

export default function DefaultLayout({ children, frontMatter }) {
  const {
    keywords,
    description,
    readingTime,
    title,
    author,
    date,
    hero,
    twitter,
    slug,
  } = frontMatter

  return (
    <Layout description={description} keywords={keywords}>
      <article>
        <header>
          <Link href={slug}>
            <A variant="ghost" href={slug}>
              <Heading1>{title}</Heading1>
            </A>
          </Link>
          <Text variant="detail" css={{ mb: "$4" }}>
            <A href={`https://twitter.com/${twitter}`} variant="author">
              {author}
            </A>{" "}
            • <time dateTime={date}>{date}</time> • {readingTime.text}
          </Text>
          {hero && (
            <Image src={hero} alt={title} title={title} css={{ mb: "$2" }} />
          )}
        </header>
        <main>{children}</main>
        <footer>
          <Divider />
          <Greeting />
          <Divider />
          <PostNavLinks slug={slug} />
        </footer>
      </article>
    </Layout>
  )
}
