import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import CinemasSaoPaulo from '../pages/CinemasSaoPaulo';
import CinemasBeloHorizonte from '../pages/CinemasBeloHorizonte';
import CinemasRioDeJaneiro from '../pages/CinemasRioDeJaneiro';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <PaperProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="CinemasSaoPaulo" component={CinemasSaoPaulo} />
        <Stack.Screen name="CinemasBeloHorizonte" component={CinemasBeloHorizonte} />
        <Stack.Screen name="CinemasRioDeJaneiro" component={CinemasRioDeJaneiro} />
      </Stack.Navigator>
    </PaperProvider>
  );
};

export default Main;

