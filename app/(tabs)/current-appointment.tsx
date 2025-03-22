import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { DoctorComponent } from "@/components/DoctorComponent";
import { Doctors } from "@/constants/Doctors";

const Appointment = () => {
  return (
    <View className="flex-1 gap-6 p-6 bg-white">
      <View>
        <Text className="font-bold text-xl">My Doctors</Text>
        <View className="flex flex-col gap-4 my-4">
          {Doctors.map((doctor) => (
            <DoctorComponent
              key={doctor.name}
              url={doctor.url}
              name={doctor.name}
              specialization={doctor.specialization}
              phone={doctor.phone}
            />
          ))}
        </View>
      </View>

      <View>
        <Text className="font-bold text-xl">My Appointments</Text>
        <View className="flex flex-col gap-4 my-4">
          <TouchableOpacity className="flex flex-col gap-2 p-4 rounded-2xl elevation bg-slate-100">
            <Text className="text-md font-bold">12th June 2025, 2:30 PM</Text>
            <Text className="text-md">Dr. Jane Doe (Room 101)</Text>
            <Text>Type: Follow-up</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex flex-col gap-2 p-4 rounded-2xl elevation bg-slate-100">
            <Text className="text-md font-bold">15th June 2025, 3:00 PM</Text>
            <Text className="text-md">Dr. John Smith (Room 202)</Text>
            <Text>Type: Medical Examination</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-center text-sm">
          Click an appointment to cancel.
        </Text>
      </View>
    </View>
  );
};

export default Appointment;
