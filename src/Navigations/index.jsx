import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './BottomTab'

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" barStyle='light-content' />
      <BottomTab />
    </NavigationContainer>
  )
}

export default AppNavigation