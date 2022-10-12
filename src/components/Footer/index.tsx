import React from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { useLocation } from 'react-router-native'
import { NabvarElement } from '../../utils/types'
import NavBar from '../NavBar'
import Text from '../Text'
import View from '../View'

const temp: NabvarElement[] = [
  { text: 'service order', icon: 'receipt' },
  { text: 'workingDay', icon: 'layers' },
]
const index: React.FC<{
  style?: StyleProp<ViewStyle>
}> = ({ style }) => {
  const location = useLocation()
  return (
    <View color="primary" style={[styles.container, style]}>
      {location.pathname === '/' ? (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5,
            marginHorizontal: 10,
          }}
        >
          <Text size="title" color="contrast" bold>
            V 0.0.1
          </Text>
          <Text size="title" color="contrast" bold>
            Connected
          </Text>
        </View>
      ) : (
        <View style={styles.container}>
          <NavBar items={temp} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
})

export default index
