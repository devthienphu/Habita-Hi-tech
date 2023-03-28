import {View, Text, Image, TouchableWithoutFeedback, Pressable} from 'react-native';
import React, { useState } from 'react';

import MenuSide from './menuSide';
import editprofile from '../img/editprofile.png';

import styles from '../style'

const ProfileHeader = () => {
    const [menuSideState, setMenuSideState] = useState(false)

    return (
        <>
            {menuSideState && 
                <>
                    <MenuSide id={1} />

                    <TouchableWithoutFeedback onPress={() => setMenuSideState(false)}>
                        <View className='absolute right-[-4] top-[-10] w-[25%] h-screen z-50'>
                        </View>
                    </TouchableWithoutFeedback>
                </>
            }

            <View 
              className="flex flex-row justify-between mt-16 mx-auto py-2 px-4 w-[92%] items-center rounded-xl bg-gray-200"
              style={styles.shadow}  
            >
                <Pressable onPress={() => setMenuSideState(true)}>
                    <Image className="object-cover" 
                        source={require('../img/menuIcon.png')}>
                    </Image>
                </Pressable>

                <Text className="font-bold text-xl tracking-wider">Profile</Text>
                
                <Pressable>
                    <Image className="object-cover scale-[1.4]" source={require('../img/editprofile.png')}></Image>
                </Pressable>

            </View>
        </>
    );
}

export default ProfileHeader;
