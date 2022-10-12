import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import MenuCard from './MenuCard'

export default function index() {
  return (
    <View style={{ paddingBottom: 70, marginBottom: 100 }}>
      <FlatList
        data={[
          {
            title: 'Ordenes de servicio 1',
            navigateUri: 'detailService',
            code: '0000002312',
          },
          {
            title: 'Ordenes de servicio 1',
            navigateUri: 'detailService',
            code: '0000002312',
          },
          {
            title: 'Ordenes de servicio 1',
            navigateUri: 'detailService',
            code: '0000002312',
          },
          {
            title: 'Ordenes de servicio 1',
            navigateUri: 'detailService',
            code: '0000002312',
          },
          {
            title: 'Ordenes de servicio 1',
            navigateUri: 'detailService',
            code: '0000002312',
          },
          {
            title: 'Ordenes de servicio 1',
            navigateUri: 'detailService',
            code: '0000002312',
          },
        ]}
        renderItem={({ item }) => (
          <MenuCard
            title={item.title}
            navigateUri={item.navigateUri}
            code={item.code}
          />
        )}
      />
    </View>
  )
}
