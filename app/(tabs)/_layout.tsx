import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: "#fbbf24",
          },
        }),
        tabBarPosition: 'top',
      }}>
      <Tabs.Screen
        name="current-appointment"
        options={{
          title: 'Current',
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons size={24} name={focused ? "file-document-multiple" : "file-document-multiple-outline"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'New',
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons size={24} name={focused ? "clipboard-plus" : "clipboard-plus-outline"} color={color} />,
        }}
      />
    </Tabs>
  );
}
