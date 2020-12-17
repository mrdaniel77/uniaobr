import React, { useEffect, useState } from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground} from 'react-native';
import estilo from './estilo'
import getCompeticoes from '../../api/competicoes'

const Feed = () => {
    const [times, setTimes] = useState('');

    useEffect(() => {
        getCompeticoes(setTimes)
    }, [])

    return (

        <ImageBackground 
            source={require('../../../assets/img/campo.jpg')}
            style={estilo.container}>            
    
            <View style={estilo.header}>
                <Image 
                    style={estilo.headerImg}
                    source={require('../../../assets/img/user.png')}
                />
                <Text style={estilo.input}>pesquisa</Text>
            </View>
            
            <ScrollView style={estilo.scroll}>
                <FlatList 
                    data={times}
                    keyExtractor={(item, index) => index.toString() }
                    renderItem={({item}) => (
                        <View style={estilo.card}>
                            <Image 
                                source={{uri: item.crestUrl}} 
                                style={estilo.img} 
                            />
                                <Text style={estilo.nome}>{item.name}   
                                </Text>
                        </View>
                    )}
                />
                
            </ScrollView>

        </ImageBackground>            



    )
}

export default Feed