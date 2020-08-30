// @jsx jsx
import { jsx } from 'theme-ui'
import Link from 'next/link'
import usePagination from './hooks/usePagination'
import { getAllPosts } from '../lib/api'

export default function PostList({ postCount = 10 }) {
  const posts = getAllPosts()
  const { current, pageForward, pageBackward } = usePagination(posts, postCount)

  return (
    <>
      <ul>
        {current.map((page) => (
          <li key={page.__resourcePath}>
            <Link href={'/' + page.slug}>
              <a>{page.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {posts.length > postCount && (
        <div style={{ display: 'flex', gap: 8 }}>
          <button disabled={!pageBackward} onClick={pageBackward}>
            Earlier
          </button>
          <button disabled={!pageForward} onClick={pageForward}>
            Later
          </button>
        </div>
      )}
    </>
  )
}
