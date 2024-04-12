import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Modal, SafeAreaView } from 'react-native';
import Header from '../Componentes/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCidade: '',
      cidades: ['São Paulo', 'Belo Horizonte', 'Rio de Janeiro'],
      showCidadesModal: false,
    };
  }

  handleCidadePress = (cidade) => {
    this.setState({
      selectedCidade: cidade,
      showCidadesModal: false,
    });

    // Navegar para a página correspondente à cidade selecionada
    switch (cidade) {
      case 'São Paulo':
        this.props.navigation.navigate('CinemasSaoPaulo');
        break;
      case 'Belo Horizonte':
        this.props.navigation.navigate('CinemasBeloHorizonte');
        break;
      case 'Rio de Janeiro':
        this.props.navigation.navigate('CinemasRioDeJaneiro');
        break;
      default:
        break;
    }
  };

  toggleCidadesModal = () => {
    this.setState((prevState) => ({
      showCidadesModal: !prevState.showCidadesModal,
    }));
  };

  render() {
    const { selectedCidade, cidades, showCidadesModal } = this.state;

    return (
      <SafeAreaView style={styles.safeArea}>
        <Header title="Home" />
        <View style={styles.container}>
          <Image
            source={require('./imagem/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <TouchableOpacity
            style={styles.chooseCityButton}
            onPress={this.toggleCidadesModal}
          >
            <Text style={styles.cityButtonText}>{selectedCidade ? selectedCidade : 'Selecione sua cidade'}</Text>
          </TouchableOpacity>
          <Modal
            visible={showCidadesModal}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <FlatList
                  data={cidades}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[
                        styles.cityButton,
                        selectedCidade === item && styles.selectedCityButton
                      ]}
                      onPress={() => this.handleCidadePress(item)}
                    >
                      <Text style={styles.cityButtonText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={(item) => item}
                />
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4DCEC1',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  chooseCityButton: {
    backgroundColor: '#3AA895',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  cityButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    maxHeight: 300,
    width: '80%',
  },
  cityButton: {
    backgroundColor: '#3AA895',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  selectedCityButton: {
    backgroundColor: '#0C7B5F',
  },
});

export default Home;
