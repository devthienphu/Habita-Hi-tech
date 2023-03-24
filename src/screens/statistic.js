import React from 'react';
import {View, Text, Image, ScrollView, Pressable} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import BackGround from '../components/background';
import Footer from '../components/footer';
import Header from '../components/header';

import light from '../img/light.png';
import temperature from '../img/temperature.png';

import back from '../img/back.png';
import sheld from '../img/sheld.png';
import account from '../img/account.png';
import logout from '../img/logout.png';
import styles from '../style';
const Statistic = () => {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('1 month');
  const [items, setItems] = useState([
    {label: '1 Month', value: '1 month'},
    {label: '6 Months', value: '6 months'},
    {label: '1 year', value: '1 year'},
  ]);

  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items1, setItems1] = useState([
    {label: 'Living room', value: 'living room'},
    {label: 'Bed room', value: 'bed room'},
    {label: 'Studio', value: 'studio'},
  ]);

    return (
      <BackGround>
        <View className="flex flex-col pt-12 justify-between h-screen">
            <View className="flex flex-col px-2 pb-14">
                <Header/>
                {/* Selection */}
                <View className="flex flex-row justify-between px-2 pt-6 z-50">
                <View className="w-2/5">
                  <DropDownPicker
                    open={open1}
                    value={value1}
                    items={items1}
                    setOpen={setOpen1}
                    setValue={setValue1}
                    setItems={setItems1}
                    className="rounded-3xl border border-blue-500"
                  />
                </View>

                <View className="w-2/5">
                  <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    className="rounded-3xl border border-blue-500"
                  />
                </View>

                </View>

                <Image source={temperature} className="w-full my-4"></Image>
                <Image source={light} className="w-full my-4"></Image>

                <Pressable 
                        style={styles.shadow} 
                        className="bg-[#48D0FE] rounded-2xl w-fit items-center mx-16 py-2 mt-6"
                    >
                        <Text className="text-xl font-bold text-white">Generate report</Text>
                </Pressable>
                
            </View>


            <Footer/>
        </View>
      </BackGround>
    );
}

export default Statistic;
