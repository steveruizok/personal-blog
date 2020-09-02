import { Nav, A } from './stitches'
import Link from 'next/link'

export default function NavLinks() {
  return (
    <Nav
      aria-label="Pages"
      css={{
        display: 'flex',
        alignItems: 'center',
        gap: '$3',
      }}
    >
      <Link href="/">
        <A type="nav">Home</A>
      </Link>
      <Link href="/about">
        <A type="nav">About</A>
      </Link>
      <Link href="/archive">
        <A type="nav">Archive</A>
      </Link>
    </Nav>
  )
}
