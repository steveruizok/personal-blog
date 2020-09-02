import { Nav, Heading3, Box, Text, A } from './stitches'
import Link from 'next/link'
import { getNeighborPosts } from '../lib/api'

type Props = {
  slug?: Blog.Post['slug']
}

export default function PostNavLinks({ slug }: Props) {
  const { prev, next } = getNeighborPosts(slug)

  return (
    <Nav
      aria-label="Previous and Next Posts"
      css={{
        my: '$5',
        width: '100%',
        padding: '1em 0',
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
      }}
    >
      {prev && (
        <Link href={'/' + prev.slug}>
          <Box
            css={{
              gridColumn: 1,
              cursor: 'pointer',
              '&:hover': { bg: '$gray200' },
              m: '-$3',
              p: '$3',
              borderRadius: 4,
            }}
          >
            <Text type="ui">« Prev</Text>
            <A>
              <Heading3>{prev.title}</Heading3>
            </A>
          </Box>
        </Link>
      )}
      {next && (
        <Link href={'/' + next.slug}>
          <Box
            css={{
              gridColumn: 3,
              textAlign: 'right',
              cursor: 'pointer',
              '&:hover': { bg: '$gray200' },
              m: '-$3',
              p: '$3',
              borderRadius: 4,
            }}
          >
            <Text type="ui">Next »</Text>
            <A>
              <Heading3>{next.title}</Heading3>
            </A>
          </Box>
        </Link>
      )}
    </Nav>
  )
}
