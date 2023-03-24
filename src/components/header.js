import {View, Text, Image, ScrollView,Button,TouchableOpacity,TextInput, Pressable} from 'react-native';
import { StyledComponent } from "nativewind";
import React, { useState } from 'react';
import MenuSide from './menuSide';

import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const navigation = useNavigation()
    const [ menuSideState, setmenuSideState ] = useState(0)

    const setMenuSide = () => setmenuSideState(1)

    return (
        <>
            {/* {menuSideState ? <MenuSide/>: null} */}

            <StyledComponent component={View} className="flex flex-row justify-between w-full px-3 items-center">
                <Pressable onPress={setMenuSide}>
                    <StyledComponent component={Image} className="object-cover" 
                        source={require('../img/menuIcon.png')}>
                    </StyledComponent>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Profile')}>
                <View className="flex flex-row gap-x-5 items-center">
                    <StyledComponent component={Image} className="object-cover" 
                        source={require('../img/profile.png')}>
                    </StyledComponent>
                    <StyledComponent component={View} className="flex flex-col">
                        <Text className="font-black text-xl">Hi Taylor S.</Text>
                        <Text className="font-semibold text-[#838A8F]">Monday, 20 Jan</Text>
                    </StyledComponent>
                </View>
                </Pressable>
                
                <StyledComponent component={Image} className="object-cover" 
                    source={require('../img/bellicon.png')}></StyledComponent>
            </StyledComponent>
        </>
    );
}

export default Header;
