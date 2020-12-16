import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';

import estilo from './estilo'

const Login = ({navigation}) => {
    return(
        
        
        <ImageBackground 
        source={require('../../../assets/img/flamengo.jpeg')}
        style={estilo.container}
        >
            <View style={estilo.imagem}>
                
            </View>
            <View style={estilo.inputs}>
                <TextInput 
                    placeholder="E-mail"
                    style={estilo.input}
                />
                <TextInput 
                    secureTextEntry={true}
                    placeholder="Senha"
                    style={estilo.input}
                />
                <TouchableOpacity 
                    style={estilo.botaoEntrar}
                    onPress={() => navigation.navigate('Inicio')}
                    
                    >
                    <Text style={estilo.textoEntrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={estilo.botaoCriar}
                    >
                    <Text style={estilo.textoCriar}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default Login;