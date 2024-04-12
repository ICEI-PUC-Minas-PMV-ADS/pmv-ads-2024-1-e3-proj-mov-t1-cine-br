import React from 'react'; // Importe o React apenas uma vez
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import TelaCadastro from '../pages/TelaCadastro';
import CinemasSaoPaulo from '../pages/CinemasSaoPaulo';
import CinemasBeloHorizonte from '../pages/CinemasBeloHorizonte';
import CinemasRioDeJaneiro from '../pages/CinemasRioDeJaneiro';
import SelecionarAssento from '../pages/SelecionarAssento';
import MensagemFim from '../pages/MensagemFim';

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
      <Stack.Screen name="CinemasSaoPaulo" component={CinemasSaoPaulo} />
      <Stack.Screen name="CinemasBeloHorizonte" component={CinemasBeloHorizonte} />
      <Stack.Screen name="CinemasRioDeJaneiro" component={CinemasRioDeJaneiro} />
      <Stack.Screen name="SelecionarAssento" component={SelecionarAssento} />
      <Stack.Screen name="MensagemFim" component={MensagemFim} />
    </Stack.Navigator>
  );
};

export default Main;
