import { getAllPosts } from '../lib/api'
import PostLink from './post-link'

export default function ArchiveList() {
  const posts = getAllPosts()

  return (
    <>
      {posts.map((page) => (
        <PostLink key={page.__resourcePath} {...page} />
      ))}
    </>
  )
}
