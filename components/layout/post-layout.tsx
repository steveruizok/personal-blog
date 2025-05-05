import React from "react";
import { Post, PostListItem } from "../../types";
import { Layout } from "./layout";
import Link from "next/link";
import Image from "next/image";
import { PostLinks } from "./post-links";
import { Footer } from "./footer";
import Head from "next/head";
import { GhostLink } from "~components/ghost-link";
import { Text } from "~components/text";
import { AuthorLink } from "~components/author-link";
import { styled } from "~stitches.config";

interface LayoutProps extends Omit<Post, "content"> {
  next: PostListItem | null;
  prev: PostListItem | null;
  children: React.ReactNode;
}

export function PostLayout({
  data,
  date,
  slug,
  next,
  prev,
  children,
}: LayoutProps) {
  return (
    <Layout>
      <Head>
        <title>{data.title} - Steve Ruiz</title>
        <meta charSet="utf-8" />
        <meta property="og:title" content="Steve Ruiz" key="title" />
        <meta property="og:type" content="website" />
        <meta name="description" content={data.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@steveruizok" />
        <meta name="twitter:creator" content="@steveruizok" />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:site" content="@steveruizok" />
        <meta name="twitter:url" content="https://www.steveruiz.me" />
        <meta
          name="twitter:image"
          content={"http://www.steveruiz.me" + data.hero}
        />
        <meta name="twitter:creator" content="@steveruizok" />
        <meta name="twitter:description" content={data.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={data.title} />
        <meta property="og:site_name" content={data.title} />
        <meta property="og:url" content="https://www.steveruiz.me" />
        <meta
          property="og:image"
          content={"http://www.steveruiz.me" + data.hero}
        />
      </Head>
      <article>
        <PostHeader>
          <Link href={"/posts/" + slug} passHref>
            <GhostLink>
              <h1>{data.title}</h1>
            </GhostLink>
          </Link>
          <time dateTime={data.date}>{data.date}</time>
        </PostHeader>
        {data.hero && (
          <Image
            src={data.hero}
            alt={data.title}
            title={data.title}
            width={720}
            height={400}
            layout="intrinsic"
            objectFit="cover"
          />
        )}
        <main>{children}</main>
      </article>
      <PostLinks next={next} prev={prev} />
      <Footer />
    </Layout>
  );
}

const PostHeader = styled("header", {
  mb: "$4",
  date: {
    mb: "$4",
    fontSize: "$0",
  },
});
