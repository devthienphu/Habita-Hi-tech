import {View, Text, Image, TouchableWithoutFeedback, Pressable} from 'react-native';
import { StyledComponent } from "nativewind";
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import Notification from './notification';

const RoomHeader = () => {
    const navigation = useNavigation()

    const [notiState, setNotiState] = useState(false)

    return (
        <>
            {notiState && 
                <>
                    <Notification />
                    
                    <TouchableWithoutFeedback onPress={() => setNotiState(false)}>
                        <View className='absolute left-0 right-0 top-0 h-screen z-30'>
                        </View>
                    </TouchableWithoutFeedback>
                </>
            }

            <StyledComponent component={View} className="flex flex-row justify-between w-full px-3 items-center">
                <Pressable onPress={() => navigation.pop()}>
                    <StyledComponent component={Image} className="object-cover scale-[1.4]" 
                        source={require('../img/back_3.png')}>
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
                
                <Pressable onPress={() => setNotiState(true)}>
                    <Image className="object-cover" source={require('../img/bellicon.png')}></Image>
                </Pressable>

            </StyledComponent>
        </>
    );
}

export default RoomHeader;
