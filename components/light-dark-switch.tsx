import { styled, Button } from './theme'
import useTheme, { themes, ThemeName } from '../components/hooks/useTheme'
import NoSSR from 'react-no-ssr'
import { Sun, Moon, CloudRain } from 'react-feather'
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

  const index = Object.keys(themes).indexOf(current)

  return (
    <IconButton onClick={cycleTheme}>
      <NoSSR>
        <RotatingIcon
          current={index}
          states={{ light: <Sun />, dim: <CloudRain />, dark: <Moon /> }}
        />
      </NoSSR>
    </IconButton>
  )
}
