import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import estilo from './estilo'
import Perfil from '../Perfil/perfil'
import Feed from '../Feed/Feed'
import Videos from '../Videos/videos';

const Tab = createBottomTabNavigator();

const Inicio = ({navigation}) => {
    return(    
            
                <Tab.Navigator>
                    <Tab.Screen name="Times" component={Feed} />
                    <Tab.Screen name="Campeonatos" component={Perfil} />
                    <Tab.Screen name="Partidas ao vivo" component={Videos} />
                </Tab.Navigator>
            
        )
}
export default Inicio