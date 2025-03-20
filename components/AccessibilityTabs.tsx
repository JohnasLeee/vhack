import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Svg, { Circle, Path } from "react-native-svg";

const AccessibilityTabs = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => console.log("Home")}
            android_ripple={{
              color: "rgba(255, 255, 255, 0.5)",
              borderless: true,
              foreground: true,
            }}
          >
            <MaterialCommunityIcons name="home" size={28} color="white" />
          </Pressable>
          <Pressable
            onPress={() => console.log("Dumbbell")}
            android_ripple={{
              color: "rgba(255, 255, 255, 0.5)",
              borderless: true,
              foreground: true,
            }}
          >
            <MaterialCommunityIcons name="dumbbell" size={28} color="white" />
          </Pressable>
          <View style={{ width: 64 }} />
          <Pressable
            onPress={() => console.log("Silverware")}
            android_ripple={{
              color: "rgba(255, 255, 255, 0.5)",
              borderless: true,
              foreground: true,
            }}
          >
            <MaterialCommunityIcons
              name="silverware-fork-knife"
              size={28}
              color="white"
            />
          </Pressable>
          <Pressable
            onPress={() => console.log("Person")}
            android_ripple={{
              color: "rgba(255, 255, 255, 0.5)",
              borderless: true,
              foreground: true,
            }}
          >
            <MaterialIcons name="person" size={28} color="white" />
          </Pressable>
        </View>
        <Pressable style={styles.centerMic} android_ripple={{ color: "rgba(255, 255, 255, 0.5)", borderless: true, foreground: true, radius: 36 }} onPress={() => console.log("Microphone")}>
          <MaterialCommunityIcons name="microphone" size={36} color="white" />
        </Pressable>
      </View>
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: -1, justifyContent: "center", alignItems: "center" }}>
        <Svg
          id="bottom-bar"
          x="0px"
          y="0px"
          width="90%"
          height="100"
          viewBox="0 0 1092 260"
        >
          <Path
            fill={"#06263D"}
            stroke={"#06263D"}
            d={`M30,60h357.3c17.2,0,31,14.4,30,31.6c-0.2,2.7-0.3,5.5-0.3,8.2c0,71.2,58.1,129.6,129.4,130c72.1,0.3,130.6-58,130.6-130c0-2.7-0.1-5.4-0.2-8.1C675.7,74.5,689.5,60,706.7,60H1062c16.6,0,30,13.4,30,30v94c0,42-34,76-76,76H76c-42,0-76-34-76-76V90C0,73.4,13.4,60,30,60z`}
          />
          <Circle fill={"#06263D"} stroke={"#06263D"} cx="546" cy="108" r="108" />
        </Svg>
      </View>
    </>
  );
};

export default AccessibilityTabs;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "transparent",
    padding: 10,
    margin: 12,
    paddingVertical: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    // borderBottomLeftRadius: 32,
    // borderBottomRightRadius: 32,
    // borderTopLeftRadius: 12,
    // borderTopRightRadius: 12,
    // elevation: 4,
  },
  centerMic: {
    justifyContent: "center",
    alignItems: "center",
    width: 88,
    height: 88,
    borderRadius: 80,
    // backgroundColor: "#06263D",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
});
