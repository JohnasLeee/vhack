import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { DoctorComponent } from "@/components/DoctorComponent";

const Appointment = () => {
  return (
    <View className="flex-1 gap-6 p-6 bg-white">
      <View>
        <Text className="font-bold text-xl">My Doctors</Text>
        <View className="flex flex-col gap-4 my-4">
          <DoctorComponent
            url="https://i0.pickpik.com/photos/607/614/347/nurse-medicine-doctor-hospital-preview.jpg"
            name="Dr. Jane Doe"
            specialization="General Practitioner"
            phone="011-456 7890"
          />
          <DoctorComponent
            url="https://images.pexels.com/photos/19438560/pexels-photo-19438560/free-photo-of-doctor.jpeg"
            name="Dr. John Smith"
            specialization="Cardiologist"
            phone="017-654 3210"
          />
        </View>
        <Text className="text-center text-sm">Click a doctor to book an appointment.</Text>
      </View>

      <View>
        <Text className="font-bold text-xl">My Appointments</Text>
        <View className="flex flex-col gap-4 my-4">
          <View className="flex flex-col gap-2 p-4 rounded-2xl elevation bg-slate-100">
            <Text className="text-md font-bold">12th June 2025, 2:30 PM</Text>
            <Text className="text-md">Dr. Jane Doe (Room 101)</Text>
            <Text>Type: Follow-up</Text>
          </View>
          <View className="flex flex-col gap-2 p-4 rounded-2xl elevation bg-slate-100">
            <Text className="text-md font-bold">15th June 2025, 3:00 PM</Text>
            <Text className="text-md">Dr. John Smith (Room 202)</Text>
            <Text>Type: Medical Examination</Text>
          </View>
        </View>
        <Text className="text-center text-sm">Click an appointment to cancel.</Text>
      </View>
    </View>
  );
};

export default Appointment;
