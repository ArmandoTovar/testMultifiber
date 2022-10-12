import {
  StyleProp,
  StyleSheet,
  View as Nativeview,
  ViewStyle,
} from 'react-native'
import React from 'react'
import themes from '../utils/themes'

const View: React.FC<{
  children?: React.ReactNode
  size?: string
  color?: 'primary' | 'secundary' | 'contrast' | 'tertiary'
  style?: StyleProp<ViewStyle>
}> = ({ size, color, style, children, ...props }) => {
  const viewStyle = [
    color === 'tertiary' && styles.viewTertiaryColor,
    color === 'primary' && styles.viewPrimaryColor,
    color === 'secundary' && styles.viewSecundaryColor,
    color === 'contrast' && styles.viewContrastColor,
    style,
  ]
  return (
    <Nativeview style={viewStyle} {...props}>
      {children}
    </Nativeview>
  )
}
const styles = StyleSheet.create({
  viewPrimaryColor: {
    backgroundColor: themes.color.primary,
  },
  viewSecundaryColor: {
    backgroundColor: themes.color.secundary,
  },
  viewContrastColor: {
    backgroundColor: themes.color.white,
  },
  viewTertiaryColor: {
    backgroundColor: themes.color.third,
  },
})

export default View
