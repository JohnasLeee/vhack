import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "../global.css";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const NavItem = ({
  icon,
  text,
  onPress,
}: {
  icon: JSX.Element;
  text: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 items-center text-center gap-2"
    >
      <View className="bg-white rounded-full flex justify-center items-center w-24 h-24">
        {icon}
      </View>
      <Text className="text-white text-center">{text}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <View className="p-0 flex">
      <LinearGradient
        // Background Linear Gradient
        colors={["#0A243B", "#4E5F69"]}
        start={{ x: 0.13, y: 0.3 }}
        end={{ x: 0.66, y: 1 }}
        style={styles.background}
      />
      <View className="flex">
        <View className="flex text-center flex-row gap-4 m-4 mb-0 items-center">
          <View className="bg-white w-12 h-12 p-2 rounded-full flex justify-center items-center">
            <FontAwesome name="user" size={24} color="black" />
          </View>
          <Text className="text-white font-bold text-xl">Ng Young Shung</Text>
        </View>
        <View className="flex bg-white m-4 p-4 rounded-lg">
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            porro maiores enim voluptatum, architecto iusto.
          </Text>
        </View>
        <View className="flex mt-4 m-8 gap-6 items-center">
          <View className="flex flex-row gap-4">
            <NavItem
              icon={<AntDesign name="calendar" size={42} color="black" />}
              text="Book an Appointment"
              onPress={() => console.log("Icon 1 pressed")}
            />
            <NavItem
              icon={<Ionicons name="document-text" size={42} color="black" />}
              text="Access Medical Records"
              onPress={() => console.log("Icon 2 pressed")}
            />
            <NavItem
              icon={<FontAwesome6 name="user-doctor" size={42} color="black" />}
              text="Find a Specialist"
              onPress={() => console.log("Icon 3 pressed")}
            />
          </View>
          <View className="flex flex-row gap-4">
            <NavItem
              icon={<FontAwesome6 name="money-bills" size={36} color="black" />}
              text="Manage Bills & Payments"
              onPress={() => console.log("Icon 4 pressed")}
            />
            <NavItem
              icon={
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={42}
                  color="black"
                />
              }
              text="Daily Meal Order"
              onPress={() => console.log("Icon 5 pressed")}
            />
            <NavItem
              icon={
                <MaterialIcons name="meeting-room" size={42} color="black" />
              }
              text="Online Consultation"
              onPress={() => console.log("Icon 6 pressed")}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: "200%",
    height: 550,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 350,
    elevation: 15,
    zIndex: -1,
  },
});
