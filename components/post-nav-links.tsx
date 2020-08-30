// @jsx jsx
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { getNeighborPosts } from '../lib/api'

type Props = {
  slug?: Blog.Post['slug']
}

export default function PostNavLinks({ slug }: Props) {
  const { prev, next } = getNeighborPosts(slug)

  return (
    <nav
      aria-label="Previous and Next Posts"
      style={{
        padding: '1em 0',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {prev && (
        <Link href={'/' + prev.slug}>
          <a>« {prev.title}</a>
        </Link>
      )}
      {next && (
        <Link href={'/' + next.slug}>
          <a>» {next.title}</a>
        </Link>
      )}
    </nav>
  )
}
