import React from 'react';
import {StyleSheet} from 'react-native';


const estilo = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'flex-start',
        border: 10,
        backgroundColor:'#465a8c', 
        width:"100%",
       
    },
    
    header:{
        flexDirection: 'row',
        width:"100%",
        marginBottom:15

    },
    scroll:{
        width:"100%",
        padding:20
    },

    headerImg:{
        width: 50,
        height: 50,
        borderRadius:50,
        marginTop: 10,
        marginLeft: 20
    },

    input:{
        marginLeft:120,
        marginTop:20,
        backgroundColor: 'white',
        padding: 1,
        marginBottom: 10,
        borderRadius: 5, 
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width:150
    },
    card:{
        flexDirection: 'row',
        width:'100%',
        alignItems:'center'
    },

    img:{
        width: 50,
        height: 50,
        margin:10,
  
    },
    nome:{
        fontSize:15,
        backgroundColor: 'white',
        padding: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default estilo;