import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, ViewPropTypes, RecyclerViewBackedScrollViewBase} from 'react-native';
import estilo from './estilo'

const Feed = () => {
    return (

        <View style={estilo.container}>            
            <View>
                <Image 
                    style={estilo.headerImg}
                    source={require('../../../assets/img/user.png')}
                />
            </View>
            
            <ScrollView >
                <Image 
                source={require('../../../assets/img/mengo.png')} 
                style={estilo.img} />
                <Image 
                source={require('../../../assets/img/gremio.png')} 
                style={estilo.img} />
                <Image 
                source={require('../../../assets/img/palmeiras.png')} 
                style={estilo.img} />
                <Image 
                source={require('../../../assets/img/paranaense.png')} 
                style={estilo.img} />
                <Image 
                source={require('../../../assets/img/brasiliense.png')} 
                style={estilo.img} />
            </ScrollView>

        </View>             



    )
}

export default Feed