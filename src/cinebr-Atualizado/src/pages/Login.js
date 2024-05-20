import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const BASE_URL = 'https://json-server-project-aqiv.onrender.com';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const checkIfUserLoggedIn = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          await AsyncStorage.removeItem('user');
        }
      } catch (error) {
        console.error('Failed to check user login status:', error);
      }
    };

    checkIfUserLoggedIn();
  }, []);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const user = await loginUser(email, password);
      if (user) {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        await AsyncStorage.setItem('userName', user.nome); // Armazena o nome do usuário
        navigation.navigate('Home');
      } else {
        throw new Error('E-mail ou senha incorretos!');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loginUser = async (email, password) => {
    const endpoint = `${BASE_URL}/users`;
    try {
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error('Erro ao buscar usuários: ' + response.status);
      }

      const users = await response.json();

      const user = users.find(u => u.email === email && u.senha === password);

      return user;
    } catch (error) {
      console.error('Erro durante o login:', error);
      throw new Error('Ocorreu um erro durante o login. Por favor, tente novamente.');
    }
  };

  const handleSignUp = () => {
    navigation.navigate('TelaCadastro');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./imagem/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#20B2AA',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    borderColor: 'white',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '48%',
    height: 50,
    backgroundColor: '#008080',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
