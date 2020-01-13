import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Mult';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.f35}>Meu Primeiro App</Text>
        <Simples texto="Flexível!!!" />
        <ParImpar numero={47} />
        <Inverter texto="Sandro Torres!" />
        <MegaSena numeros={6} />
      </View>
    );
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
    fontSize: 30,
  },
});
