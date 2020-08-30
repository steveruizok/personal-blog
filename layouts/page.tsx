import Layout from '../components/layout'

export default function PageLayout({ children, frontMatter }) {
  const { keywords = '', description = '', title = '' } = frontMatter

  return (
    <Layout
      title={`${title} - Steve Ruiz`}
      description={description}
      keywords={keywords}
    >
      <h1>{title}</h1>
      {children}
    </Layout>
  )
}
