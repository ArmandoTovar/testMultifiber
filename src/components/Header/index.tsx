import { StatusBar } from 'expo-status-bar'
import React from 'react'
import themes from '../../utils/themes'
export default function index() {
  return <StatusBar backgroundColor={themes.color.primary} style={'light'} />
}
