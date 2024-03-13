import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import Header from '../Componentes/Header';

const Home = ({ navigation }) => {
  const [showEstadoButtons, setShowEstadoButtons] = useState(false);
  const estados = ['Minas Gerais', 'Rio de Janeiro', 'São Paulo'];

  const handleReservaPress = () => {
    navigation.navigate('Login');
  };

  const handleMeuCinemaPress = (estado) => {
    navigation.navigate('Cinemas', { estado });
  };

  return (
    <View style={styles.container}>
      <Header title="Home" />
      <View style={styles.content}>
        <Image
          source={require('./imagem/Logo.png')}
          style={styles.logo}
          resizeMode="contain" // Use 'contain' para garantir que a imagem se ajuste ao tamanho do componente
        />
        <TouchableOpacity style={styles.button} onPress={handleReservaPress}>
          <Text style={styles.buttonText}>Tenho uma Reserva</Text>
        </TouchableOpacity>
        {!showEstadoButtons && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowEstadoButtons(true)}>
            <Text style={styles.buttonText}>Escolha o seu estado</Text>
          </TouchableOpacity>
        )}
        {showEstadoButtons && (
          <View style={styles.estadosContainer}>
            {/* Mapear os estados para criar botões individualmente */}
            {estados.map((estado, index) => (
              <TouchableOpacity
                key={index}
                style={styles.estadoButton}
                onPress={() => handleMeuCinemaPress(estado)}>
                <Text style={styles.buttonText}>{estado}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3c5ba',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300, // Largura aumentada para 300
    height: 300, // Altura aumentada para 300
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#88c3b5',
    borderRadius: 20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#136289',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  estadosContainer: {
    marginTop: 20,
    flexDirection: 'row', // Para os botões ficarem na mesma linha
    justifyContent: 'center', // Para centralizar os botões na linha
    flexWrap: 'wrap', // Para que os botões quebrem linha quando não houver espaço suficiente
  },
  estadoButton: {
    backgroundColor: '#88c3b5',
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10, // Espaçamento entre os botões na horizontal
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Home;

