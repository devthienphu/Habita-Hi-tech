import {View, Text, Image, ScrollView,Button,TouchableOpacity,TextInput, Pressable} from 'react-native';
import { StyledComponent } from "nativewind";
import React from 'react';
import BackGround from '../components/background';
import Header from '../components/header';
import Footer from '../components/footer';

import bedRoom from '../img/bedRoom.png';
import livingRoom from '../img/livingRoom.png';
import kitchen from '../img/kitchen.png';
import studioRoom from '../img/studioRoom.png';

import temperatureImg from '../img/temper.png'
import intensityImg from '../img/inten.png'
import bluePlus from '../img/Add_square.png'

import fanIcon from '../img/fanIcon.png'
import rightArrow from '../img/rightArrow.png'

import styles from '../style'

const Rooms = [
  {
      name: 'Living room',
      img: livingRoom,
      device: ['Main light', 'Corner light', 'Fan','Main light', 'Corner light', 'Fan'],
      temperature: 20,
      intensity: 5,
  },
  {
      name: 'Kitchen',
      img: kitchen,
      device: ['Main light', 'Corner light', 'Fan'],
      temperature: 20,
      intensity: 5,
  },
  {
      name: 'Bed room',
      img: bedRoom,
      device: ['Main light', 'Corner light', 'Fan'],
      temperature: 20,
      intensity: 5,
  },
  {
      name: 'Studio room',
      img: studioRoom,
      device: ['Main light', 'Corner light', 'Fan'],
      temperature: 20,
      intensity: 5,
  },
  {
      name: 'Studio room',
      img: studioRoom,
      device: ['Main light', 'Corner light', 'Fan'],
      temperature: 20,
      intensity: 5,
  },
  {
      name: 'Studio room',
      img: studioRoom,
      device: ['Main light', 'Corner light', 'Fan'],
      temperature: 20,
      intensity: 5,
  },
  {
      name: 'Studio room',
      img: studioRoom,
      device: ['Main light', 'Corner light', 'Fan'],
      temperature: 20,
      intensity: 5,
  }
]

const Room = ({ route }) => {
  const { id } = route.params
  return (
    <BackGround>
      <View className="flex flex-col h-screen ">

        <StyledComponent component={View} className="h-full w-full pt-12 px-2">
          <Header/>

          <View className='bg-[#E0F2F8] w-[95%] rounded-2xl mx-auto my-8' style={styles.shadow}>

            <View className='bg-[#12BEF6] px-2 rounded-2xl py-4' style={styles.shadow}>
              <View className='flex flex-row items-center px-4'>
                <Text className='text-white font-bold text-xl tracking-wider pr-2'>{Rooms[id].name}</Text>
                <Image source={Rooms[id].img}></Image>
              </View>

              <Text className='text-white tracking-wider px-4 text-base'>{Rooms[id].device.length} devices</Text>

              <View className='flex flex-row justify-around pt-6'>

                <View className='flex flex-col w-[48%]' style={styles.shadow}>
                  <View className='flex flex-row bg-[#68C9E9] rounded-t-xl justify-center py-4'>
                    <Text className='text-white font-bold text-sm tracking-wider'>Temperature</Text>
                    <Image source={temperatureImg}></Image>
                  </View>
                  <View className='bg-white rounded-b-xl items-center my-auto py-4'>
                    <Text className='text-[#414141] text-xl font-medium'>{Rooms[id].temperature} °C</Text>
                  </View>
                </View>

                <View className='flex flex-col w-[48%]' style={styles.shadow}>
                  <View className='flex flex-row bg-[#3A9DBD] rounded-t-xl justify-center py-4'>
                    <Text className='text-white font-bold text-sm tracking-wider pr-1'>Light Intensity</Text>
                    <Image source={intensityImg}></Image>
                  </View>
                  <View className='bg-white rounded-b-xl items-center my-auto py-4'>
                    <Text className='text-[#414141] text-xl font-medium'>{Rooms[id].intensity} cd</Text>
                  </View>
                </View>

              </View>
            </View>

            <View className='flex flex-row justify-center items-center py-3'>
              <Image source={bluePlus}></Image>
              <Text className='text-[#04C1FE] font-semibold text-base tracking-wider'>Add new device</Text>
            </View>

          </View>

          <Text className="text-[#414141] font-medium opacity-80 text-base px-6 pb-4">All devices ({Rooms[id].device.length})</Text>
          
          <ScrollView className="h-full px-4">
            <View className='flex items-center gap-4 mb-6'>
              {Rooms[id].device.map((item, index) => (
                <Pressable
                  className='flex flex-row justify-between items-center w-[92%] border border-[#12BEF6] border-2 rounded-xl bg-white py-2 px-6'
                  key={index}
                  style={styles.shadow}
                >
                  <View className='flex flex-row items-center'>
                    <Image source={fanIcon}></Image>
                    <Text className='text-[#414141] font-medium opacity-80 text-base tracking-wider px-2'>{item}</Text>
                  </View>

                  <Image source={rightArrow}></Image>

                </Pressable>
              ))}
            </View>
          </ScrollView>

        </StyledComponent>

        <Footer/>

      </View>
    </BackGround>
  )
}

export default Room