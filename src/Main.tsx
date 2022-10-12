import { Dimensions, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-native'
import useAuthStorage from './hooks/useAuthStorage'
export default function Main() {
  const navigate = useNavigate()
  const authStorage = useAuthStorage()
  useEffect(() => {
    const token = authStorage.getAccessToken()
    if (typeof token === 'object') {
      navigate('/')
    } else {
      navigate('/servicesList')
    }
  }, [])

  return (
    <SafeAreaView>
      <Header />

      <Body style={styles.body} />

      <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  body: {
    height:
      StatusBar.currentHeight &&
      Dimensions.get('screen').height - StatusBar.currentHeight,
  },
})
