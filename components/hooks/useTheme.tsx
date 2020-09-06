import { useEffect } from 'react'
import { lightTheme, darkTheme } from '../theme'
import { createState, useStateDesigner } from '@state-designer/react'

type ThemeName = 'light' | 'dark'

const themes: Record<ThemeName, any> = {
  light: lightTheme,
  dark: darkTheme,
}

let initial: ThemeName = 'light'

// Get the initial theme from local storage, if there is one.
if (process.browser) {
  const local = localStorage.getItem('__ruiz_theme')
  if (!!local) {
    initial = local as ThemeName
  }
}

/**
 * Controls the current theme through a global state. All `useTheme` hooks use
 * this shared state to deliver the current state to their local components.
 */
const state = createState({
  data: {
    all: ['light', 'dark'] as ThemeName[],
    current: initial,
  },
  on: {
    SET_THEME: 'setTheme',
    CYCLED_THEME: 'cycleTheme',
  },
  actions: {
    setTheme(data, payload: ThemeName) {
      data.current = payload
    },
    cycleTheme(data) {
      const currentIndex = data.all.indexOf(data.current)
      const nextIndex = (currentIndex + 1) % data.all.length
      data.current = data.all[nextIndex]
    },
  },
  values: {
    theme(data) {
      return themes[data.current]
    },
  },
})

const setTheme = (name: ThemeName) => state.send('SET_THEME', name)
const cycleTheme = () => state.send('CYCLED_THEME')

export default function useTheme() {
  const {
    data: { current },
    values: { theme },
  } = useStateDesigner(state)

  useEffect(() => {
    document.body.className = theme
    // Store the new current theme to local storage.
    localStorage?.setItem('__ruiz_theme', current)
  }, [theme])

  return { current, theme, setTheme, cycleTheme }
}
