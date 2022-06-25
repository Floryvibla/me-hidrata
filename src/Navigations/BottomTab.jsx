import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dashboard, Home, Profile } from '../Screens'

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { primary } from '../styles/constants/colors';

export default function BottomTab() {
  const Tab =  createBottomTabNavigator()
  const width= 80
  const left= `${(100 - width) / 2}%`

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: primary.white,
      tabBarInactiveTintColor: primary.white,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: primary.primary,
        position: "absolute",
        bottom: 10,
        borderRadius: 15,
        height: 60,
        width: `${width}%`,
        left,
      },
    }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => focused ? (
            <Entypo name="home" size={size} color={color} />
          ) : (
            <AntDesign name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          tabBarIcon: ({color, size, focused}) => focused ? (
            <Ionicons name="water" size={size} color={color} />
          ) : (
            <Ionicons name="water-outline" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({color, size, focused}) => focused ? (
            <Ionicons name="ios-person" size={size} color={color} />
          ) : (
            <Ionicons name="ios-person-outline" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}