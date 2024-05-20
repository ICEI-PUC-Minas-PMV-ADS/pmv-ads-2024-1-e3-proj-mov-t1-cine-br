import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyComponent = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserName = async () => {
      try {
        const name = await AsyncStorage.getItem('userName');
        setUserName(name || '');
      } catch (error) {
        console.error('Failed to fetch the user name from storage', error);
      }
    };

    getUserName();
  }, []);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleLogout = async () => {
    try {
      // Remove qualquer informação de usuário do AsyncStorage
      await AsyncStorage.removeItem('userName');
      await AsyncStorage.removeItem('user'); // Remova se necessário

      // Certifique-se de que o menu esteja fechado após sair
      setMenuVisible(false);

      // Navegue para a tela de Login após sair
      navigation.navigate('Login');
    } catch (error) {
      console.error('Failed to remove user data from storage', error);
    }
  };

  const navigateAndCloseMenu = (screen) => {
    navigation.navigate(screen);
    setMenuVisible(false); // Fecha o menu após navegar para a tela desejada
  };

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#4DCEC1', justifyContent: 'space-between' }}>
        {userName ? (
          <Text style={{ color: 'white', fontSize: 14, marginLeft: 10 }}>
            Bem-vindo, {userName}
          </Text>
        ) : null}
        <TouchableOpacity onPress={toggleMenu} style={{ marginRight: 10 }}>
          <Image
            source={{ uri: 'https://cdn.icon-icons.com/icons2/2717/PNG/512/list_dashes_icon_173736.png' }}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </Appbar.Header>

      <Modal
        visible={menuVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ width: '50%', backgroundColor: '#fff', height: '100%', padding: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>Menu</Text>
            <TouchableOpacity onPress={() => navigateAndCloseMenu('Home')}>
              <Text style={{ marginBottom: 10 }}>Home</Text>
            </TouchableOpacity>
            {userName ? (
              <TouchableOpacity onPress={() => handleLogout()}>
                <Text style={{ marginBottom: 10 }}>Sair</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => navigateAndCloseMenu('Login')}>
                <Text style={{ marginBottom: 10 }}>Login</Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setMenuVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default MyComponent;
