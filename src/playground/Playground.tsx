import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { XStack, ScrollView } from 'tamagui'
import  CheckboxDemo  from './Checkbox'
import RadioGroupDemo from './RadioDemo'

const Playground = () => {
  return (
    <XStack flex={1}>
      {/* <CheckboxDemo /> */}
      <RadioGroupDemo />
    </XStack>
  )
}

export default Playground

const styles = StyleSheet.create({})