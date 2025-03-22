import React from 'react';
import { Stack } from 'expo-router';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      details: { title: string };
    }
  }
}

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
        name='index'
        options={{
          title: 'Reports'
        }}
      />
      <Stack.Screen 
        name='details'
        options={({ route }) => ({
          title: (route.params as { title: string } | undefined)?.title || 'Report Details',
          headerStyle:{
            backgroundColor: "white"
          }
        })}
      />
    </Stack>
  );
}