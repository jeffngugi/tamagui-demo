import React, { useState } from 'react'

import { AppThemeContext } from './AppThemeContext'

type Props = {
    children: React.ReactNode
}

export const AppThemeProvider = ({children}: Props) =>{
    const [theme, setTheme] = useState<'light'| 'dark'>('light')

    const value = {theme, setTheme}

    return <AppThemeContext.Provider value={value}>{children}</AppThemeContext.Provider>
}