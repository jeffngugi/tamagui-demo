import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import SideOne from './playground/SideOne'
import Side2 from './playground/Side2'

const Dashboard = () => {
  return (
    <View>
      <SideOne />
      <Side2 />
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})