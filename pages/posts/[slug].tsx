import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  getMdxSource,
  getPost,
  getPostLinks,
  getPostPaths,
} from "../../utils/content";
import { Post, PostListItem } from "../../types";
import { PostLayout } from "../../components/layout/post-layout";
import { Mdx } from "../../components/layout/mdx";

interface Props extends Post {
  next: PostListItem | null;
  prev: PostListItem | null;
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxPost({ mdxSource, ...rest }: Props) {
  return (
    <PostLayout {...rest}>
      <Mdx mdxSource={mdxSource} />
    </PostLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getPostPaths(), fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const slug = ctx.params?.["slug"];
  const post = getPost(slug!.toString());
  const links = getPostLinks(post);
  const mdxSource = await getMdxSource(post.content);
  return { props: { ...post, ...links, mdxSource } };
};
