import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  useUserContext } from '../contexts/DashboardContext'

const SideOne = () => {
    const user = useUserContext()
  return (
    <View>
      <Text>{user.name}</Text>
    </View>
  )
}

export default SideOne

const styles = StyleSheet.create({})