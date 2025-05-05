import React from "react";
import Head from "next/head";
import { Page } from "~types";
import { Layout } from "./layout";
import { Footer } from "./footer";

interface LayoutProps extends Omit<Page, "content"> {
  children: React.ReactNode;
}

export function PageLayout({ data, children }: LayoutProps) {
  return (
    <Layout>
      <Head>
        <title>
          {data.title ? `${data.title} - Steve Ruiz` : "Steve Ruiz"}
        </title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Steve Ruiz" key="title" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@steveruizok" />
        <meta name="twitter:creator" content="@steveruizok" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:site" content="@steveruizok" />
        <meta name="twitter:url" content="https://www.steveruiz.me" />
        <meta name="twitter:creator" content="@steveruizok" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.title} />
        <meta property="og:site_name" content={data.title} />
        <meta property="og:url" content="https://www.steveruiz.me" />
      </Head>
      <h1>{data.title}</h1>
      <div>{children}</div>
      <Footer />
    </Layout>
  );
}
