import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TamaguiProvider, XStack, Text, Theme, Input, Button } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import Playground from './src/playground/Playground'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Demo from './src'
import { useAppThemeContext } from './src/contexts/hooks/useAppThemeContext'
import { AppThemeProvider } from './src/contexts/AppThemeProviders'
import MainApp from './src'

const App = () => {
  
  // return <Demo />
  return (

    <TamaguiProvider config={tamaguiConfig}>
      <AppThemeProvider>
        <MainApp />
        </AppThemeProvider>
    </TamaguiProvider>
  )
}

export default App
