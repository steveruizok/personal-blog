import { Box, Text, A, Avatar, Flex, Image } from '../components/stitches'
import Layout from '../components/layout'
import PostNavLinks from '../components/post-nav-links'
import useTheme from '../components/hooks/useTheme'

export default function DefaultLayout({ children, frontMatter }) {
  const {
    keywords,
    description,
    location,
    title,
    author,
    date,
    hero,
    twitter,
    avatar,
    slug,
  } = frontMatter

  const { theme, cycleTheme } = useTheme()

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <Flex css={{ alignItems: 'center', mb: '$6' }}>
        <Avatar src={avatar} />
        <Box css={{ ml: '$2' }}>
          <Text type="detail">
            <time dateTime={date}>{date}</time>
          </Text>
          <Text type="detail">
            <A href={`https://twitter.com/${twitter}`}>{author}</A>, {location}
          </Text>
        </Box>
      </Flex>
      {hero && (
        <span style={{ textAlign: 'center', display: 'block' }}>
          <Image src={hero} alt={title} title={title} />
        </span>
      )}
      <article>{children}</article>
      <PostNavLinks slug={slug} />
    </Layout>
  )
}
