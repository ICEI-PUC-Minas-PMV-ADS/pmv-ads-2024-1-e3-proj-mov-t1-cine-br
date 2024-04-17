import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CinemasSaoPaulo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilme, setSelectedFilme] = useState(null);
  const navigation = useNavigation();

  const filmes = [
 {
  nome: 'Animais Fantásticos: Os Segredos de Dumbledore',
  sinopse: 'O professor Albus Dumbledore sabe que o poderoso bruxo das trevas Gellert Grindelwald está se movendo para assumir o controle do mundo bruxo. Incapaz de detê-lo sozinho, ele confia a Newt Scamander um plano contra o inimigo.',
  imagem: 'https://m.media-amazon.com/images/S/pv-target-images/94d299d381ded85afac95ba386ef5557b6e737800be59f5337b017af05df339d.jpg',
  id: 1,
},

    {
  nome: 'Godzilla e Kong: O Novo Império',
  sinopse: 'Godzilla e o todo-poderoso Kong enfrentam uma ameaça colossal escondida nas profundezas do planeta, desafiando a sua própria existência e a sobrevivência da raça humana',
  imagem: 'https://cinemax.pt/wp-content/uploads/2024/01/godzila.jpg',
  id: 2,
},
  {
  nome: 'Kung Fu Panda 4',
  sinopse: 'Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados.',
  imagem: 'https://br.web.img3.acsta.net/pictures/23/12/13/18/13/4592801.jpg',
  id: 3,
},

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

export default CinemasSaoPaulo;
