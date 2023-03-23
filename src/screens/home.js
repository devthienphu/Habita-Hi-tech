import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import { StyledComponent } from "nativewind";
import React from 'react';
import Header from '../components/header';
import BackGround from '../components/background';
import bedRoom from '../img/bedRoom.png';
import livingRoom from '../img/livingRoom.png';
import kitchen from '../img/kitchen.png';
import studioRoom from '../img/studioRoom.png';

import Footer from '../components/footer';

import styles from '../style'

const Rooms = [
    {
        name: 'Living room',
        img: livingRoom,
        numOfDevices: 4,
        temperature: 20,
    },
    {
        name: 'Kitchen',
        img: kitchen,
        numOfDevices: 24,
        temperature: 20
    },
    {
        name: 'Bed room',
        img: bedRoom,
        numOfDevices: 1,
        temperature: 20
    },
    {
        name: 'Studio room',
        img: studioRoom,
        numOfDevices: 1,
        temperature: 20
    },
    {
        name: 'Studio room',
        img: studioRoom,
        numOfDevices: 1,
        temperature: 20
    },
    {
        name: 'Studio room',
        img: studioRoom,
        numOfDevices: 1,
        temperature: 20
    },
    {
        name: 'Studio room',
        img: studioRoom,
        numOfDevices: 1,
        temperature: 20
    }
]

const Home = ({ navigation }) => {
    return (
        <BackGround>
       
            <View className="flex flex-col h-screen ">
            
                <StyledComponent component={View} className="items-center h-full w-full pt-12 px-2">
                    <Header/>
                
                    <View className="flex flex-row justify-between px-4 w-full pt-8">
                        <Text className="flex text-[#414141] font-medium opacity-80 text-base">All rooms ({Rooms.length})</Text>
                        <View className="flex flex-row gap-x-2 items-center">
                            <Text className="flex text-[#414141] font-medium opacity-80 text-base">Add room</Text>
                            <StyledComponent component={Image} className="object-cover opacity-90" 
                                source={require('../img/Add_ring.png')}></StyledComponent>
                        </View>
                        
                    </View>
                    <ScrollView className="h-full mb-4">
                        <View className='flex flex-wrap flex-row grid-cols-2 gap-4 items-center mx-auto mt-2'>
                            {Rooms.map((item, index) => ( 
                                <Pressable 
                                    className='border border-2 border-[#12BEF6] rounded-xl py-4 px-5 bg-white w-[45%]' 
                                    key={index} 
                                    style={styles.shadow}
                                    onPress={() => navigation.navigate('Room', {id: index})}
                                >
                                    <Image source={item.img}></Image>
                                    <Text className='text-[#3D3D3D] font-bold text-lg py-2'>{item.name}</Text>
                                    <Text className='text-[#7D7D7D] pb-2'>{item.numOfDevices} devices</Text>
                                    <Text className='text-[#7D7D7D] pb-8'>Temperature: {item.temperature} °C</Text>
                                </Pressable>
                            ))}
                        </View>
                    </ScrollView>
            
                </StyledComponent>

                <Footer/>

            </View>
          


        </BackGround>
    );
}

export default Home;
