import { getPostBySlug } from "../../../lib/api"

export default async (req, res) => {
  const {
    query: { slug },
  } = req

  const post = getPostBySlug("/posts/" + slug)

  if (post) {
    const d = await fetch("https://localhost:3000/" + post.__resourcePath)
    res.statusCode = 200
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ post }))
  } else {
    res.statusCode = 404
    res.setHeader("Content-Type", "application/json")
    res.end(JSON.stringify({ post: undefined }))
  }
}
