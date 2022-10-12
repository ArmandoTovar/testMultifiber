import React from 'react'
import { StyleSheet, TouchableNativeFeedback } from 'react-native'
import { Icon } from 'react-native-elements'
import { useNavigate } from 'react-router-native'
import themes from '../../utils/themes'
import Button from '../Button'
import Text from '../Text'

import View from '../View'

const MenuCard: React.FC<{
  title: string
  navigateUri: string
  code: string
}> = ({ title, navigateUri, code }) => {
  const navigate = useNavigate()
  return (
    <TouchableNativeFeedback onPress={() => navigate(`/${navigateUri}`)}>
      <View style={styles.mainContainer} color="contrast">
        <View style={styles.container} color="primary">
          <View style={styles.subContainer} color="contrast">
            <Text
              color="secundary"
              adjustsFontSizeToFit={true}
              numberOfLines={2}
              style={styles.title}
            >
              {title}
            </Text>

            <View style={styles.button} color="primary">
              <Icon
                tvParallaxProperties={''}
                name="arrow-redo"
                type="ionicon"
                color="#fff"
                size={30}
              />
            </View>

            <Text color="secundary" bold style={styles.textCode}>
              C-{code}
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}
export default MenuCard
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  container: {
    height: 150,
    flexDirection: 'column-reverse',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  subContainer: {
    height: 130,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  button: {
    width: '15%',
    marginTop: '10%',
    marginRight: '7%',
    height: 40,

    padding: 2,
  },
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    flexGrow: 1,
    margin: 5,
    marginLeft: '5%',
    width: '70%',
    alignSelf: 'flex-start',
  },
  textCode: {
    fontSize: 20,
    paddingLeft: 10,
  },
})
