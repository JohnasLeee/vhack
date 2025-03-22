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
      style={{ width:80 ,backgroundColor: "#EFECEC", }}
    >
      <TouchableOpacity
        className=" rounded-xl w-8 justify-center align-center "
        style={{ backgroundColor: "#DBD7D7" }}
        onPress={decrement}
      >
        <Text style={{ fontWeight:"bold"}}className="text-center ">-</Text>
      </TouchableOpacity>
      <Text  style={{ fontSize:12 ,fontWeight:"bold"}} className="">{count}</Text>
      <TouchableOpacity
        className=" rounded-xl w-8 justify-center align-center"
        style={{ backgroundColor: "#DBD7D7" }}
        onPress={increment}
      >
        <Text style={{fontWeight:"bold"}} className="text-center">+</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main App Component
export default function App() {
  return (
    <ScrollView >
      <View className="p-4">
        <View>
          <Text>Current Medication</Text>
        </View>
        <View  >
          <View
            className="m-2 p-4 rounded-lg shadow-lg flex flex-row"
            style={{ backgroundColor: "" }}
          >
<Text  className="m-2 p-4 ">
            It's time to take your medicine!!!!!</Text>
          </View>
          <View
            className="m-2 p-2 rounded-lg shadow-lg flex flex-row"
            style={{ backgroundColor: "" }}
          >
            <View className="w-full">
              <View className="flex flex-row">
                <Image
                  className="h-16 w-16 m-2 rounded-lg"
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View  className="p-2" style={{width:220 }}>
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{fontWeight:"bold", fontSize:15 }}>Insulin Doses</Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: "6rem", backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <Text className="text-center" style={{ fontSize:11 }}>Before Lunch</Text>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: "6rem", backgroundColor: "#BBAFFF" }}
                    >
                      <Text className="text-center" style={{ fontSize:11 }}>After Lunch</Text>
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
                  className="h-16 w-16 m-2 rounded-lg"
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View  className="p-2" style={{width:220 }}>
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{fontWeight:"bold", fontSize:15 }}>Insulin Doses</Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: "6rem", backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <Text className="text-center" style={{ fontSize:11 }}>Before Lunch</Text>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: "6rem", backgroundColor: "#BBAFFF" }}
                    >
                      <Text className="text-center" style={{ fontSize:11 }}>After Lunch</Text>
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
                  className="h-16 w-16 m-2 rounded-lg"
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View  className="p-2" style={{width:220 }}>
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{fontWeight:"bold", fontSize:15 }}>Insulin Doses</Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: "6rem", backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <Text className="text-center" style={{ fontSize:11 }}>Before Lunch</Text>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: "6rem", backgroundColor: "#BBAFFF" }}
                    >
                      <Text className="text-center" style={{ fontSize:11 }}>After Lunch</Text>
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
                  className="h-16 w-16 m-2 rounded-lg"
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View  className="p-2" style={{width:220 }}>
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{fontWeight:"bold", fontSize:15 }}>Insulin Doses</Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: "6rem", backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <Text className="text-center" style={{ fontSize:11 }}>Before Lunch</Text>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: "6rem", backgroundColor: "#BBAFFF" }}
                    >
                      <Text className="text-center" style={{ fontSize:11 }}>After Lunch</Text>
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