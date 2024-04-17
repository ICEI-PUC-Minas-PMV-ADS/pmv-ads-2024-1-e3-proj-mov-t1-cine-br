import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const CinemasBeloHorizonte = () => {
  const filmes = [
    {
      nome: 'Filme 1',
      sinopse: 'Sinopse do Filme 1...',
      imagem: 'https://via.placeholder.com/150',
    },
    {
      nome: 'Filme 2',
      sinopse: 'Sinopse do Filme 2...',
      imagem: 'https://via.placeholder.com/150',
    },
    // Adicione mais filmes conforme necessário
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filmes.map((filme, index) => (
        <TouchableOpacity key={index} style={styles.filmeContainer}>
          <Image source={{ uri: filme.imagem }} style={styles.imagem} />
          <Text style={styles.titulo}>{filme.nome}</Text>
          <Text>{filme.sinopse}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

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
});

export default CinemasBeloHorizonte;
