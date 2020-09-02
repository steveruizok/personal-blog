// @jsx jsx
import { jsx, Box, Text, Link as A } from 'theme-ui'
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
      sx={{
        my: 5,
        width: '100%',
        padding: '1em 0',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
      }}
    >
      {prev && (
        <Link href={'/' + prev.slug}>
          <Box
            sx={{
              gridColumn: 1,
              cursor: 'pointer',
              '&:hover': { bg: 'muted' },
              m: -2,
              p: 2,
              borderRadius: 4,
            }}
          >
            <Text variant="textStyles.ui">« Prev</Text>
            <A>{prev.title}</A>
          </Box>
        </Link>
      )}
      {next && (
        <Link href={'/' + next.slug}>
          <Box
            sx={{
              gridColumn: 3,
              textAlign: 'right',
              cursor: 'pointer',
              '&:hover': { bg: 'muted' },
              m: -2,
              p: 2,
              borderRadius: 4,
            }}
          >
            <Text variant="textStyles.ui">Next »</Text>
            <A>{next.title}</A>
          </Box>
        </Link>
      )}
    </nav>
  )
}
