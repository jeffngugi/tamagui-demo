import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TamaguiProvider, Stack, Text } from 'tamagui'
import tamaguiConfig from './tamagui.config'

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
        {/* <MainApp /> */}
        <Stack backgroundColor='$yellowa'>
            <Text>Jeff ngugi</Text>
        </Stack>
    </TamaguiProvider>
  )
}

export default App

const styles = StyleSheet.create({})