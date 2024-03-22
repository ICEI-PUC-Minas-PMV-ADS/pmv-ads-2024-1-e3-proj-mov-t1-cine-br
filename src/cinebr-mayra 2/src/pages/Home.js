import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Header from '../Componentes/Header';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCidade: '',
      showCities: false,
      chooseCityButtonVisible: true, // Adicionando estado para controlar a visibilidade do botão
    };
  }

  handleMeuCinemaPress = (cidade) => {
    this.setState({
      selectedCidade: cidade,
      showCities: false, // Ocultando as imagens das cidades quando uma cidade é selecionada
    });
  };

  handleVoltarPress = () => {
    this.setState({
      selectedCidade: '',
      showCities: true, // Exibindo as imagens das cidades quando o usuário volta
    });
  };

  handleProcessarPress = () => {
    const { selectedCidade } = this.state;
    if (selectedCidade) {
      // Navegar para a tela específica da cidade de acordo com o nome selecionado
      switch (selectedCidade) {
        case 'São Paulo':
          this.props.navigation.navigate('CinemasSaoPaulo', {
            cidade: selectedCidade,
          });
          break;
        case 'Belo Horizonte':
          this.props.navigation.navigate('CinemasBeloHorizonte', {
            cidade: selectedCidade,
          });
          break;
        case 'Rio de Janeiro':
          this.props.navigation.navigate('CinemasRioDeJaneiro', {
            cidade: selectedCidade,
          });
          break;
        default:
          break;
      }
    }
  };

  handleChooseCityPress = () => {
    this.setState({
      showCities: true,
      chooseCityButtonVisible: false, // Ocultando o botão "Escolha sua cidade" quando clicado
    });
  };

  render() {
    const { selectedCidade, showCities, chooseCityButtonVisible } = this.state;
    const cidades = ['São Paulo', 'Belo Horizonte', 'Rio de Janeiro'];

    return (
      <View style={styles.container}>
        <Header title="Home" />
        <View style={styles.content}>
          <Image
            source={require('./imagem/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          {chooseCityButtonVisible && ( // Renderizando o botão "Escolha sua cidade" apenas se visível
            <TouchableOpacity
              style={styles.chooseCityButton}
              onPress={this.handleChooseCityPress}>
              <Text style={styles.buttonText}>Escolha sua cidade</Text>
            </TouchableOpacity>
          )}
          {showCities && !selectedCidade && (
            <View style={styles.buttonsContainer}>
              {cidades.map((cidade, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.cityButton}
                  onPress={() => this.handleMeuCinemaPress(cidade)}>
                  <Text style={styles.buttonText}>{cidade}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {selectedCidade && (
            <View style={styles.selectedCityContainer}>
              <Text style={styles.selectedCityText}>
                Cidade selecionada: {selectedCidade}
              </Text>
              <TouchableOpacity
                style={styles.processarButton}
                onPress={this.handleProcessarPress}>
                <Text style={styles.buttonText}>Processar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.voltarButton, { marginTop: 10 }]}
                onPress={this.handleVoltarPress}>
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4DCEC1',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  buttonsContainer: {
    marginBottom: 20,
  },
  cityButton: {
    backgroundColor: '#3AA895',
    borderRadius: 20,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
    alignItems: 'center',
  },
  selectedCityContainer: {
    alignItems: 'center',
  },
  selectedCityText: {
    color: '#56646C',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  voltarButton: {
    backgroundColor: '#56646C',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
    alignItems: 'center',
  },
  processarButton: {
    backgroundColor: '#3AA895',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  chooseCityButton: {
    backgroundColor: '#3AA895',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

export default Home;
