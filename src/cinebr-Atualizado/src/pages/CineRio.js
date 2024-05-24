import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const cinemasRio = [
  {
    id: 1,
    logo: require('./imagem/cinemark-rio.jpg'),
    nome: 'Cinemark Botafogo',
    endereco: 'Praia de Botafogo, 400 - Botafogo, Rio de Janeiro, RJ',
    url: 'CinemasRioDeJaneiro'
  },
  {
    id: 2,
    logo: require('./imagem/kinoplex-rio.jpg'),
    nome: 'Kinoplex Leblon',
    endereco: 'Av. Afrânio de Melo Franco, 290 - Leblon, Rio de Janeiro, RJ',
    url: 'CinemasRioDeJaneiro'
  },
  {
    id: 3,
    logo: require('./imagem/ponto-cine-rio.jpg'),
    nome: 'Ponto Cine Guadalupe',
    endereco: 'Estrada do Camboata, 2300 - Guadalupe, Rio de Janeiro, RJ',
    url: 'CinemasRioDeJaneiro'
  }
];

const CineRio = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {cinemasRio.map(cinema => (
        <View key={cinema.id} style={styles.cinemaContainer}>
          <TouchableOpacity onPress={() => navigation.navigate(cinema.url, { cinemaId: cinema.id })}>
            <Image source={cinema.logo} style={styles.logo} />
          </TouchableOpacity>
          <Text style={styles.nomeCinema}>{cinema.nome}</Text>
          <Text style={styles.enderecoCinema}>{cinema.endereco}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#4DCEC1'
  },
  cinemaContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  nomeCinema: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  enderecoCinema: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
  }
});

export default CineRio;
