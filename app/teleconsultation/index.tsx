import { View, TextInput, TouchableOpacity } from "react-native";
import Text from "@/components/Text";
import React from "react";
import { DoctorComponent } from "@/components/DoctorComponent";
import { Picker } from "@react-native-picker/picker";
import { Doctors } from "@/constants/Doctors";
import { router } from "expo-router";

const Teleconsultation = () => {
  const [selectedDoctor, setSelectedDoctor] = React.useState("");

  return (
    <View className="flex-1 p-6 bg-white gap-2">
      <Text className="font-bold text-lg">Your Doctors</Text>

      <View className="border bg-white rounded-xl elevation">
        <Picker
          selectedValue={selectedDoctor}
          onValueChange={(itemValue) => setSelectedDoctor(itemValue)}
        >
          <Picker.Item label="Select a doctor..." value="" />
          {Doctors.map((doctor) => (
            <Picker.Item
              label={doctor.name}
              value={doctor.name}
              key={doctor.name}
            />
          ))}
        </Picker>
      </View>

      <View className="flex flex-col gap-4 py-4">
        <DoctorComponent
          url={
            Doctors.find((doctor) => doctor.name === selectedDoctor)?.url || ""
          }
          name={selectedDoctor}
          specialization={
            Doctors.find((doctor) => doctor.name === selectedDoctor)
              ?.specialization || ""
          }
          phone={
            Doctors.find((doctor) => doctor.name === selectedDoctor)?.phone ||
            ""
          }
        />
      </View>

      <Text className="text-md mx-8 text-center">
        You're about to have a tele-consultation with{" "}
        <Text className="font-bold">
          {selectedDoctor === "" ? "a doctor" : selectedDoctor}
        </Text>
        . Get ready!
      </Text>

      <View className="flex flex-col gap-4">
        <View className="flex flex-col gap-2">
          <Text className="font-bold text-lg">Name</Text>
          <TextInput
            placeholder=""
            className="border bg-white rounded-xl p-4 text-lg elevation"
          />
        </View>
        <View className="flex flex-col gap-2">
          <Text className="font-bold text-lg">Room Code</Text>
          <TextInput
            placeholder=""
            className="border bg-white rounded-xl p-4 text-lg elevation"
          />
        </View>
      </View>

      <View>
        <TouchableOpacity
          className="flex flex-row gap-4 p-4 rounded-2xl elevation justify-center items-center bg-yellow-600"
          onPress={() => router.push("/teleconsultation/call")}
        >
          <View>
            <Text className="font-bold text-xl text-white">Start Consultation</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Teleconsultation;
