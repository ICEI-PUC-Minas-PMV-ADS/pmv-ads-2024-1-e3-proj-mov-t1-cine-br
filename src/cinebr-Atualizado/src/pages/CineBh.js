import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const cinemasBh = [
  {
    id: 1,
    logo: require('./imagem/ufmg.jpg'),
    nome: 'Centro Cultural UFMG',
    endereco: 'Av. Santos Dumont, 174 - Centro, Belo Horizonte - MG',
    url: 'CinemasBeloHorizonte'
  },
  {
    id: 2,
    logo: require('./imagem/una.jpg'),
    nome: 'Una Cine Belas Artes',
    endereco: 'R. Gonçalves Dias, 1581 - Lourdes, Belo Horizonte - MG',
    url: 'CinemasBeloHorizonte'
  },
  {
    id: 3,
    logo: require('./imagem/cinearte.jpg'),
    nome: 'Cinearte',
    endereco: 'Av. dos Andradas, 3000 - 3036 - Santa Efigênia, Belo Horizonte - MG',
    url: 'CinemasBeloHorizonte'
  }
];

const CineBh = ({ navigation }) => {

  return (
     <ScrollView style={styles.container}>
      {cinemasBh.map(cinema => (
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

export default CineBh;
