import {View, Text, Image, ScrollView,Button,TouchableOpacity} from 'react-native';
import { StyledComponent } from "nativewind";
import React, {useRef} from 'react';
import styles from '../style';

import BackGround from '../components/background';

const Started = ({ navigation }) => {

    return (
        <BackGround> 
            <StyledComponent component={View} className="justify-center items-center">
                <StyledComponent component={Image} className="items-center justify-center mx-auto mt-20 mb-8" 
                source={require('../img/image_1.png')}>
                </StyledComponent>
                <StyledComponent component={Text} className="text-3xl font-bold">Welcome to</StyledComponent>
                <StyledComponent component={Text} className="text-3xl font-bold">Hi-tech Habitat</StyledComponent>
                <StyledComponent component={Text} className="text-xl text-center py-8 text-[#2D2B2E] opacity-60">
                Equip your accommodation with IOT devices and
                manage them with your portable phone.
                </StyledComponent>

                <StyledComponent 
                    component={TouchableOpacity} 
                    onPress={() => navigation.navigate("SignIn")} 
                    className="mt-8 px-10 py-4 bg-[#48D0FE] rounded-full shadow-2xl"
                    style={styles.shadow}    
                >
                    <StyledComponent component={Text} className="font-black text-white text-xl">Get Started</StyledComponent>
                </StyledComponent>

            </StyledComponent>
        </BackGround>
    );
}

export default Started;
