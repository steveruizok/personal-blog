import { getAllPosts } from '../lib/api'
import SecondaryPostLink from './secondary-post-link'

export default function ArchiveList() {
  const posts = getAllPosts()

  return (
    <>
      {posts.map((page) => (
        <SecondaryPostLink key={page.__resourcePath} {...page} />
      ))}
    </>
  )
}
