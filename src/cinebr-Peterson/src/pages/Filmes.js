import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';


const Header = () => {
    return (
        <View style={styles.header}>
            <Image
                source={require('../public/images/Logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
        </View>
    );
};


const Filme = ({ titulo, descricao, imagem, onPress }) => {
    return (
        <TouchableOpacity style={styles.movieContainer} onPress={onPress}>
            <Image
                source={imagem}
                style={styles.movieImage}
                resizeMode="cover"
            />
            <View style={styles.movieTextContainer}>
                <Text style={styles.movieText}>{titulo}</Text>
                <Text style={styles.descriptionText}>{descricao}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Filmes = () => {

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Lista de Filmes</Text>

            <ScrollView style={styles.filmesContainer}>
                <Filme
                    titulo="Animais Fantásticos: Os Segredos de Dumbledore "
                    descricao="O professor Albus Dumbledore sabe que o poderoso bruxo das trevas Gellert Grindelwald está se movendo para assumir o controle do mundo bruxo. Incapaz de detê-lo sozinho, ele confia a Newt Scamander um plano contra o inimigo."
                    imagem={require('../public/images/filme1.png')}
                    onPress={() => console.log("Clicou no Filme 1")}
                />
                <Filme
                    titulo="Godzilla e Kong: O Novo Império"
                    descricao="Godzilla e o todo-poderoso Kong enfrentam uma ameaça colossal escondida nas profundezas do planeta, desafiando a sua própria existência e a sobrevivência da raça humana."
                    imagem={require('../public/images/filme2.png')} 
                    onPress={() => console.log("Clicou no Filme 2")}
                />
                
                    <Filme
                    titulo="Kung Fu Panda 4"
                    descricao="Uma poderosa feiticeira que muda de forma coloca os olhos no Cajado da Sabedoria. Po de repente percebe que precisa de ajuda e logo descobre que heróis podem ser encontrados nos lugares mais inesperados."
                    imagem={require('../public/images/filme3.png')} 
                    onPress={() => console.log("Clicou no Filme 2")}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#008080',
    },
    logo: {
        width: 300,
        height: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginVertical: 20,
    },
    filmesContainer: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    movieContainer: {
        backgroundColor: '#008080',
        borderRadius: 5,
        marginBottom: 30,
    },
    movieImage: {
        width: '100%',
        height: 200,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    movieTextContainer: {
        padding: 10,
    },
    movieText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
});

export default Filmes;
