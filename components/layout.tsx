import { Divider } from './stitches'
import NavLinks from './nav-links'
import Footer from './footer'
import Head from 'next/head'
import { Heading1 } from '../components/stitches'

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
        <NavLinks />
        <Heading1>{title}</Heading1>
      </header>
      <main>{children}</main>
      <Divider css={{ mt: '$6' }} />
      <Footer />
    </>
  )
}
