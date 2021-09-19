import { Text, Box, Divider, Heading1, A, Image } from "../components/theme"
import Link from "next/link"
import Head from "next/head"
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
    <Layout description={description} keywords={keywords} hero={hero}>
      <Head>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content={title + "- Steve Ruiz"}
          key="title"
        />
        <meta property="og:image" content={hero} />
        <meta
          property="og:description"
          content={description}
          key="description"
        />
        <meta name="twitter:site" content="@steveruizok" />
        <meta property="twitter:title" content={title} key="title" />
        <meta property="twitter:image" content={hero} />
        <meta property="twitter:description" content={description} />
        <meta
          name="keywords"
          content={[...keywords, "steve", "ruiz"].join(", ")}
        />
      </Head>
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
