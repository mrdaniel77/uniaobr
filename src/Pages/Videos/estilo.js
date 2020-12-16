import React from 'react';
import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        backgroundColor: '#465a8c'
          
    },
    headerTexto:{
        marginTop: 15,
        marginLeft:10,
       
    },

    texto:{
        color: 'white',
        fontSize:  13
        
    },

    vid:{
        marginTop: 20
    },

    img:{
        width: 300,
        height: 150
    },
    headerComentario: {
        flexDirection: "row",
        marginLeft: 55,
        marginTop: 10,
        width:'100%'
    },

    imgCard:{
        width: 25,
        height: 25,
        borderRadius: 10,
        marginRight: 10
  
    },
   

})

export default estilo;