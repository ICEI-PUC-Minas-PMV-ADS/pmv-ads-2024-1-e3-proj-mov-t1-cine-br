import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SelecionarAssento = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleFinalizarCompraPress = () => {
    navigation.navigate('MensagemFim'); 
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela Filme Selecionado - Bianca</Text>
      <Button title="Ir para Login" onPress={handleLoginPress} />
      <Button title="Finalizar Compra" onPress={handleFinalizarCompraPress} />
    </View>
  );
};

export default SelecionarAssento;
