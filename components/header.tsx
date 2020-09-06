import Link from 'next/link'
import NoSSR from 'react-no-ssr'
import { styled, Button, Grid, Box, A, Image, Heading1 } from './theme'
import useTheme from '../components/hooks/useTheme'
import { Sun, Moon } from 'react-feather'
import RotatingIcon from './rotating-icon'

const Container = styled(Grid, {
  mt: '$3',
  mb: '$5',
  gridTemplateColumns: '1fr repeat(4, auto)',
  gridGap: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  font: '$ui',
  mr: '-$0',
  sm: {
    mr: '-$1',
  },
})

const Icon = styled(Box, {
  height: 32,
  width: 32,
  my: '$1',
  backgroundColor: '$text',
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

const IconButton = styled(Button, {
  p: 0,
  display: 'flex',
  alignItems: 'center',
  color: '$text',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  borderRadius: 4,
  sm: {
    '&:hover': {
      bg: '$hover',
    },
  },
})

export default function Header() {
  const { current, cycleTheme } = useTheme()

  const index = current === 'light' ? 0 : 1

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
      <IconButton onClick={cycleTheme}>
        <NoSSR>
          <RotatingIcon
            current={index}
            states={{ light: <Sun />, dark: <Moon /> }}
          />
        </NoSSR>
      </IconButton>
    </Container>
  )
}
