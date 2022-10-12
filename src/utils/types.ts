import { Float, Int32 } from 'react-native/Libraries/Types/CodegenTypes'

export interface Auth {
  username: string
  password: string
}
export interface DataApi {
  token: String
}
export interface Credentials {
  username: String
  password: String
}

export interface NabvarElement {
  text: String
  icon: String
}

export interface Service {
  count: Int32
  description: String
  type: String
  price: Float
}
export interface generalOrder {
  title: String
  navigateUri: String
  code: String
}
