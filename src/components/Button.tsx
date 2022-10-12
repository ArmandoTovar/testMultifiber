import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native'
import React from 'react'
import Text from './Text'
import themes from '../utils/themes'
import View from './View'

const Button: React.FC<
  {
    border?: boolean
    size?: 'small' | 'mid' | 'big'
    textSize?: 'title' | 'subtitle' | 'parag'
    background?: 'primary' | 'transparent'
    borderColor?: 'primary' | 'trasparent'
    textColor?: 'primary' | 'secundary' | 'contrast'
    children: React.ReactNode
  } & TouchableOpacityProps
> = ({
  size = 'small',
  border,
  textColor,
  textSize = 'parag',
  background = 'primary',
  borderColor = 'primary',
  style,
  children,
  ...props
}) => {
  const styleButton = [
    styles.container,
    border && styles.Radius,
    size == 'small' && styles.sizeSmall,
    size == 'mid' && styles.sizeMid,
    size == 'big' && styles.sizeBig,
    background == 'primary' && styles.BackgroundPrimary,
    borderColor == 'primary' && styles.BorderColor,
    style,
  ]

  return (
    <TouchableOpacity {...props}>
      <View style={styleButton}>
        <Text size={textSize} color={textColor} style={styles.Text}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  Text: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  Radius: {
    borderRadius: 5,
  },
  BackgroundPrimary: {
    backgroundColor: themes.color.primary,
  },
  BorderColor: {
    borderColor: themes.color.primary,
  },
  sizeSmall: {
    width: 'auto',
    height: 'auto',
  },
  sizeMid: {
    width: 100,
    padding: 10,
  },
  sizeBig: {
    width: 200,
    padding: 10,
  },
})
export default Button
