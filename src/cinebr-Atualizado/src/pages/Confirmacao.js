import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const Confirmacao = () => {
  const route = useRoute();
  const { selectedProducts, count, totalValue } = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Obrigado pela sua compra!</Text>
      <Text style={styles.infoText}>Produtos selecionados: {selectedProducts}</Text>
      <Text style={styles.infoText}>Quantidade: {count} itens</Text>
      <Text style={styles.infoText}>Valor: R$ {totalValue},00</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#4DCEC1',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  infoText: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#008080',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Confirmacao;
