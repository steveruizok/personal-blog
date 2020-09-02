// @jsx jsx
import Link from 'next/link'
import { jsx, Flex, Avatar, Box, Text, Image } from 'theme-ui'
import Layout from '../components/layout'
import PostNavLinks from '../components/post-nav-links'

export default function DefaultLayout({ children, frontMatter }) {
  const {
    keywords,
    description,
    location,
    title,
    date,
    hero,
    twitter,
    avatar,
    slug,
  } = frontMatter

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <Flex sx={{ alignItems: 'center', mb: 6 }}>
        <Avatar src={avatar} />
        <Box sx={{ ml: 2 }}>
          <Text variant="textStyles.detail">
            <time dateTime={date}>{date}</time>
          </Text>
          <Text variant="textStyles.detail">{location}</Text>
        </Box>
      </Flex>
      {hero && (
        <span sx={{ textAlign: 'center', display: 'block', mx: [-3, 0] }}>
          <Image variant="article" src={hero} alt={title} title={title} />
        </span>
      )}
      <article>{children}</article>
      <PostNavLinks slug={slug} />
    </Layout>
  )
}
