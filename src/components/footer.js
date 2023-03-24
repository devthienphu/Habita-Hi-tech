import React from 'react';
import {View, Text, Image, ScrollView,Button,TouchableOpacity,TextInput, Pressable} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import home from '../img/home.png'
import statistic from '../img/static.png'
import user from '../img/user.png'
import setting from '../img/setting.png'

const Footer = () => {
    const navigation = useNavigation()

    return (
        <View className='flex flex-row items-center justify-around bg-white rounded-xl w-full py-5 mt-[-24px] border border-lg-1' >
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image source={home}></Image>  
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Profile')}>
                <Image source={user}></Image>  
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Statistic')}>
                <Image source={statistic}></Image>  
            </Pressable>
            <Pressable onPress={() => navigation.navigate('Setting')}>
                <Image source={setting}></Image>  
            </Pressable>  
        </View>
    );
}

export default Footer;
