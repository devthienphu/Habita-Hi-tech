import React from 'react';
import {View, Text, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from '../style'

import home from '../img/home.png'
import statistic from '../img/static.png'
import user from '../img/user.png'
import setting from '../img/setting.png'
import logo from '../img/logo.png'
import back from '../img/back.png'
import bolt from '../img/bolt.png'
import exit from '../img/exit.png'

const MenuSide = () => {
  const navigation = useNavigation()

  return (
    <View className='z-50 w-full h-full absolute left-0 top-[-10]'>
      <View className='bg-white w-4/5 h-screen px-4 py-16' style={styles.shadow}>
        <View className='flex flex-row justify-between items-center'>
          <View className='flex flex-row items-center gap-x-3'>
            <Image source={logo}></Image>
            <Text className='text-[#1289F6] font-black text-xl opacity-90 tracking-wide'>High-tech Habitat</Text>
          </View>
          <Image source={back} className='scale-75 opacity-80'></Image>
        </View>

        <View className='flex gap-y-6 mt-4 px-4'>
          <View className='flex flex-row gap-x-4 items-center'>
            <Image source={home} className='scale-[1.25] w-[24]'></Image>
            <Text className='text-[#333333] font-medium text-lg tracking-wider'>Home</Text>
          </View>

          <View className='flex flex-row gap-x-4 items-center'>
            <Image source={user} className='scale-[1.25] w-[24]'></Image>
            <Text className='text-[#333333] font-medium text-lg tracking-wider'>Profile</Text>
          </View>

          <View className='flex flex-row gap-x-4 items-center'>
            <Image source={statistic} className='scale-[1.25] w-[24]'></Image>
            <Text className='text-[#333333] font-medium text-lg tracking-wider'>Statistic</Text>
          </View>

          <View className='flex flex-row gap-x-4 items-center'>
            <Image source={setting} className='scale-[1.25] w-[24]'></Image>
            <Text className='text-[#333333] font-medium text-lg tracking-wider'>Setting</Text>
          </View>

          <View className='flex flex-row gap-x-4 items-center'>
            <Image source={bolt} className='scale-[1.25] w-[24]'></Image>
            <Text className='text-[#FF4A00] font-medium text-lg tracking-wider'>Update to pro</Text>
          </View>

          <View className='flex flex-row gap-x-4 items-center py-4 border-[#7a7a7a] border-t-2 border-dotted'>
            <Image source={exit} className='scale-[1.25] w-[24]'></Image>
            <Text className='text-[#333333] font-medium text-lg tracking-wider'>Logout</Text>
          </View>

        </View>
      </View>
    </View>
  )
}

export default MenuSide