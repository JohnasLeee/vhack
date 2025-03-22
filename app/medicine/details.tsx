import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Import the type
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

const dummyReportData: MedicalReportData = {
  height: "175",
  weight: "68.5",
  bmi: "22.4",
  bp: "120/80",
  pulse: "72",
  tests: [
    {
      category: "HAEMATOLOGY",
      items: [
        { name: "Haemoglobin", result: "14.2", unit: "g/dL", range: "13.0-17.0" },
        { name: "RBC Count", result: "5.1", unit: "x10^12/L", range: "4.5-5.5" },
        { name: "WBC Count", result: "7.8", unit: "x10^9/L", range: "4.0-11.0" },
        { name: "Platelets", result: "250", unit: "x10^9/L", range: "150-400" },
        { name: "Hematocrit", result: "42", unit: "%", range: "40-50" }
      ]
    },
    {
      category: "BIOCHEMISTRY",
      items: [
        { name: "Glucose Fasting", result: "5.2", unit: "mmol/L", range: "3.9-5.5" },
        { name: "Creatinine", result: "85", unit: "µmol/L", range: "62-106" },
        { name: "Total Cholesterol", result: "4.8", unit: "mmol/L", range: "< 5.2" },
        { name: "HDL Cholesterol", result: "1.4", unit: "mmol/L", range: "> 1.0" },
        { name: "LDL Cholesterol", result: "2.8", unit: "mmol/L", range: "< 3.4" }
      ]
    },
    {
      category: "LIVER FUNCTION",
      items: [
        { name: "Total Bilirubin", result: "15", unit: "µmol/L", range: "3-21" },
        { name: "ALT", result: "25", unit: "U/L", range: "10-40" },
        { name: "AST", result: "22", unit: "U/L", range: "10-35" },
        { name: "Alkaline Phosphatase", result: "75", unit: "U/L", range: "40-130" },
        { name: "Total Protein", result: "72", unit: "g/L", range: "64-83" }
      ]
    },
    {
      category: "THYROID FUNCTION",
      items: [
        { name: "TSH", result: "2.1", unit: "mIU/L", range: "0.4-4.0" },
        { name: "Free T4", result: "15", unit: "pmol/L", range: "10-20" },
        { name: "Free T3", result: "4.8", unit: "pmol/L", range: "3.5-6.5" }
      ]
    },
    {
      category: "ELECTROLYTES",
      items: [
        { name: "Sodium", result: "140", unit: "mmol/L", range: "135-145" },
        { name: "Potassium", result: "4.0", unit: "mmol/L", range: "3.5-5.0" },
        { name: "Chloride", result: "102", unit: "mmol/L", range: "98-106" },
        { name: "Bicarbonate", result: "24", unit: "mmol/L", range: "22-29" }
      ]
    }
  ]
};

export default function ReportDetails() {
  const { title, data } = useLocalSearchParams();
  // For demo purposes, using dummy data instead of passed data
  const reportData: MedicalReportData = dummyReportData;

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        {/* Basic Info */}
        <View className="flex-row justify-between mb-4">
          <View className="flex-1">
            <Text className="text-gray-600">Height (cm)</Text>
            <Text className="text-black font-bold">{reportData.height}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-gray-600">Weight (kg)</Text>
            <Text className="text-black font-bold">{reportData.weight}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-gray-600">BMI</Text>
            <Text className="text-black font-bold">{reportData.bmi}</Text>
          </View>
        </View>

        <View className="flex-row justify-between mb-6">
          <View className="flex-1">
            <Text className="text-gray-600">Blood Pressure</Text>
            <Text className="text-black font-bold">{reportData.bp}</Text>
          </View>
          <View className="flex-1">
            <Text className="text-gray-600">Pulse (bpm)</Text>
            <Text className="text-black font-bold">{reportData.pulse}</Text>
          </View>
        </View>

        {/* Test Results */}
        {reportData.tests.map((category, index) => (
          <View key={index} className="mb-6">
            <Text className="text-lg font-bold mb-2">{category.category}</Text>
            <View className="flex-row justify-between mb-2 px-2">
              <Text className="w-1/3 font-semibold">Test Name</Text>
              <Text className="w-1/5 font-semibold text-right">Result</Text>
              <Text className="w-1/5 font-semibold text-center">Unit</Text>
              <Text className="w-1/4 font-semibold text-right">Range</Text>
            </View>
            {category.items.map((item, idx) => (
              <View key={idx} className="flex-row justify-between px-2 py-1 border-b border-gray-200">
                <Text className="w-1/3">{item.name}</Text>
                <Text className="w-1/5 text-right">{item.result}</Text>
                <Text className="w-1/5 text-center">{item.unit}</Text>
                <Text className="w-1/4 text-right">{item.range}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}