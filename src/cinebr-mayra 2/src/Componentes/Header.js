import * as React from 'react';
import { Appbar, Menu, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
const imagePath = require('../pages/imagem/Logo.png');

const MyComponent = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header style={{ backgroundColor: '#4DCEC1' }}>
      <Image
        source={imagePath}
        style={{ width: 40, height: 40, marginRight: 'auto' }}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="menu" onPress={openMenu} color="#136289" />}
      >
        <Menu.Item
          onPress={() => {
            navigation.navigate('cadastro');
            closeMenu();
          }}
          title="Cadastro"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate('login');
            closeMenu();
          }}
          title="Login"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate('comprar ingresso');
            closeMenu();
          }}
          title="Comprar Ingresso"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate('home');
            closeMenu();
          }}
          title="Home"
        />
        <Menu.Item
          onPress={() => {
            navigation.navigate('confirmar compra');
            closeMenu();
          }}
          title="Confirmar Compra"
        />
      </Menu>
    </Appbar.Header>
  );
};

export default MyComponent;


