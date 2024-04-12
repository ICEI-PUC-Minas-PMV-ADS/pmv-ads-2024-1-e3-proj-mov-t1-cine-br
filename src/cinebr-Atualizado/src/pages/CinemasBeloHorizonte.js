import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CinemasBeloHorizonte = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilme, setSelectedFilme] = useState(null);
  const navigation = useNavigation();

  const filmes = [
    {
      nome: 'Filme 1',
      sinopse: 'Sinopse do Filme 1...',
      imagem: 'https://via.placeholder.com/150',
      id: 1,
    },
    {
      nome: 'Filme 2',
      sinopse: 'Sinopse do Filme 2...',
      imagem: 'https://via.placeholder.com/150',
      id: 2,
    },
    // Adicione mais filmes conforme necessário
  ];

  const handleFilmePress = (filme) => {
    setSelectedFilme(filme);
    setModalVisible(true);
  };

  const handleCompraPress = () => {
    // Lógica para adicionar o filme ao carrinho de compras
    console.log('Filme comprado:', selectedFilme);
    // Fechar o modal
    setModalVisible(false);
    // Navegar para a tela de Selecionar Assento
    navigation.navigate('SelecionarAssento');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filmes.map((filme, index) => (
        <TouchableOpacity key={index} style={styles.filmeContainer} onPress={() => handleFilmePress(filme)}>
          <Image source={{ uri: filme.imagem }} style={styles.imagem} />
          <Text style={styles.titulo}>{filme.nome}</Text>
          <Text>{filme.sinopse}</Text>
          <TouchableOpacity onPress={() => handleFilmePress(filme)}>
            <Text style={styles.verDetalhes}>Ver Detalhes</Text>
          </TouchableOpacity>
        </TouchableOpacity>
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
            <Button title="Comprar" onPress={handleCompraPress} />
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

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  filmeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  verDetalhes: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
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
    fontWeight: 'bold',
    fontSize: 20,
  },
  modalImage: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CinemasBeloHorizonte;
