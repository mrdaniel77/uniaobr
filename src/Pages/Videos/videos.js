import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import estilo from './estilo'


const Videos = ({navigation}) => {
    return(
        <ImageBackground 
            style={estilo.container}
            source={require('../../../assets/img/grama.jfif')}>

            <View style={estilo.headerTexto}>
                <Text style={estilo.texto}>
                    Flamengo vs Portuguesa - Campeonato carioca
                </Text>
            </View>
            <View style={estilo.vid}>
                <Image 
                    source={require('../../../assets/img/flapt.jpg')} 
                    style={estilo.img}
                /> 
            </View>
            <View style={estilo.headerComentario}>
                <Image 
                    source={require('../../../assets/img/user.png')} 
                    style={estilo.imgCard}
                />
                <Text>
                    Esse time é muito booom
                </Text>
            </View>
            <View style={estilo.headerComentario}>
                <Image 
                    source={require('../../../assets/img/user.png')} 
                    style={estilo.imgCard}
                />
                <Text>
                    Lixooo
                </Text>
            </View>
            <View style={estilo.headerComentario}>
                <Image 
                    source={require('../../../assets/img/user.png')} 
                    style={estilo.imgCard}
                />
                <Text>
                    Segue o lider garay
                </Text>
            </View>
                
            
                  
        </ImageBackground>


    )
}

    export default Videos