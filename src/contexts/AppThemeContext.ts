import { Dispatch, SetStateAction, createContext } from 'react';


export interface AppTheme {
    theme: 'dark' | 'light'
    setTheme: Dispatch<SetStateAction<"light" | "dark">>
}

export const AppThemeContext = createContext<AppTheme | null>(null)

