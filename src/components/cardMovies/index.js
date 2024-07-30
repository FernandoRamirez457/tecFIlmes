import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './style';


export default function CardMovies({ titulo, nota, imagem }) {
    const navigation = useNavigation();

    return (
        <>
            <TouchableOpacity style={styles.containerJogos} onPress={() => navigation.navigate('Details', { titulo: titulo, nota: nota, imagem: imagem })}>

                <Image style={styles.images} source={require(`../../Img/${imagem}`)} />
                <Text style={styles.titulo}>{titulo} </Text>

                <Text style={styles.textNota}> {nota} </Text>


            </TouchableOpacity>
        </>


    );


}