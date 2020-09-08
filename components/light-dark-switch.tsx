import { styled, Button, Grid, Box, A, Image, Heading1 } from './theme'
import useTheme from '../components/hooks/useTheme'
import NoSSR from 'react-no-ssr'
import { Sun, Moon } from 'react-feather'
import RotatingIcon from './rotating-icon'

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

export default function LightDarkSwitch() {
  const { current, cycleTheme } = useTheme()

  const index = current === 'light' ? 0 : 1

  return (
    <IconButton onClick={cycleTheme}>
      <NoSSR>
        <RotatingIcon
          current={index}
          states={{ light: <Sun />, dark: <Moon /> }}
        />
      </NoSSR>
    </IconButton>
  )
}
