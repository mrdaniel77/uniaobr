import React from 'react';
import {StyleSheet} from 'react-native';


const estilo = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        border: 5,
        backgroundColor:'#465a8c'        
    },
    headerImg:{
        width: 100,
        height: 100,
        borderRadius:50,
        marginTop: 10
    },

    img:{
        width: 200,
        height: 200,
        margin:10,
        borderRadius:30
    }

})

export default estilo;