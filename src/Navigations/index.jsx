import React from 'react'
import { View, Dimensions, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './BottomTab'

const AppNavigation = () => {
  const colors = {
    backgroundColor: "#fff"
  }
  
  return (
    <NavigationContainer theme={{colors}}>
      <StatusBar backgroundColor="black" barStyle='light-content' />
      <BottomTab />
    </NavigationContainer>
  )
}

export default AppNavigation