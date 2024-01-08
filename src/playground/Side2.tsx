import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { DashboardContext } from '../contexts/DashboardContext'

const Side2 = () => {
    const user = useContext(DashboardContext)
  return (
    <View>
      <Text>{user.isSubscribed.toString()}</Text>
    </View>
  )
}

export default Side2

const styles = StyleSheet.create({})