// @jsx jsx
import { jsx, Text, Heading } from 'theme-ui'
import Layout from '../components/layout'
import PostNavLinks from '../components/post-nav-links'

export default function DefaultLayout({ children, frontMatter }) {
  const {
    keywords = '',
    description = '',
    title = '',
    date = '5/1/2020',
    slug = '',
  } = frontMatter

  return (
    <Layout
      title={`${title} - Steve Ruiz`}
      description={description}
      keywords={keywords}
    >
      <Heading as="h1">{title}</Heading>
      <Text sx={{ fontSize: 1 }}>
        <time dateTime={date}>
          {new Date(date).toLocaleDateString('en-us', {
            day: 'numeric',
            month: 'long',
            weekday: 'long',
            year: 'numeric',
          })}
        </time>
      </Text>
      {children}
      <PostNavLinks slug={slug} />
    </Layout>
  )
}
