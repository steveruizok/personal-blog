import { GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { getMdxSource, getPage } from "../utils/content";
import { Page } from "../types";
import { PageLayout } from "../components/layout/page-layout";
import { Mdx } from "../components/layout/mdx";

interface Props extends Page {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MdxPage({ slug, data, mdxSource }: Props) {
  return (
    <PageLayout slug={slug} data={data}>
      <Mdx mdxSource={mdxSource} />
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const page = getPage("about");
  const mdxSource = await getMdxSource(page.content);
  return { props: { ...page, mdxSource } };
};
