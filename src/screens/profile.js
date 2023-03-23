import React from 'react';
import {View, Text, Image, ScrollView,Button,TouchableOpacity,TextInput, Pressable} from 'react-native';
import BackGround from '../components/background';
import back from '../img/back.png'
import bell from '../img/bellicon.png'
import profile from '../img/profile2.png'
import next from '../img/next.png'
import heart from '../img/heart.png'
import bell_2 from '../img/bell_2.png'
import Footer from '../components/footer';

import styles from '../style'

const Profile = ({ navigation }) => {
    return (
        <BackGround>
            <View className='justify-between'>
                <View className="flex flex-col h-screen">
                    <View className="flex flex-row justify-between pt-16 px-8 items-center">
                        <Image source={back}></Image>
                        <Text className="text-xl font-bold">Profile</Text>
                        <Image source={bell}></Image>
                    </View>
                        
                    {/* Info */}
                    <View className="flex flex-row items-center justify-between px-8 ">
                        <View className="flex flex-col items-center mx-auto ">
                            <Image source={profile} className=""></Image>
                            <Text className="font-bold text-2xl">Taylor Swift</Text>
                        </View>

                        <View className="flex flex-col  pt-8 px-8 ">
                            <Text className="font-black text-lg">Email</Text>
                            <Text className="font-bold text-[#12BEF6] pb-2">123456@gmail.com</Text>

                            <Text className="font-black text-lg">Contact</Text>
                            <Text className="font-bold text-[#12BEF6] pb-2">0123456789</Text>

                            <Text className="font-black text-lg">Account created</Text>
                            <Text className="font-bold text-[#12BEF6] pb-2">4:15:30 Feb 23 2023</Text>
                        </View>
                    </View>

                    {/* Options */}
                    <View className="flex flex-col gap-y-6 bg-white rounded-xl mx-5 mt-8 pb-6 px-2" style={styles.shadow}>
                        <View className="flex flex-row justify-between items-center px-4">
                            <View className="flex flex-row gap-x-4 items-center">
                                <Image source={bell_2} className="scale-[1.1]"></Image>
                                <Text className="text-lg font-semibold">Change Information</Text>
                            </View>
                            <Image source={next}></Image>
                        </View>

                        <View className="flex flex-row justify-between items-center px-4">
                            <View className="flex flex-row gap-x-4 items-center">
                                <Image source={heart} className="scale-[1.1]"></Image>
                                <Text className="text-lg font-semibold">Change Password</Text>
                            </View>
                            <Image source={next}></Image>
                        </View>
                    </View>

                    {/* More */}
                    <Text className="text-lg font-semibold pt-6 px-8">More</Text>
                    <View className="flex flex-col gap-y-6 bg-white rounded-xl mx-5 mt-4 pb-6 px-2" style={styles.shadow}>
                        <View className="flex flex-row justify-between items-center px-4">
                            <View className="flex flex-row gap-x-4 items-center">
                                <Image source={bell_2} className="scale-[1.1]"></Image>
                                <Text className="text-lg font-semibold">Help & Support</Text>
                            </View>
                            <Image source={next}></Image>
                        </View>

                        <View className="flex flex-row justify-between items-center px-4">
                            <View className="flex flex-row gap-x-4 items-center">
                                <Image source={heart} className="scale-[1.1]"></Image>
                                <Text className="text-lg font-semibold">About App</Text>
                            </View>
                            <Image source={next}></Image>
                        </View>
                    </View>

                    {/* Logout */}

                    <Pressable 
                        style={styles.shadow} 
                        className="bg-[#48D0FE] rounded-2xl w-fit items-center mx-32 py-2 mt-6"
                        onPress={() => navigation.navigate('SignIn')}
                    >
                        <Text className="text-xl font-bold text-white">Log out</Text>
                    </Pressable>
                </View>
            </View>

            <Footer/>

        </BackGround>
    );
}

export default Profile;
