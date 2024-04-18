import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroPage = () => {

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const navigation = useNavigation();

    const handleCadastro = () => {
        // ---- Lógica ----

        Alert.alert('Cadastro realizado com sucesso.', "clique em OK para continuar", [
            { text: "OK", onPress: () => navigation.navigate('Home') }
        ]);
    };

    const handleSignIn = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('./imagem/Logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Cadastre-se e faça sua reserva!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={setNome}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer} onPress={handleCadastro}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer} onPress={handleSignIn}>
                <Text style={styles.text}>Entrar</Text>
            </TouchableOpacity>
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
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
        width: '100%',
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
        backgroundColor: '#008080',
        paddingVertical: 15,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    textContainer: {
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },

});

export default CadastroPage;
