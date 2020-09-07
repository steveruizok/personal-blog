import { Divider } from './theme'
import Footer from './footer'
import Head from 'next/head'
import Header from './header'

type Props = Pick<Blog.Post, 'keywords' | 'description' | 'title'> & {
  children: React.ReactNode
}

export default function Layout({
  keywords = '',
  description = '',
  title = '',
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{`${title} - Steve Ruiz` || 'Steve Ruiz'}</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Steve Ruiz" key="title" />
        <meta property="og:type" content="website" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Header />
      </header>
      {children}
      <Divider css={{ mt: '$6' }} />
      <Footer />
    </>
  )
}
