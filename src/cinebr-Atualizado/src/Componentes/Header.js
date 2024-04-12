import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Modal, Text } from 'react-native';
import { Appbar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  // Função para navegar para a tela desejada e fechar o menu
  const navigateAndCloseMenu = (screenName) => {
    navigation.navigate(screenName);
    setMenuVisible(false);
  };

  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#4DCEC1' }}>
        <TouchableOpacity onPress={toggleMenu} style={{ marginLeft: 10 }}>
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
            <TouchableOpacity onPress={() => navigateAndCloseMenu('Login')}>
              <Text style={{ marginBottom: 10 }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateAndCloseMenu('Home')}>
              <Text style={{ marginBottom: 10 }}>Home</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => setMenuVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default MyComponent;
