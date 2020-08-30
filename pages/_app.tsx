// @jsx jsx
import { jsx, ThemeProvider, Image, Container } from 'theme-ui'
import Link from 'next/link'
import { MDXProvider } from '@mdx-js/react'
import { Global } from '@emotion/core'
import theme from '../components/theme'

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
            img: (props: { src: string; alt: string }) => (
              <Link href={props.src}>
                <Image {...props} />
              </Link>
            ),
          }}
        >
          <Component {...pageProps} />
        </MDXProvider>
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
