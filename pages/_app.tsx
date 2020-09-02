// @jsx jsx
import { jsx, ThemeProvider, Container } from 'theme-ui'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/core'
import HeadingLink from '../components/heading-link'
import Figure from '../components/figure'
import theme from '../components/theme'
import '../components/styles.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={(theme) => ({
          color: theme.colors.text,
          background: theme.colors.background,
        })}
      />
      <Container>
        <MDXProvider
          components={{
            img: Figure,
            // h1: (props) => <HeadingLink {...props} as="h2" />,
            // h2: (props) => <HeadingLink {...props} as="h3" />,
            // h3: (props) => <HeadingLink {...props} as="h4" />,
            // h4: (props) => <HeadingLink {...props} as="h5" />,
            // h5: (props) => <HeadingLink {...props} as="h6" />,
            // h6: (props) => <HeadingLink {...props} as="h6" />,
          }}
        >
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
