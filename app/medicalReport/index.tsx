import React, { useState } from 'react';
import { View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import Text from "@/components/Text";
import { AntDesign } from '@expo/vector-icons';

// Add type for medical report data
type MedicalReportData = {
  height: string;
  weight: string;
  bmi: string;
  bp: string;
  pulse: string;
  tests: {
    category: string;
    items: Array<{
      name: string;
      result: string;
      unit: string;
      range: string;
    }>;
  }[];
};

const MedicalReport = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'history'>('profile');
  const [expandedItems, setExpandedItems] = useState<{[key: string]: boolean}>({});

  // Dummy data for reports
  const reports = [
    { report: 'Blood Test Results', date: '15 Mar 2024' },
    { report: 'Annual Check-up', date: '28 Feb 2024' },
    { report: 'Cardiology Report', date: '15 Jan 2024' },
    { report: 'X-Ray Results', date: '05 Jan 2024' },
    { report: 'Diabetes Screening', date: '20 Dec 2023' },
    { report: 'Diabetes Screening', date: '20 Dec 2023' },
    { report: 'Diabetes Screening', date: '20 Dec 2023' },
    { report: 'Diabetes Screening', date: '20 Dec 2023' },
    { report: 'Vision Test', date: '10 Dec 2023' },
    { report: 'Vision Test', date: '10 Dec 2023' },
    { report: 'Vision Test', date: '10 Dec 2023' },
    { report: 'Vision Test', date: '10 Dec 2023' },
    { report: 'Vision Test', date: '10 Dec 2023' },
  ];

  // Dummy data for medical history
  const medicalHistory = {
    Eyes: [
      'Myopia (-2.50)',
      'Regular eye check-ups',
      'Regular eye check-ups',
      'Regular eye check-ups',
      'Wears prescription glasses'
    ],
    Liver: [
      'Myopia (-2.50)',
      'Regular eye check-ups',
      'Regular eye check-ups',
      'Regular eye check-ups',
      'Wears prescription glasses'
    ],
    Genital: [
      'Erectile dysfunction',
      'Prescribed Viagra 50mg',
      'Monthly check-up required'
    ],
    Knees: [
      'Regular screening',
      'No abnormalities detected',
      'Annual ultrasound recommended'
    ]
  };

  // Add detailed report data
  const detailedReports: { [key: string]: MedicalReportData } = {
    'Blood Test Results': {
      height: '1 cm',
      weight: '203 kg',
      bmi: '182778.3',
      bp: '69/420',
      pulse: '453456',
      tests: [
        {
          category: 'HAEMATOLOGY',
          items: [
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
          ]
        },
        {
          category: 'HAEMATOLOGY',
          items: [
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
            { name: 'ESR', result: '18.4', unit: 'g/mol', range: '10.3-22.5' },
          ]
        }
      ]
    }
    // Add more detailed reports as needed
  };

  const toggleExpand = (key: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleReportPress = (report: string) => {
    if (detailedReports[report]) {
      router.push({
        pathname: "/medicalReport/details",
        params: { 
          title: report,
          data: JSON.stringify(detailedReports[report])
        }
      });
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Top bar with Reports title */}
      {/* <View className="bg-amber-400 p-4 items-center">
        <Text className="text-xl font-semibold text-gray-700">
          {activeTab === 'history' ? 'Report Luke Emia' : 'Reports'}
        </Text>
      </View> */}

      {/* User info section */}
      <View className="bg-amber-400 px-4 pb-4">
        <View className="flex-row items-center mb-2">
          <Image
            source={{ uri: 'https://cdn9.dissolve.com/p/D943_18_217/D943_18_217_1200.jpg' }}
            className="w-12 h-12 rounded-full mr-4"
          />
          <View>
            <Text className="text-gray-700 text-xl font-semibold">
              Brendan Lai Young Shung
            </Text>
            <Text className="text-gray-700 text-sm">69.42 years old</Text>
          </View>
        </View>

        {/* Tab toggles */}
        <View className="flex-row justify-evenly w-full pt-4">
          <TouchableOpacity
            onPress={() => setActiveTab('profile')}
            className=""
          >
            <Text
              className={`text-base ${
                activeTab === 'profile' ? 'text-black font-bold' : 'text-gray-700'
              }`}
            >
              Profile
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActiveTab('history')}
          >
            <Text
              className={`text-base ${
                activeTab === 'history' ? 'text-black font-bold' : 'text-gray-700'
              }`}
            >
              Medical History
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main content area */}
      {activeTab === 'profile' ? (
        <View className="flex-1 px-4 pt-4">
          {/* Search input */}
          <View className="mb-4">
            <TextInput
              placeholder="Search for reports"
              placeholderTextColor="#666"
              className="border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-700"
            />
          </View>

          {/* Reports table */}
          <View className="flex-1 bg-gray-50 rounded-lg">
            <View className="flex-row justify-between p-4 bg-gray-100 rounded-t-lg">
              <Text className="font-semibold text-gray-700">Report</Text>
              <Text className="font-semibold text-gray-700">Date</Text>
            </View>
            
            <ScrollView>
              {reports.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleReportPress(item.report)}
                  className="flex-row justify-between p-4 border-b border-gray-200"
                >
                  <Text className="text-gray-700">{item.report}</Text>
                  <Text className="text-gray-700">{item.date}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      ) : (
        // Medical History View
        <ScrollView className="flex-1 px-4 pt-4">
          <View className="space-y-3">
            {Object.entries(medicalHistory).map(([category, items]) => (
              <View key={category} className="my-4 bg-white rounded-lg shadow border border-black">
                <TouchableOpacity
                  onPress={() => toggleExpand(category)}
                  className="flex-row justify-between items-center p-4"
                >
                  <Text className="text-gray-700 text-lg text-center">{category}</Text>
                  <AntDesign 
                    name={expandedItems[category] ? "down" : "right"} 
                    size={24} 
                    color="#374151"
                  />
                </TouchableOpacity>
                {expandedItems[category] && (
                  <View className="px-4 pb-4">
                    {items.map((item, index) => (
                      <Text key={index} className="text-gray-600 py-1">
                        • {item}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default MedicalReport;