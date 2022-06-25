import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dashboard, Home, Profile } from '../Screens'

export default function BottomTab() {
  const Tab =  createBottomTabNavigator()
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }}>
      <Tab.Screen
        name='Home'
        component={Home}
      />
      <Tab.Screen
        name='Dashboard'
        component={Dashboard}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
      />
    </Tab.Navigator>
  )
}