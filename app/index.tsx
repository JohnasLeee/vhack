import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "@/components/Text";
import "../global.css";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import HighlightComponent from "@/components/HighlightComponent";

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
    <ScrollView className="flex-1">
      <LinearGradient
        // Background Linear Gradient
        colors={["#0A243B", "#4E5F69"]}
        start={{ x: 0.13, y: 0.3 }}
        end={{ x: 0.66, y: 1 }}
        style={styles.background}
      />
      <View className="flex-1">
        <View className="flex text-center flex-row gap-4 m-4 mb-0 items-center">
          <View className="bg-white w-12 h-12 p-2 rounded-full flex justify-center items-center">
            <FontAwesome name="user" size={24} color="black" />
          </View>
          <Text className="text-white font-bold text-xl">Ng Young Shung</Text>
        </View>
        <View className="flex bg-white m-4 px-4 py-3 rounded-lg">
          <Text className="font-bold">Announcement</Text>
          <Text>
            With flu cases on the rise, protect yourself and those around you by
            getting your flu shot at our hospital!
          </Text>
        </View>
        <View className="flex mt-4 m-8 gap-6 items-center">
          <View className="flex flex-row gap-4">
            <NavItem
              icon={<AntDesign name="calendar" size={42} color="black" />}
              text="Book an Appointment"
              onPress={() => router.push("/(tabs)")}
            />
            <NavItem
              icon={<Ionicons name="document-text" size={42} color="black" />}
              text="Access Medical Records"
              onPress={() => router.push("/medicalReport")}
            />
            <NavItem
              icon={<FontAwesome6 name="user-doctor" size={42} color="black" />}
              text="Current Appointment"
              onPress={() => router.push("/current-appointment")}
            />
          </View>
          <View className="flex flex-row gap-4">
            <NavItem
              icon={<FontAwesome6 name="money-bills" size={36} color="black" />}
              text="Manage Bills & Payments"
              onPress={() => router.push("/bills-management")}
            />
            <NavItem
              icon={
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={42}
                  color="black"
                />
              }
              text="Medicine Checker"
              onPress={() => router.push("/medicine")}
            />
            <NavItem
              icon={
                <MaterialIcons name="meeting-room" size={42} color="black" />
              }
              text="Online Consultation"
              onPress={() => router.push("/teleconsultation")}
            />
          </View>
        </View>
        <View className="mt-24 mb-32">
          <Text className="text-xl font-bold mx-6">Highlights</Text>
          <ScrollView
            className="px-4 pt-4"
            contentContainerStyle={{ gap: 16, paddingEnd: 32 }}
            horizontal
          >
            <HighlightComponent
              imageUri="https://freerangestock.com/sample/162681/senior-friends-enjoying-a-joke.jpg"
              text="Year-end health screening promo"
            />
            <HighlightComponent
              imageUri="https://cdn12.picryl.com/photo/2016/12/31/diabetes-blood-sugar-diabetic-science-technology-d929ab-1024.jpg"
              text="Diabetes Management"
            />
            <HighlightComponent
              imageUri="https://images.pexels.com/photos/6029056/pexels-photo-6029056.jpeg"
              text="Flu prevention: Everything you need to know"
            />
          </ScrollView>
        </View>
      </View>
    </ScrollView>
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
