import {
  Alert,
  BackHandler,
  ScrollView,
  StatusBar,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native'
import React, { useEffect } from 'react'
import Login from '../Login'
import ServiceOrder from '../ServiceOrder'
import View from '../View'
import Working from '../Working'
import ServicesDetails from '../ServicesDetails'
import { Routes, Route, useLocation, useNavigate } from 'react-router-native'
import Text from '../Text'
import useAuthStorage from '../../hooks/useAuthStorage'
const index: React.FC<{
  style?: StyleProp<ViewStyle>
}> = ({ style }) => {
  const location = useLocation()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()
  useEffect(() => {
    const backAction = () => {
      location.pathname === '/'
        ? Alert.alert('Salir!', 'cerrar la aplicación?', [
            {
              text: 'No',
              onPress: () => null,
              style: 'cancel',
            },
            { text: 'Si', onPress: () => BackHandler.exitApp() },
          ])
        : navigate(-1)

      if (location.pathname === '/servicesList') authStorage.removeAccessToken()

      return true
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [location])

  return (
    <View style={[styles.container, style]}>
      {location.pathname !== '/' && location.pathname !== '/working' ? (
        <View style={styles.subHeader} color="primary">
          <Text style={styles.textLeft} color="contrast">
            Acme
          </Text>
          <Text bold style={styles.textRight} color="contrast">
            Mobile
          </Text>
        </View>
      ) : (
        <></>
      )}
      <Routes>
        <Route path="/working" element={<Login />} />
        <Route path="/" element={<Working />} />
        <Route path="/servicesList" element={<ServicesDetails />} />
        <Route path="/detailService" element={<ServiceOrder />} />
      </Routes>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  subHeader: {
    height: 120,
    paddingTop: StatusBar.currentHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLeft: {
    fontSize: 50,
    paddingLeft: 30,
  },
  textRight: {
    fontSize: 20,
    textTransform: 'uppercase',
    paddingRight: 20,
  },
})
export default index
