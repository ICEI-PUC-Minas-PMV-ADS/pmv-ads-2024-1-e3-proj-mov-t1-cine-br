import * as React from 'react';
import { Appbar, Menu, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Image, Text } from 'react-native';

const MyComponent = ({ title, imagePath }) => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header style={{ backgroundColor: '#88c3b5' }}>
      <Appbar.Content
        titleStyle={{ color: '#136289' }}
        title={title}
        style={{ alignItems: 'center' }}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="menu" onPress={openMenu} color="#136289" />}
      >
        <Menu.Item onPress={() => { navigation.navigate('cadastro'); closeMenu(); }} title="Cadastro" />
        <Menu.Item onPress={() => { navigation.navigate('login'); closeMenu(); }} title="Login" />
        <Menu.Item onPress={() => { navigation.navigate('comprar ingresso'); closeMenu(); }} title="Comprar Ingresso" />
        <Menu.Item onPress={() => { navigation.navigate('home'); closeMenu(); }} title="Home" />
        <Menu.Item onPress={() => { navigation.navigate('confirmar compra'); closeMenu(); }} title="Confirmar Compra" />
      </Menu>
    </Appbar.Header>
  );
};

export default MyComponent;




