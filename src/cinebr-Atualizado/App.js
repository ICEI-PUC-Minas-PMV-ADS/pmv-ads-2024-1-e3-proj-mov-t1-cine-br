import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './src/navigations/Main';
import Login from './src/pages/Login'; // Importe o componente Login


const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
