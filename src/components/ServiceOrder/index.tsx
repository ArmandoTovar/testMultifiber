import { Result } from '@ant-design/react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Service as TypeService } from '../../utils/types'
import Text from '../Text'

import View from '../View'
import Service from './Service'
const data: TypeService[] = [
  {
    count: 4,
    description: 'Servicio de repacion de caucho',
    type: 'Continuo',
    price: 2500,
  },
  {
    count: 4,
    description: 'Servicio de repacion de caucho',
    type: 'Continuo',
    price: 2500,
  },
  {
    count: 4,
    description: 'Servicio de repacion de caucho',
    type: 'Continuo',
    price: 2500,
  },
]
export default function index() {
  return (
    <View>
      <Result
        imgUrl={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
        }}
        title="Simon Diaz"
        message="Urb. San Rafael Calle 98 #Casa 32"
      />
      <FlatList
        data={data}
        renderItem={({ item }) => <Service item={item} />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          ></View>
        )}
      />
    </View>
  )
}
