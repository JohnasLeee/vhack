import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import Text from "@/components/Text";
import { useState,useEffect } from "react";

// Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <View
      className=" h-6 m-4 rounded-xl shadow-lg flex flex-row justify-between align-center"
      style={{ width: 80, backgroundColor: "#EFECEC" }}
    >
      <TouchableOpacity
        className=" rounded-xl w-8 justify-center align-center "
        style={{ backgroundColor: "#DBD7D7" }}
        onPress={decrement}
      >
        <Text style={{ fontWeight: "bold" }} className="text-center ">
          -
        </Text>
      </TouchableOpacity>
      <Text style={{ fontWeight: "bold" }} className="text-sm">
        {count}
      </Text>
      <TouchableOpacity
        className=" rounded-xl w-8 justify-center align-center"
        style={{ backgroundColor: "#DBD7D7" }}
        onPress={increment}
      >
        <Text style={{ fontWeight: "bold" }} className="text-center">
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Main App Component
export default function App() {
    const calculateTimeLeft = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Set time to 12 AM next day
  
      const difference = midnight - now;
      
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  

  return (
    <ScrollView>
      <View className="p-4">
        <View className="m-4">
          <Text>Current Medication</Text>
        </View>
        <View>
          <View
            className="flex flex-row gap-4 m-4 p-4 rounded-2xl elevation items-center bg-slate-100"
          >
            <Text className="m-2 p-4 font-bold">
              You should take your medicine in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </Text>
          </View>
          <View
className="flex flex-row gap-4 p-4 m-4 rounded-2xl elevation items-center bg-slate-100"
          >
            <View className="w-full">
              <View className="flex flex-row">
                <Image
                  className="h-16 w-16 m-2 rounded-lg"
                  source={{ uri: "https://pngimg.com/d/syringe_PNG12395.png" }}
                />
                <View className="p-2" >
                  <View className="flex flex-row content-center  justify-between">
                    <View className="justify-center">
                      <Text style={{ fontWeight: "bold" }} className="text-lg">
                        Insulin Doses
                      </Text>
                    </View>
                    <Counter />
                  </View>
                  <View className="flex flex-row justify-between ">
                    <View
                      style={{ width: 96, backgroundColor: "#FF9E9E" }}
                      className=" p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                    >
                      <Text className="text-center text-sm">
                        Before Lunch
                      </Text>
                    </View>
                    <View
                      className="p-2 rounded-lg shadow-lg flex flex-row justify-center content-center"
                      style={{ width: 96, backgroundColor: "#BBAFFF" }}
                    >
                      <Text className="text-center text-sm">
                        After Lunch
                      </Text>
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
