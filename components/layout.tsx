import { Divider } from "./theme"
import Footer from "./footer"
import Head from "next/head"
import Header from "./header"

type Props = Pick<Blog.Post, "keywords" | "description" | "title" | "hero"> & {
  children: React.ReactNode
}

export default function Layout({
  keywords = "",
  description = "",
  title,
  hero,
  children,
}: Props) {
  return (
    <>
      <Head>
        <title>{title ? `${title} - Steve Ruiz` : "Steve Ruiz"}</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Steve Ruiz" key="title" />
        <meta property="og:type" content="website" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@steveruizok" />
        <meta name="twitter:creator" content="@steveruizok" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@steveruizok" />
        <meta name="twitter:url" content="https://www.steveruiz.me" />
        <meta name="twitter:image" content={"http://www.steveruiz.me" + hero} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="@steveruizok" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:url" content="https://www.steveruiz.me" />
        <meta property="og:image" content={"http://www.steveruiz.me" + hero} />
      </Head>
      <header>
        <Header />
      </header>
      {children}
      <Divider css={{ mt: "$6" }} />
      <Footer />
    </>
  )
}
