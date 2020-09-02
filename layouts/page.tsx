import Layout from '../components/layout'

export default function PageLayout({ children, frontMatter }) {
  const { keywords = '', description = '', title = '' } = frontMatter

  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>
  )
}
