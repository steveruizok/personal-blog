import useTheme, { themes, ThemeName } from "../components/hooks/useTheme"
import NoSSR from "react-no-ssr"
import { Sun, Moon, CloudRain } from "react-feather"
import RotatingIcons from "./rotating-icons"

export default function LightDarkSwitch() {
  const { current, cycleTheme } = useTheme()

  const index = Object.keys(themes).indexOf(current)

  return (
    <NoSSR>
      <RotatingIcons current={index} onClick={cycleTheme}>
        <Sun />
        <CloudRain />
        <Moon />
      </RotatingIcons>
    </NoSSR>
  )
}
