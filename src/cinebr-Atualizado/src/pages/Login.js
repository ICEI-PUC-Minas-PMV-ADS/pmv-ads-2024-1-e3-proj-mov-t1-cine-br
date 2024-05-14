import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar se o usuário está logado
  const [loggedInUsername, setLoggedInUsername] = useState(''); // Estado para armazenar o nome do usuário logado
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o estado de carregamento
  const [error, setError] = useState(null); // Estado para armazenar mensagens de erro
  const [loginSuccess, setLoginSuccess] = useState(false); // Estado para controlar se o login foi bem-sucedido
  const navigation = useNavigation(); 

  // Fake API para simular o processo de login
  const fakeApiLogin = (username, password) => {
    const credentials = [
      { email: 'usuario1@example.com', senha: 'senha123', nome: 'Usuário 1' },
      { email: 'usuario2@example.com', senha: 'senha456', nome: 'Usuário 2' },
    ];

    const user = credentials.find(cred => cred.email === username && cred.senha === password);
    return user;
  };

  const handleLogin = async () => {
    setIsLoading(true); // Define o estado de carregamento como verdadeiro durante o processo de login
    setError(null); // Limpa qualquer erro anterior

    try {
      const user = await fakeApiLogin(username, password);
      if (user) {
        setIsLoggedIn(true); // Define o usuário como logado
        setLoggedInUsername(user.nome); // Armazena o nome do usuário logado
        setLoginSuccess(true); // Define o login como bem-sucedido
        // Navega para a tela principal após o login bem-sucedido
        navigation.navigate('Home');
      } else {
        setError('E-mail ou senha incorretos!');
      }
    } catch (error) {
      console.error('Erro durante o login:', error);
      setError('Ocorreu um erro durante o login. Por favor, tente novamente.');
    } finally {
      setIsLoading(false); // Define o estado de carregamento como falso após o login ser concluído (seja bem-sucedido ou não)
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
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      {loginSuccess && <Text style={styles.success}>Login feito com sucesso!</Text>}
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
      {isLoggedIn && (
        <Text style={styles.loggedInUser}>Logado como: {loggedInUsername}</Text>
      )}
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
  loggedInUser: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  success: {
    color: 'green',
    marginBottom: 10,
  },
});

export default Login;
