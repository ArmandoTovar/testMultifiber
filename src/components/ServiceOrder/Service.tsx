import { View, Text } from 'react-native'
import React from 'react'
import { Service as ServiceType } from '../../utils/types'
import { Card, Result } from '@ant-design/react-native'

export default function Service({ item }: { item: ServiceType }) {
  return (
    <Card>
      <Card.Header
        title={item.type}
        thumbStyle={{ width: 30, height: 30 }}
        thumb="https://cdn-icons-png.flaticon.com/512/3240/3240690.png"
        extra={item.count}
      />
      <Card.Body>
        <View style={{ height: 42 }}>
          <Text style={{ marginLeft: 16 }}>{item.description}</Text>
        </View>
      </Card.Body>
      <Card.Footer content={'Precio:' + item.price} />
    </Card>
  )
}
