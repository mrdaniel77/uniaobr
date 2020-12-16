import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e9e9e9'
    },
    logo: {
        width: 150,
        height: 88
    },
    inputs: {
        width: 300,
        height:300,
        flex: 1,
        justifyContent:'flex-end'
    },
    imagem: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        backgroundColor: '#ffffff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 7
    },
    botaoEntrar: {
        backgroundColor: '#1d191a',
        padding: 10,
        marginBottom: 10,
        borderRadius: 7, 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoEntrar: {
        fontWeight: 'bold',
        color: '#790f13'
    },
    botaoCriar: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 7,
        color: '#f7941e',
        textAlign: 'center',
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    textoCriar: {
        fontWeight: 'bold',
        color: '#fff'        
    },

})

export default estilo;