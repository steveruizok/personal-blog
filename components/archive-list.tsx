// @jsx jsx
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { getAllPosts } from '../lib/api'
import PostLink from './post-link'

export default function ArchiveList({ postCount = 10 }) {
  const posts = getAllPosts()

  return (
    <>
      {posts.map((page) => (
        <PostLink key={page.__resourcePath} {...page} />
      ))}
    </>
  )
}
