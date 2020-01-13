import React from 'react';
import {createDrawerNavigator} from 'react-navigation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import {Inverter, MegaSena} from './componentes/Mult';

export default createDrawerNavigator(
  {
    MegaSena: {
      screen: () => <MegaSena numeros={6} />,
      navigationOptions: {title: 'Mega Sena'},
    },
    Inverte: {
      screen: () => <Inverter texto="React Nativo!" />,
    },
    ParImpar: {
      screen: () => <ParImpar numero={46} />,
      navigationOptions: {title: 'Par & Impar'},
    },
    Simples: {
      screen: () => <Simples texto="Incrível!!!" />,
    },
  },
  {drawerWidth: 200},
);
