import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: '#fbbf24',
        },
        headerTintColor: '#374151',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}>
      <Stack.Screen 
        name="index"
        options={{
          title: 'Bills & Payments'
        }}
      />
    </Stack>
  );
} 