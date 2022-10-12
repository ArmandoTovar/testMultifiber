import {
  TextInput,
  StyleSheet,
  TextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native'
import React from 'react'
import themes from '../utils/themes'

const InputText: React.FC<
  {
    number?: boolean
    children?: React.ReactNode
    style?: StyleProp<TextStyle>
  } & TextInputProps
> = ({ style, children, number = false, ...props }) => {
  const inputStyle = [styles.input, style]
  return (
    <TextInput
      keyboardType={number ? 'decimal-pad' : 'ascii-capable'}
      style={inputStyle}
      {...props}
    >
      {children}
    </TextInput>
  )
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: themes.color.secundary,
    borderBottomWidth: 1,
    textAlign: 'center',
    margin: 5,
    fontSize: themes.text.sizeSubTitle,
    minWidth: 200,
  },
})
export default InputText
