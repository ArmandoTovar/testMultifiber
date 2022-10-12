import { Credentials, DataApi } from '../utils/types'
import useAuthStorage from './useAuthStorage'
import Constants from 'expo-constants'

export const useAuth = () => {
  const authStorage = useAuthStorage()
  const signIn = async ({ username, password }: Credentials) => {
    const credentials = { username, password }
    console.log(credentials)
    console.log(Constants?.manifest?.extra?.apiuri)
    const response = await fetch(Constants?.manifest?.extra?.apiuri, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    const data = await response.json()
    if (data.token) {
      await authStorage.setAccessToken(data.token)
    } else {
      throw Error('datos incorrectos')
    }
  }
  return [signIn]
}
