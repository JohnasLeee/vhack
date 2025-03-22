import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import "../global.css";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View
      className=" h-4 m-2 rounded-xl shadow-lg flex flex-row justify-between align-center"
      style={{ width:"80px",backgroundColor: "#EFECEC", }}
    >
      <TouchableOpacity
        className=" rounded-xl w-8 justify-center align-center "
        style={{ backgroundColor: "#DBD7D7" }}
        onPress={decrement}
      >
        <p style={{ fontWeight:"bold"}}className="text-center ">-</p>
      </TouchableOpacity>
      <p  style={{ fontSize:"12px",fontWeight:"bold"}} className="">{count}</p>
      <TouchableOpacity
        className=" rounded-xl w-8 justify-center align-center"
        style={{ backgroundColor: "#DBD7D7" }}
        onPress={increment}
      >
        <p style={{fontWeight:"bold"}} className="text-center">+</p>
      </TouchableOpacity>
    </View>
  );
};

// Main App Component
export default function App() {
  return (
    <ScrollView >
      <View
        className="p-0 w-full h-24 flex justify-center text-center"
        style={{ backgroundColor: "#E5B83E" }}
      >
        <p>Select Doctor</p>
      </View>
      <View className="p-4">
        <View>
          <Text>Current Medication</Text>
        </View>
        <View  >
          <View
            className="m-2 p-4 rounded-lg shadow-lg flex flex-row"
            style={{ backgroundColor: "" }}
          >
            It's time to take your medicine!!!!!
          </View>
          <View
            className="m-2 p-2 rounded-lg shadow-lg flex flex-row"
            style={{ backgroundColor: "" }}
          >
            <View className="w-full">
              <View className="flex flex-row">
                <Image
                  className="h-16 w-16 m-2"
                  style={{ borderRadius: "4px" }}
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View  className="p-2" style={{width:"220px"}}>
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{fontWeight:"bold", fontSize:"15px"}}>Insulin Doses</Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: "6rem", backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <p className="text-center" style={{ fontSize:"11px"}}>Before Lunch</p>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: "6rem", backgroundColor: "#BBAFFF" }}
                    >
                      <p className="text-center" style={{ fontSize:"11px"}}>After Lunch</p>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            className="m-2 p-2 rounded-lg shadow-lg flex flex-row"
            style={{ backgroundColor: "" }}
          >
            <View className="w-full">
              <View className="flex flex-row">
                <Image
                  className="h-16 w-16 m-2"
                  style={{ borderRadius: "4px" }}
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View  className="p-2" style={{width:"220px"}}>
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{fontWeight:"bold", fontSize:"15px"}}>Insulin Doses</Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: "6rem", backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <p className="text-center" style={{ fontSize:"11px"}}>Before Lunch</p>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: "6rem", backgroundColor: "#BBAFFF" }}
                    >
                      <p className="text-center" style={{ fontSize:"11px"}}>After Lunch</p>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            className="m-2 p-2 rounded-lg shadow-lg flex flex-row"
            style={{ backgroundColor: "" }}
          >
            <View className="w-full">
              <View className="flex flex-row">
                <Image
                  className="h-16 w-16 m-2"
                  style={{ borderRadius: "4px" }}
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View  className="p-2" style={{width:"220px"}}>
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{fontWeight:"bold", fontSize:"15px"}}>Insulin Doses</Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: "6rem", backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <p className="text-center" style={{ fontSize:"11px"}}>Before Lunch</p>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: "6rem", backgroundColor: "#BBAFFF" }}
                    >
                      <p className="text-center" style={{ fontSize:"11px"}}>After Lunch</p>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            className="m-2 p-2 rounded-lg shadow-lg flex flex-row"
            style={{ backgroundColor: "" }}
          >
            <View className="w-full">
              <View className="flex flex-row">
                <Image
                  className="h-16 w-16 m-2"
                  style={{ borderRadius: "4px" }}
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View  className="p-2" style={{width:"220px"}}>
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{fontWeight:"bold", fontSize:"15px"}}>Insulin Doses</Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: "6rem", backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <p className="text-center" style={{ fontSize:"11px"}}>Before Lunch</p>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: "6rem", backgroundColor: "#BBAFFF" }}
                    >
                      <p className="text-center" style={{ fontSize:"11px"}}>After Lunch</p>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles for the Counter Component and App
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
