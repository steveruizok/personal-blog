import * as React from "react"
import { useTheme } from "next-themes"
import { Sun, Moon, CloudRain } from "react-feather"
import { RotatingIcons } from "./rotating-icons"

const themes = ["light", "dark", "dim"]

export function ThemeSwitch() {
  const { theme = "light", setTheme } = useTheme()

  const index = themes.indexOf(theme)

  const cycleTheme = React.useCallback(() => {
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }, [theme, setTheme])

  return (
    <RotatingIcons current={index} onClick={cycleTheme}>
      <Sun />
      <CloudRain />
      <Moon />
    </RotatingIcons>
  )
}
