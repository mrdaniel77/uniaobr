import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import estilo from './estilo'


const Perfil = ({navigation}) => {
    return(
        <ImageBackground 
            style={estilo.container}
            source={require('../../../assets/img/grama.jfif')}>
        
        </ImageBackground>


    )
}

    export default Perfil