import { GetStaticProps } from "next"
import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { getMdxSource, getPage, getPostList } from "../utils/content"
import { Page, PostListItem } from "../types"
import { PageLayout } from "../components/layout/page-layout"
import { Mdx } from "../components/layout/mdx"
import { PostListSmall } from "~components/layout/post-list-small"

interface Props extends Page {
  posts: PostListItem[]
  mdxSource: MDXRemoteSerializeResult
}

export default function MdxPage({ slug, data, mdxSource, posts }: Props) {
  return (
    <PageLayout slug={slug} data={data}>
      <Mdx mdxSource={mdxSource} />
      <PostListSmall posts={posts} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const page = getPage("archive")
  const mdxSource = await getMdxSource(page.content)
  const posts = getPostList()
  return { props: { ...page, posts, mdxSource } }
}
