import { View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Button from './Button'
import { NabvarElement } from '../utils/types'
import Text from './Text'
import { SearchBar, TabBar } from '@ant-design/react-native'
import { Icon } from 'react-native-elements'
import { useNavigate } from 'react-router-native'
export default function NavBar({ items }: { items: NabvarElement[] }) {
  const navigate = useNavigate()
  const [selectItem, setSelectItem] = useState('redTab')
  return (
    <View>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#f5f5f5"
      >
        <TabBar.Item
          title="Servicio"
          icon={
            <Icon
              tvParallaxProperties={''}
              name={'receipt'}
              type="ionicon"
              color="black"
              size={30}
            />
          }
          selected={selectItem === 'Order'}
          onPress={() => navigate('/servicesList')}
        />
        <TabBar.Item
          icon={
            <Icon
              tvParallaxProperties={''}
              name={'alarm'}
              type="ionicon"
              color="black"
              size={30}
            />
          }
          title="Jornadas"
          selected={selectItem === 'Work'}
          onPress={() => navigate('/working')}
        ></TabBar.Item>
      </TabBar>
    </View>
  )
}
