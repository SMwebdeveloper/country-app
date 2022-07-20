import { ThemeContext } from '../context/useThemeContext'
import { useContext } from 'react'

export const useTheme = () => {
    const context = useContext(ThemeContext)

    return context
}