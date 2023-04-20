import React from 'react'
import {Theme, ThemeScheme} from './theme.interface'
import * as defaulTheme from './default.theme'
import * as darkTheme from './dark.theme'
import {storage} from '../storage'

export const themes: {
  [key in NonNullable<ThemeScheme>]: Theme
} = {
  light: {
    ...defaulTheme,
  },
  dark: {
    ...defaulTheme,
    colors: darkTheme.colors,
  },
}

interface ProvidedValue {
  themeScheme: 'light' | 'dark'
  theme: Theme
  toggleTheme: () => void
}

const Context = React.createContext<ProvidedValue>({
  themeScheme: 'light',
  theme: themes.light,
  toggleTheme: () => {
    // eslint-disable-next-line no-console
    console.log('ThemeProvider is not rendered!')
  },
})

interface Props {
  initial?: 'light' | 'dark'
  children?: React.ReactNode
}

export const ThemeProvider = React.memo<Props>(props => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light')

  React.useEffect(() => {
    const getCurrentTheme = async () => {
      const themeScheme = await storage.getItem('themeScheme')
      setTheme(themeScheme ?? 'light')
    }
    getCurrentTheme()
  }, [])

  const toggleThemeCallback = React.useCallback(() => {
    setTheme(currentTheme => {
      let newTheme = currentTheme
      if (currentTheme === 'light') {
        newTheme = 'dark'
      }
      if (currentTheme === 'dark') {
        newTheme = 'light'
      }
      storage.setItem('themeScheme', newTheme)
      return newTheme
    })
  }, [])

  const memoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      themeScheme: theme,
      theme: themes[theme],
      toggleTheme: toggleThemeCallback,
    }
    return value
  }, [theme, toggleThemeCallback])

  return (
    <Context.Provider value={memoizedValue}>{props.children}</Context.Provider>
  )
})

export const useTheme = () => React.useContext(Context)

type Generator<T extends {}> = (theme: Theme) => T

export const useStyles = <T extends {}>(fun: Generator<T>) => {
  const {theme} = useTheme()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const styles = React.useMemo(() => fun(theme), [theme])
  return {styles, theme}
}
