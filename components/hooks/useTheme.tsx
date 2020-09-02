import { lightTheme, darkTheme } from '../stitches'
import { createState, useStateDesigner } from '@state-designer/react'

type ThemeName = 'light' | 'dark'

const themes: Record<ThemeName, any> = {
  light: lightTheme,
  dark: darkTheme,
}

/**
 * Controls the current theme through a global state. All `useTheme` hooks use
 * this shared state to deliver the current state to their local components.
 */
const state = createState({
  data: {
    all: ['light', 'dark'] as ThemeName[],
    current: 'light' as ThemeName,
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
    values: { theme },
  } = useStateDesigner(state)

  return { theme, setTheme, cycleTheme }
}
