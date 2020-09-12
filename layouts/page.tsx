import Layout from "../components/layout"
import { Heading1 } from "../components/theme"

export default function PageLayout({ children, frontMatter }) {
  const { keywords = "", description = "", title = "" } = frontMatter

  return (
    <Layout title={title} description={description} keywords={keywords}>
      <header>
        <Heading1>{title}</Heading1>
      </header>
      {children}
    </Layout>
  )
}
