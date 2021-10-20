import { GetStaticProps } from "next"
import { MDXRemoteSerializeResult } from "next-mdx-remote"
import { getMdxSource, getPage, getPostList } from "../utils/content"
import { Page, PostListItem } from "../types"
import { PageLayout } from "../components/layout/page-layout"
import { PostList } from "../components/layout/post-list"
import { Mdx } from "../components/layout/mdx"

interface Props extends Page {
  posts: PostListItem[]
  mdxSource: MDXRemoteSerializeResult
}

export default function MdxPage({ slug, data, mdxSource, posts }: Props) {
  return (
    <PageLayout slug={slug} data={data}>
      <Mdx mdxSource={mdxSource} />
      <PostList posts={posts} />
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (ctx) => {
  const page = getPage("index")
  const mdxSource = await getMdxSource(page.content)
  const posts = getPostList().slice(0, 5)
  return { props: { ...page, posts, mdxSource } }
}
