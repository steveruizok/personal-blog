import { NextPageContext } from "next"
import { getAllPosts } from "../lib/api"

export default function RSS() {}

RSS.getInitialProps = async ({ res }) => {
  if (!res) {
    return
  }
  res.setHeader("Content-Type", "text/xml")
  res.write(getRssXml(getAllPosts()))
  res.end()
}

const getRssXml = (blogPosts: Blog.Post[]) => {
  const { rssItemsXml, latestPostDate } = blogPostsRssXml(blogPosts)
  return `<?xml version="1.0" ?>
  <rss version="2.0">
    <channel>
        <title>Blog by Steve Ruiz</title>
        <link>https://www.steveruiz.me</link>
        <description>Writing about design, code, and creative tools.</description>
        <language>en</language>
        <lastBuildDate>${latestPostDate}</lastBuildDate>
        ${rssItemsXml}
    </channel>
  </rss>`
}

const blogPostsRssXml = (blogPosts: Blog.Post[]) => {
  let latestPostDate: string = ""
  let rssItemsXml = ""
  blogPosts.forEach((post) => {
    if (!latestPostDate || post.date > latestPostDate) {
      latestPostDate = post.date
    }

    rssItemsXml += `
      <item>
        <title>${post.title}</title>
        <link> https://www.steveruiz.me${post.slug}</link>

        <pubDate>${new Date(post.date).toLocaleDateString()}</pubDate>
        <description>
        <![CDATA[${post.description}]]>
        </description>
    </item>`
  })
  return {
    rssItemsXml,
    latestPostDate,
  }
}
