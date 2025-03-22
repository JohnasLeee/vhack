import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { DoctorComponent } from '@/components/DoctorComponent'

const Teleconsultation = () => {
  return (
      <View className="flex-1 gap-6 p-6 bg-white">
        <DoctorComponent
          url="https://i0.pickpik.com/photos/607/614/347/nurse-medicine-doctor-hospital-preview.jpg"
          name="Dr. Jane Doe"
          specialization="General Practitioner"
          phone="011-456 7890"
        />

        <Text className='text-md mx-8 text-center'>You're about to have a tele-consultation with <Text className='font-bold'>Dr. Jane Doe</Text>. Get ready!</Text>
  
        <View className='flex flex-col gap-4'>
          <View className='flex flex-col gap-2'>
            <Text className='font-bold text-lg'>Name</Text>
            <TextInput
              placeholder=""
              className="border bg-white rounded-xl p-4 text-lg elevation"
            />
          </View>
          <View className='flex flex-col gap-2'>
            <Text className='font-bold text-lg'>Room Code</Text>
            <TextInput
              placeholder=""
              className="border bg-white rounded-xl p-4 text-lg elevation"
            />
          </View>
        </View>


      <View>
        <TouchableOpacity className="flex flex-row gap-4 p-4 rounded-2xl elevation justify-center items-center bg-yellow-600">
          <View>
            <Text className="font-bold text-xl text-white">
              Test Room
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
  )
}

export default Teleconsultation