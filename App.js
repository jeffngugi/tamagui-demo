import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TamaguiProvider, XStack, Text, Theme, Input, Button } from 'tamagui'
import tamaguiConfig from './tamagui.config'
import Playground from './src/playground/Playground'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


const App = () => {
  return (
    // <SafeAreaView>
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name='dark'>
        <SafeAreaProvider>
          <SafeAreaView style={{flex:1}}>
        <XStack f={1} backgroundColor='$background' >
        <Playground />
            {/* <Text>Jeff ngugi</Text>
            <Input height='$height' borderRadius={5} borderWidth={1} />
            <Button size={'$height'} onPress={()=>console.log("First tamagui button")}>Ngugii</Button>
            <Input height='$height' borderRadius={5} borderWidth={1} /> */}
        </XStack>
        </SafeAreaView>
        </SafeAreaProvider>
        </Theme>
    </TamaguiProvider>
  )
}

export default App

const styles = StyleSheet.create({})