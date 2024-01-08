import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Checkbox, Input, Paragraph, RadioGroup, Separator, Switch, Theme, XStack, YStack } from 'tamagui'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useAppThemeContext } from './contexts/hooks/useAppThemeContext'
import CheckboxDemo from './playground/Checkbox'
import { X, Undo } from '@tamagui/lucide-icons'

const MainApp = () => {
  const {theme, setTheme} = useAppThemeContext()
  const [checked, setChecked] = useState(false)
  const isDarkMode = theme === 'dark'
  const handleToggle = () => {
    if(isDarkMode){
      setTheme('light')
    }else{
      setTheme('dark')
    }
  }

  const handleSave = () => {
    console.log("This will save Tamagui")
  }

  return (
    <Theme name={theme}>
        <SafeAreaProvider>
          <SafeAreaView style={{flex:1}}>
        <XStack f={1} backgroundColor='$background' paddingHorizontal={100} justifyContent='space-between' alignItems='center'>
        <YStack>
        
      <Button color={'$color.textDark'} padding={10} borderRadius={'$space.base'} backgroundColor={'$color.danger'} onPress={() => {}}>
      <Text>SSO</Text>
      </Button>
    </YStack>
    <Button
          borderColor='$accentDark'
          onPress={handleSave}
         
          
        >
          settings.app.save
        </Button>
              <Switch
          native
          checked={isDarkMode}
          onCheckedChange={handleToggle}
        />
        {/* <Paragraph fontSize={'$2'}>This is a tamagui Paragraph</Paragraph> */}
        {/* <Checkbox size={'$height'} checked={checked} onCheckedChange={()=>setChecked(!checked)} /> */}
        <RadioGroup
             native
              value={'sdsd'}
              onValueChange={() => console.log('first')}
            >
              <RadioGroup.Item id={'2323'} value={'2323'}>
                <RadioGroup.Indicator />
              </RadioGroup.Item>
            </RadioGroup>
            <Text> Geoffrey</Text>
            
        </XStack>
        
        </SafeAreaView>
        </SafeAreaProvider>
        </Theme>
  )
}

export default MainApp

const styles = StyleSheet.create({})