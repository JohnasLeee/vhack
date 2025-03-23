import {
  Pressable,
  StyleSheet,
  View,
  Animated,
  useAnimatedValue,
  ScrollView,
} from "react-native";
import Text from "@/components/Text";
import React, { createContext, useEffect, useRef, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Svg, { Circle, Path } from "react-native-svg";
import * as Haptics from "expo-haptics";
import { Audio } from "expo-av";
import { recordSpeech } from "@/functions/recordSpeech";
import { transcribeSpeech } from "@/functions/transcribeSpeech";
import { getCommands } from "@/functions/getCommands";
import {
  CommandItem,
  GenericCommandItem,
  getGenericCommand,
} from "@/constants/Commands";
import AccessibilityListItem from "./AccessibilityListItem";
import { router } from "expo-router";
import { useTextContext } from "./Text";

interface AccessibilityContextType {}
const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessibilityItems, setAccessibilityItems] = useState<CommandItem[]>(
    []
  );
  const { sizeAdjustment, setSizeAdjustment } = useTextContext();

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [recordingState, setRecordingState] = useState("Hold button to record");

  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const audioRecordingRef = useRef(new Audio.Recording());

  const [recordingTime, setRecordingTime] = useState(0);
  const onPressIn = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    if (permissionResponse && permissionResponse.status !== "granted") {
      await requestPermission();
      return;
    }
    if (isPanelOpen) {
      setIsPanelOpen(false);
      await audioRecordingRef.current.stopAndUnloadAsync();
      setRecordingState("Hold button to record");
      setRecordingTime(0);
    } else {
      setAccessibilityItems([]);
      setIsPanelOpen(true);
      setRecordingState("Hold button to record");

      setRecordingTime(Date.now());
      await recordSpeech(audioRecordingRef, setRecordingState);
    }
  };

  const onPressOut = async () => {
    if (!isPanelOpen) return;

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setRecordingState("Processing recording...");

    // Check if recording is too short)
    const currentTime = Date.now();
    const timeDifference = currentTime - recordingTime;
    if (timeDifference < 1000) {
      setRecordingState("Hold button to record");
      await audioRecordingRef.current.stopAndUnloadAsync();
      return;
    }

    try {
      // const speechTranscript = "the screen is too bright";
      const speechTranscript = await transcribeSpeech(audioRecordingRef);
      setRecordingState(speechTranscript || "No transcript found");

      if (!speechTranscript) return;

      const commands = await getCommands(speechTranscript, getGenericCommand());
      const commandsItem = commands
        .map((command) => {
          const foundItem = GenericCommandItem.find(
            (item) => item.id === command
          );
          return foundItem || null;
        })
        .filter((item): item is CommandItem => item !== null);

      setAccessibilityItems(commandsItem);

      console.log(commandsItem);
    } catch (e) {
      console.error(e);
    }
  };

  const accessibilityItemClicked = async (id: number) => {
    console.log("Clicked", id);
    if (id === 3) {
      setSizeAdjustment((prev) => prev + 1);
    } else if (id === 4) {
      setSizeAdjustment((prev) => prev - 1);
    } else if (id === 2) {
      router.dismissAll();
    } else if (id === 5) {
      router.push("/(tabs)")
    } else if (id === 6) {
      router.push("/(tabs)/current-appointment")
    } else if (id === 7) {
      router.push("/medicalReport")
    } else if (id === 8) {
      router.push("/bills-management")
    } else if (id === 9) {
      router.push("/medicine")
    } else if (id === 10) {
      router.push("/teleconsultation")
    }
  };

  const animatedPanelSpring = useAnimatedValue(0);
  const animatedPanelEase = useAnimatedValue(0);

  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    Animated.spring(animatedPanelSpring, {
      friction: 20,
      toValue: isPanelOpen ? 1 : 0,
      useNativeDriver: false,
    }).start();
    Animated.timing(animatedPanelEase, {
      toValue: isPanelOpen ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isPanelOpen]);

  return (
    <AccessibilityContext.Provider value={{}}>
      {children}
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Pressable
            onPress={() => {
              // setSizeAdjustment(2);
            }}
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
        <Pressable
          style={styles.centerMic}
          android_ripple={{
            color: "rgba(255, 255, 255, 0.5)",
            borderless: true,
            foreground: true,
            radius: 36,
          }}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
        >
          <MaterialCommunityIcons
            name={isPanelOpen ? "chevron-down" : "microphone"}
            size={36}
            color="white"
          />
        </Pressable>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
          <Circle
            fill={"#06263D"}
            stroke={"#06263D"}
            cx="546"
            cy="108"
            r="108"
          />
        </Svg>
      </View>
      <Animated.View
        style={{
          backgroundColor: "#06263D",
          bottom: animatedPanelSpring.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 100],
          }),
          position: "absolute",
          left: "50%",
          transform: [
            { translateX: "-50%" },
            {
              scaleX: animatedPanelEase.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
            {
              scaleY: animatedPanelSpring.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
          transformOrigin: "bottom",
          right: 0,
          zIndex: 1,
          // marginHorizontal: 28,
          borderRadius: 24,
          height: animatedPanelSpring.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300],
          }),
          // height: 400,
          width: "90%",
          elevation: 2,
        }}
      >
        <Animated.View
          style={{
            backgroundColor: "transparent",
            opacity: animatedPanelEase.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
            flex: 1,
          }}
        >
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 24,
              paddingHorizontal: 16,
              justifyContent: "flex-end",
              alignItems: "baseline",
              gap: 18,
            }}
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current?.scrollToEnd({ animated: true })
            }
          >
            <View
              style={{
                backgroundColor: "#339989",
                padding: 12,
                borderRadius: 12,
                alignSelf: "flex-end",
                marginLeft: 12,
              }}
            >
              <Text className="text-lg text-white">{recordingState}</Text>
            </View>
            {
              // Much hardcode, much wow
            ![
              "Recording...",
              "Hold button to record",
              "Processing recording...",
              "No transcript found",
            ].includes(recordingState) && (
              <View
                style={{
                  backgroundColor: "#fefefe",
                  padding: 12,
                  borderRadius: 12,
                  marginRight: 12,
                  alignSelf: "flex-start",
                }}
              >
                {accessibilityItems.length > 0 ? (
                  accessibilityItems
                    .slice(0, 4)
                    .map((item) => (
                      <AccessibilityListItem
                        key={item.id}
                        item={item}
                        onPress={accessibilityItemClicked}
                      />
                    ))
                ) : (
                  <Text className="text-lg">Hang on a second...</Text>
                )}
              </View>
            )}
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityProvider;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#06263D",
    padding: 10,
    margin: 12,
    paddingVertical: 16,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 2,
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
