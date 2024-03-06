/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect, createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import themeConfig from 'src/themes/theme'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const isDarkTheme = theme === 'dark'

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark'
    setTheme(updatedTheme)
    localStorage.setItem('theme', updatedTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setTheme(savedTheme)
    } else if (prefersDark) {
      setTheme('dark')
    }
  }, [])

  const value = {
    toggleTheme,
    theme,
    isDarkTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider
        theme={isDarkTheme ? themeConfig.dark : themeConfig.light}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useThemeContext = () => useContext(ThemeContext)
