import {View, Text, Image, TouchableOpacity,TextInput} from 'react-native';
import { StyledComponent } from "nativewind";
import React from 'react';
import BackGround from '../components/background';

import styles from '../style';

const SignIn = ({ navigation }) => {
    return (
        <BackGround> 
            <StyledComponent component={View} className="items-center flex flex-col h-full w-full ">
                <StyledComponent component={Image} className="scale-90 h-1/2 items-center justify-center mx-auto" 
                source={require('../img/image_2.png')}></StyledComponent>

                <StyledComponent component={View} className="flex flex-col gap-y-4 bg-gray-300 rounded-3xl w-full items-center h-full">
                    <StyledComponent component={Text} className="font-black text-2xl pt-4 pb-2">Sign In</StyledComponent>
                    <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white" placeholder="Enter email" style={styles.shadow}/>
                    <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white mb-4" placeholder="Enter password" style={styles.shadow}/>


                    <StyledComponent component={TouchableOpacity} onPress={() => navigation.navigate("Home")} className="mb-4 px-8 py-3 bg-[#4682B4] rounded-md w-3/4 " style={styles.shadow}>
                        <StyledComponent component={Text} className="font-bold text-white text-xl text-center">Login</StyledComponent>
                    </StyledComponent>
                    
                    <StyledComponent component={View} className="flex flex-col ">
                        <StyledComponent component={Text} className="font-black font-medium text-center opacity-75">Don’t have an account yet?</StyledComponent>
                        <StyledComponent component={Text} onPress={() => navigation.navigate("SignUp")} className="font-bold text-center text-blue-600 underline">Create an account</StyledComponent>
                    </StyledComponent>
        
                </StyledComponent>
            </StyledComponent>
        </BackGround>
    );
}

export default SignIn;
