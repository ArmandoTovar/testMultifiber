import { View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import useInputText from '../../hooks/useInputText'
import InputText from '../InputText'
import Button from '../Button'
const Logo = require('../../../assets/logo.png')
import { useNavigate } from 'react-router-native'
import { useAuth } from '../../hooks/useAuth'
import { Log } from '../../utils/Logger'
import Text from '../Text'
export default function LoginForm() {
  const loginName = useInputText()
  const password = useInputText()
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [signIn] = useAuth()
  const onSubmit = async () => {
    if (loginName.value && password.value) {
      try {
        await signIn({
          username: loginName.value,
          password: password.value,
        })
        navigate('/servicesList')
      } catch (e) {
        if (e instanceof Error) setMessage(e.message)
      }
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={Logo} />
      <InputText placeholder="loginName" {...loginName} />
      <InputText placeholder="password" secureTextEntry {...password} />
      <Button
        textSize="title"
        size="big"
        border
        textColor="contrast"
        onPress={onSubmit}
      >
        Login
      </Button>
      <Text color="invalid">{message}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
  },
  image: {
    height: 50,
    aspectRatio: 4 / 1,
    marginBottom: 30,
    marginTop: 100,
  },
})
