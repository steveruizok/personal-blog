// @jsx jsx
import { jsx, Link as A } from 'theme-ui'
import Link from 'next/link'

export default function NavLinks() {
  return (
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        '& a': {
          py: [1, 3],
        },
      }}
    >
      <Link href="/">
        <A variant="nav" sx={{ cursor: 'pointer' }}>
          Home
        </A>
      </Link>
      <Link href="/about">
        <A variant="nav" sx={{ cursor: 'pointer' }}>
          About
        </A>
      </Link>
      <Link href="/archive">
        <A variant="nav" sx={{ cursor: 'pointer' }}>
          Archive
        </A>
      </Link>
    </nav>
  )
}
