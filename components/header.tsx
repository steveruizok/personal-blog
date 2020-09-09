import Link from 'next/link'
import { styled, Button, Grid, Box, A, Image, Heading1 } from './theme'
import LightDarkSwitch from './light-dark-switch'

const Container = styled(Grid, {
  mt: 0,
  mb: '$5',
  gridTemplateColumns: '1fr repeat(4, auto)',
  gridGap: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  font: '$ui',
  mr: '-$0',
  sm: {
    mt: '$2',
    mr: '-$1',
  },
})

const Icon = styled(Box, {
  height: 32,
  width: 32,
  my: '$1',
  backgroundColor: '$text',
  '&:hover': {
    animation: 'forwards .2s rotate',
  },
})

const HeaderLink = styled('a', {
  cursor: 'pointer',
  fontFamily: '$ui',
  fontSize: '$ui',
  borderRadius: 4,
  textDecoration: 'none',
  transition: 'background-color .16s',
  bg: '$background',
  p: '$1',
  sm: {
    '&:hover': {
      bg: '$hover',
    },
  },
})

export default function Header() {
  return (
    <Container>
      <A href="/">
        <Icon />
      </A>
      <Link href="/">
        <HeaderLink>Home</HeaderLink>
      </Link>
      <Link href="/about">
        <HeaderLink>About</HeaderLink>
      </Link>
      <Link href="/archive">
        <HeaderLink>Archive</HeaderLink>
      </Link>
      <LightDarkSwitch />
    </Container>
  )
}
