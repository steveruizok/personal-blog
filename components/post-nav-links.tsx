import { styled, Nav, Heading3, BoxLink, Text, A } from './theme'
import Link from 'next/link'
import { getNeighborPosts } from '../lib/api'

type Props = {
  slug?: Blog.Post['slug']
}

const Container = styled(Nav, {
  my: '$3',
  width: '100%',
  padding: '1em 0',
  display: 'grid',
  gridTemplateColumns: 'auto minmax(48px, 1fr) auto',
})

export default function PostNavLinks({ slug }: Props) {
  const { prev, next } = getNeighborPosts(slug)

  return (
    <Container aria-label="Previous and Next Posts">
      {prev && (
        <PostNavLink href={prev.slug} direction="prev">
          {prev.title}
        </PostNavLink>
      )}
      {next && (
        <PostNavLink href={next.slug} direction="next">
          {next.title}
        </PostNavLink>
      )}
    </Container>
  )
}

function PostNavLink({
  href,
  direction,
  children,
}: {
  href: string
  direction: 'prev' | 'next'
  children: React.ReactNode
}) {
  return (
    <Link href={href}>
      <BoxLink
        href={href}
        style={{
          maxWidth: 400,
          height: 'fit-content',
          gridColumn: direction === 'prev' ? 1 : 3,
          textAlign: direction === 'prev' ? 'left' : 'right',
        }}
      >
        <Text variant="ui">{direction === 'prev' ? '« Prev' : 'Next »'}</Text>
        <Heading3>{children}</Heading3>
      </BoxLink>
    </Link>
  )
}
