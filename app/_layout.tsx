import React from "react";
import { Stack } from "expo-router";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import AccessibilityProvider from "@/components/AccessibilityTabs";
import { TextProvider } from "@/components/Text";

export default function RootLayout() {
  return (
    <Stack
      layout={({ children }) => {
        return (
          <TextProvider>
            <AccessibilityProvider>{children}</AccessibilityProvider>
          </TextProvider>
        );
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="medicalReport" options={{ headerShown: false }} />
      <Stack.Screen name="bills-management" options={{ headerShown: false }} />
      <Stack.Screen
        name="(tabs)"
        options={
          {
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#fbbf24",
            },
            headerTintColor: "#374151",
            headerTitleStyle: {
              fontWeight: "600",
            },
            title: "Appointments",
          } as NativeStackNavigationOptions
        }
      />
      <Stack.Screen
        name="medicine"
        options={
          {
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#fbbf24",
            },
            headerTintColor: "#374151",
            headerTitleStyle: {
              fontWeight: "600",
            },
            title: "Medicine Tracker",
          } as NativeStackNavigationOptions
        }
      />
      <Stack.Screen
        name="teleconsultation/index"
        options={
          {
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#fbbf24",
            },
            headerTintColor: "#374151",
            headerTitleStyle: {
              fontWeight: "600",
            },
            title: "Teleconsultation",
          } as NativeStackNavigationOptions
        }
      />
      <Stack.Screen
        name="teleconsultation/call"
        options={
          {
            headerShown: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#fbbf24",
            },
            headerTintColor: "#374151",
            headerTitleStyle: {
              fontWeight: "600",
            },
            title: "Teleconsultation",
          } as NativeStackNavigationOptions
        }
      />
    </Stack>
  );
}
