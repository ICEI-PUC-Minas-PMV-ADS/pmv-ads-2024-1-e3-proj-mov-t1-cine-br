import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const cinemasSp = [
  {
    id: 1,
    logo:  require('./imagem/cinemabrasileira-sp.jpg'),
    nome: 'Cinemateca Brasileira',
    endereco: 'Largo Sen. Raul Cardoso, 207 - Vila Clementino, São Paulo, SP',
    url: 'CinemasSaoPaulo'
  },
  {
    id: 2,
    logo:  require('./imagem/cinepolis-sp.jpg'),
    nome: 'Cinépolis',
    endereco: 'Av. Nove de Julho - Jardim Paulista, São Paulo - SP',
    url: 'CinemasSaoPaulo'
  },
  {
    id: 3,
    logo:  require('./imagem/cinesala-sp.jpg'),
    nome: 'Cinesala',
    endereco: 'R. Fradique Coutinho, 361 - Pinheiros, São Paulo - SP',
    url: 'CinemasSaoPaulo'
  }
];

const CineSp = ({ navigation }) => {

  return (
     <ScrollView style={styles.container}>
      {cinemasSp.map(cinema => (
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

export default CineSp;
