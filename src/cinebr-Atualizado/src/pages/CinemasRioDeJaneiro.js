import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CinemasRioDeJaneiro = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilme, setSelectedFilme] = useState(null);
  const navigation = useNavigation();

  const filmes = [
    {
      nome: 'Zona de Risco',
      sinopse: 'Uma equipe da Força Delta é emboscada em território inimigo. Sem querer abandoná-los, a única esperança de um oficial é um piloto de drone da Força Aérea que pode ser seus olhos durante uma batalha brutal de 48 horas.',
      imagem: 'https://m.media-amazon.com/images/M/MV5BZmZhYjk1ZWYtYTExMy00OTM4LWIyMzEtZWZhYmJlYTdjNGZjXkEyXkFqcGdeQXVyMTY4MjE1MDA@._V1_.jpg',
      id: 1,
    },
    {
      nome: 'Godzilla e Kong: O Novo Império',
      sinopse: 'Godzilla e o todo-poderoso Kong enfrentam uma ameaça colossal escondida nas profundezas do planeta, desafiando a sua própria existência e a sobrevivência da raça humana',
      imagem: 'https://cinemax.pt/wp-content/uploads/2024/01/godzila.jpg',
      id: 2,
    },
    {
      nome: 'Duna 2',
      sinopse: 'Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família. Enfrentando uma escolha entre o amor de sua vida e o destino do universo, ele deve evitar um futuro terrível que só ele pode prever.',
      imagem: 'https://pbs.twimg.com/media/GEnxkFTWIAABP8T.jpg:large',
      id: 3,
    },
  ];

  const handleFilmePress = (filme) => {
    setSelectedFilme(filme);
    setModalVisible(true);
  };

  const handleCompraPress = () => {
    console.log('Filme comprado:', selectedFilme);
    setModalVisible(false);
    navigation.navigate('SelecionarAssento');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filmes.map((filme, index) => (
      <View key={index} style={styles.filmeContainer}>
  <TouchableOpacity onPress={() => handleFilmePress(filme)}>
    <View style={styles.cartazContainer}>
      <Image source={{ uri: filme.imagem }} style={styles.imagem} />
    </View>
    <Text style={styles.titulo}>{filme.nome}</Text>
    <Text>{filme.sinopse}</Text>
    <TouchableOpacity onPress={() => handleFilmePress(filme)}>
      <Text style={styles.verDetalhes}>Ver Detalhes</Text>
    </TouchableOpacity>
  </TouchableOpacity>
</View>
      ))}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{selectedFilme?.nome}</Text>
            <Image source={{ uri: selectedFilme?.imagem }} style={styles.modalImage} />
            <Text>{selectedFilme?.sinopse}</Text>
            <View style={styles.buttonContainer}>
            <Button title="Comprar" onPress={handleCompraPress} />
            </View>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  buttonContainer: {
    margin: 10  
  },

  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  filmeContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  cartazContainer: {
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center', 
  },
  sinopse: {
    textAlign: 'center' 
  },
  verDetalhes: {
    marginBottom: 20,
    color: 'blue',
    textAlign: 'center', 
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalImage: {
    width: 300,
    height: 400,
    marginBottom: 10,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CinemasRioDeJaneiro;
