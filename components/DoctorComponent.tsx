import { Image, TouchableOpacity, View } from "react-native";
import Text from "@/components/Text";

interface DoctorComponentProps {
  url: string;
  name: string;
  specialization: string;
  phone: string;
}

export const DoctorComponent = ({
  url,
  name,
  specialization,
  phone,
}: DoctorComponentProps) => {
  return (
    <TouchableOpacity
      className="flex flex-row gap-4 p-4 rounded-2xl elevation items-center bg-slate-100"
      onPress={() => console.log("Doctor")}
    >
      <View>
        <Image
          source={{
            uri: url,
          }}
          className="w-24 h-24 rounded-xl mr-4"
        />
      </View>
      <View>
        <Text className="font-bold text-xl">{name}</Text>
        <Text className="text-md">{specialization}</Text>
        <Text className="text-md">{phone}</Text>
      </View>
    </TouchableOpacity>
  );
};