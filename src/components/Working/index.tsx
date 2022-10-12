import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { List } from '@ant-design/react-native'
import Item, { Brief } from '@ant-design/react-native/lib/list/ListItem'

export default function index() {
  return (
    <ScrollView style={styles.container}>
      <List renderHeader={'Jornadas Laboral'}>
        <Item data-seed="logId">Datos del Trabajador</Item>
        <Item wrap>Nombre : Alejandra Martinez</Item>
        <Item extra="10:46:25 ↓ ">Entrada</Item>
        <Item extra="11:20:25 ↑">Salida</Item>
        <Item extra="10:46:25 ↓">Entrada</Item>
        <Item extra="12:46:25 ↑">Salida</Item>
        <Item
          extra={
            <View>
              Android
              <Brief style={{ textAlign: 'right' }}>Movil</Brief>
            </View>
          }
          multipleLine
        >
          Reparaciones Totales
        </Item>
        <Item extra="34" multipleLine>
          Total horas mes<Brief>12:46:25</Brief>
        </Item>
        <Item wrap multipleLine align="top" arrow="horizontal">
          Descripcion
          <Brief>
            Se reparo el disposito que presentaba problemas de conectividad
          </Brief>
          <Brief>Se remplazo la bateria del dispositivo</Brief>
          <Brief>Se actualizo el software de dispositivo</Brief>
        </Item>
      </List>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    paddingTop: 50,
  },
})
