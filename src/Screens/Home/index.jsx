import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'

export function Home() {
    const { title } = useSelector(state => state.others)
  return (
    <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>
      <Text>{title}</Text>
    </View>
  )
}