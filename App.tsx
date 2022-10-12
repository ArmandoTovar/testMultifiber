import Main from './src/Main'
import { NativeRouter } from 'react-router-native'
import AuthStorage from './src/utils/authStorage'
import AuthStorageContext from './src/context/AuthStorageContext'
const authStorage = new AuthStorage()

export default function App() {
  return (
    <NativeRouter>
      <AuthStorageContext.Provider value={authStorage}>
        <Main />
      </AuthStorageContext.Provider>
    </NativeRouter>
  )
}
