import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'

import {images} from '../../constants';
import FormField from '../../components/FormField';


const SignIn = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })


  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">

          <Image source={images.logo} resizeMode='contain' className="w-[115px] h-[35px]" />

          <Text className="text-white text-semibold mt-4 font-psemibold text-medium"> Log into Aora

          </Text>

          

          <FormField 
            title="Email" 
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            />

          <FormField 
            title="Password" 
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
            />
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default SignIn