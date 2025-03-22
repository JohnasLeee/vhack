import React from 'react';
import { Stack } from 'expo-router';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="medicalReport" 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="bills-management" 
        options={{ headerShown: false }} 
      />
      {/* <Stack.Screen 
        name="teleconsultation" 
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fbbf24',
          },
          headerTintColor: '#374151',
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'Teleconsultation',
        }} 
      /> */}
      <Stack.Screen 
        name="appointment" 
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fbbf24',
          },
          headerTintColor: '#374151',
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'Appointments',
        } as NativeStackNavigationOptions} 
      />
        <Stack.Screen 
          name="medicine" 
          options={{
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: '#fbbf24',
            },
            headerTintColor: '#374151',
            headerTitleStyle: {
              fontWeight: '600',
            },
            title: 'Medicine Tracker',
          } as NativeStackNavigationOptions} 
        />
      <Stack.Screen 
        name="current-appointment" 
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fbbf24',
          },
          headerTintColor: '#374151',
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'Current Appointment',
        } as NativeStackNavigationOptions} 
      />
      <Stack.Screen 
        name="teleconsultation" 
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#fbbf24',
          },
          headerTintColor: '#374151',
          headerTitleStyle: {
            fontWeight: '600',
          },
          title: 'Teleconsultation',
        } as NativeStackNavigationOptions} 
      />
    </Stack>
  );
}
