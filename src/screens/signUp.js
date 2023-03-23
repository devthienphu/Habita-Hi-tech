import {View, Text, Image, ScrollView,Button,TouchableOpacity,TextInput} from 'react-native';
import { StyledComponent } from "nativewind";
import React from 'react';
import BackGround from '../components/background';

import styles from '../style';

const SignUp = ({ navigation }) => {
    return (
        <BackGround>
            <StyledComponent component={View} className="h-1/3">
                <StyledComponent component={Image} className="scale-90 mx-auto " 
                source={require('../img/image_2.png')}></StyledComponent>
            </StyledComponent>

            <StyledComponent component={View} className="flex flex-col gap-y-4 bg-gray-300 rounded-3xl w-full items-center h-full">
                <StyledComponent component={Text} className="font-black text-2xl pt-4 pb-2">Sign Up</StyledComponent>
                <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white" placeholder="Enter Full Name" style={styles.shadow}/>
                <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white" placeholder="Enter Phone Number" style={styles.shadow}/>
                <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white" placeholder="Enter Email" style={styles.shadow}/>
                <StyledComponent component={TextInput} className="py-2.5 rounded-xl border w-3/4 px-4 bg-white border-white mb-8" placeholder="Enter Password" style={styles.shadow}/>

                <StyledComponent component={TouchableOpacity} onPress={() => navigation.navigate("Home")} className="mb-4 px-8 py-3 bg-[#48D0FE] rounded-md w-3/4 " style={styles.shadow}>
                    <StyledComponent component={Text} className="font-bold text-white text-xl text-center">Sign Up</StyledComponent>
                </StyledComponent>
                
                <StyledComponent component={View} className="flex flex-col ">
                        <StyledComponent component={Text} className="font-black font-medium text-center opacity-75">Already have an account yet?</StyledComponent>
                        <StyledComponent component={Text} onPress={() => navigation.navigate("SignIn")} className="font-bold text-center text-blue-600 underline">Login here</StyledComponent>
                    </StyledComponent>

            </StyledComponent>
        </BackGround>
    );
}

export default SignUp;
