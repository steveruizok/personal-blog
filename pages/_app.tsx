import { MDXProvider } from '@mdx-js/react'
import Figure from '../components/figure'
import {
  Container,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  A,
  Paragraph,
  Pre,
  Code,
  THead,
  TD,
  TR,
  Table,
  Blockquote,
  OrderedList,
  UnorderedList,
  Footnotes,
  Divider,
} from '../components/theme'
import '../components/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <MDXProvider
        components={{
          img: Figure,
          h1: Heading1,
          h2: Heading2,
          h3: Heading3,
          h4: Heading4,
          h5: Heading5,
          h6: Heading6,
          p: Paragraph,
          a: A,
          pre: Pre,
          code: Code,
          table: Table,
          thead: THead,
          tr: TR,
          td: TD,
          hr: Divider,
          blockquote: Blockquote,
          ol: OrderedList,
          ul: UnorderedList,
        }}
      >
        <Component {...pageProps} />
      </MDXProvider>
    </Container>
  )
}

export default MyApp
