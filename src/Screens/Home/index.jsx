import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import { Area } from './styles'

export function Home() {
    const { title } = useSelector(state => state.others)
  return (
    <Area>
      <Header />
    </Area>
  )
}