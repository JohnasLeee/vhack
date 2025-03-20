import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// If using SafeAreaView from react-native-safe-area-context, uncomment:
// import { SafeAreaView } from 'react-native-safe-area-context';

const medicalReport = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'history'>('profile');

  return (
    // <SafeAreaView className="flex-1 bg-white">
    <View className="flex-1 bg-white">
      {/* Top bar: Title */}
      <View className="bg-amber-400 p-4 items-center">
        <Text className="text-xl font-bold text-black">Reports</Text>
      </View>

      {/* User info row + Tab toggles */}
      <View className="bg-amber-400 px-4 pb-4">
        {/* User Row */}
        <View className="flex-row items-center mb-2">
          <Image
            source={{ uri: 'https://placehold.co/80x80' }}
            className="w-16 h-16 rounded-full mr-4"
          />
          <View>
            <Text className="text-black text-base font-semibold">
              Brendan Lai Young Shung
            </Text>
            <Text className="text-black text-sm">69 years old</Text>
          </View>
        </View>

        {/* Tab toggles */}
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => setActiveTab('profile')}
            className="mr-4"
          >
            <Text
              className={`text-base font-semibold ${
                activeTab === 'profile' ? 'text-blue-900 underline' : 'text-black'
              }`}
            >
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('history')}
          >
            <Text
              className={`text-base font-semibold ${
                activeTab === 'history' ? 'text-blue-900 underline' : 'text-black'
              }`}
            >
              Medical History
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Render Profile or Medical History based on activeTab */}
      {activeTab === 'profile' ? (
        <View className="flex-1 px-4 mt-4">
          {/* Text input */}
          <View className="mb-4">
            <TextInput
              defaultValue="Sum Ting Wong"
              placeholder="Sum Ting Wong"
              placeholderTextColor="#999999"
              className="border border-pink-400 rounded-md px-3 py-2 text-black"
            />
          </View>

          {/* Simple table */}
          <View className="bg-white shadow-md rounded-md flex-1">
            {/* Table header */}
            <View className="flex-row justify-between border-b border-gray-300 p-3">
              <Text className="font-bold text-black">Report</Text>
              <Text className="font-bold text-black">Date</Text>
            </View>

            {/* Table rows */}
            <ScrollView>
              {Array.from({ length: 6 }).map((_, index) => (
                <View
                  key={index}
                  className="flex-row justify-between border-b border-gray-200 p-3"
                >
                  <Text className="text-black">Report {index + 1}</Text>
                  <Text className="text-black">Date {index + 1}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      ) : (
        // Medical History tab
        <View className="flex-1 px-4 mt-4">
          <Text className="text-xl font-bold text-black mb-4">
            Report Luke Emia
          </Text>

          {/* Example of collapsible items, but here just a static list with an arrow */}
          <View className="space-y-3">
            {['Eyes', 'Cock', 'Balls'].map((item, idx) => (
              <View
                key={idx}
                className="flex-row justify-between items-center bg-white shadow rounded-md p-3"
              >
                <Text className="text-black text-base">{item}</Text>
                <Text className="text-black text-xl">▼</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
    // </SafeAreaView>
  );
};

export default medicalReport;
