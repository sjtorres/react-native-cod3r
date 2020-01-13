import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f35}>Meu Primeiro App</Text>
        <Simples texto='Flexível!!!'></Simples>
        <ParImpar numero={47}></ParImpar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f35: {
    fontSize: 35,
  },

  f30: {
    fontSize:30,
  }
})