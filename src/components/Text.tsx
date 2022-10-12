import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextProps,
  TextStyle,
} from 'react-native'
import React from 'react'
import themes from '../utils/themes'

const Text: React.FC<
  {
    children: React.ReactNode
    style?: StyleProp<Text>
    bold?: boolean
    size?: 'title' | 'subtitle' | 'parag'
    color?: 'primary' | 'secundary' | 'contrast' | 'invalid'
  } & TextProps
> = ({ bold, size, color, style, children, ...props }) => {
  const textStyle = [
    styles.text,
    bold && styles.Bold,
    size === 'title' && styles.textSizeTitle,
    size === 'subtitle' && styles.textSizeSubTitle,
    size === 'parag' && styles.textSizeParag,
    color === 'primary' && styles.textPrimaryColor,
    color === 'secundary' && styles.textSecundaryColor,
    color === 'contrast' && styles.textContrastColor,
    color === 'invalid' && styles.textInvalidColor,
    style,
  ]
  return (
    <NativeText style={textStyle} {...props}>
      {children}
    </NativeText>
  )
}
const styles = StyleSheet.create({
  text: {
    textAlignVertical: 'center',
  },
  textPrimaryColor: {
    color: themes.color.primary,
  },
  textSecundaryColor: {
    color: themes.color.secundary,
  },
  textContrastColor: {
    color: themes.color.white,
  },
  textInvalidColor: {
    color: themes.color.invalid,
  },
  Bold: {
    fontWeight: 'bold',
  },
  textSizeTitle: {
    fontSize: themes.text.sizeTitle,
  },
  textSizeSubTitle: {
    fontSize: themes.text.sizeSubTitle,
  },
  textSizeParag: {
    fontSize: themes.text.sizeParag,
  },
})

export default Text
