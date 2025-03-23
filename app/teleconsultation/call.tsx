import { View, Image, TouchableOpacity, Button } from "react-native";
import Text from "@/components/Text";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { router } from "expo-router";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";

const Call = () => {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = React.useState<CameraType>("front");
  const [isUnmuted, setIsMuted] = React.useState(true);
  const [isVideo, setIsVideo] = React.useState(true);

  const toggleCameraFacing = () => {
    setFacing((prevFacing) => (prevFacing === "back" ? "front" : "back"));
  };

  if (!permission || !permission.granted) {
    return (
      <View className="flex-1 mx-16 justify-center items-center gap-4">
        <Text className="text-xl text-center">
          We need your permission to show the camera!
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  return (
    <View className="h-screen">
      <Image
        source={{
          uri: "https://images.pexels.com/photos/7195312/pexels-photo-7195312.jpeg",
          width: 4336,
          height: 6506,
        }}
        className="w-screen h-screen"
        style={{ resizeMode: "cover", position: "absolute", top: 0, left: 0 }}
      />
      {isVideo && <CameraView
        style={{
          flex: 1,
          position: "absolute",
          margin: 8,
          borderRadius: 12,
          top: 0,
          right: 0,
          width: 160,
          height: 240,
        }}
        facing={facing}
      >
        <View className="flex flex-row gap-4 absolute top-4 right-4">
          <TouchableOpacity onPress={toggleCameraFacing}>
            <MaterialCommunityIcons
              name="camera-flip"
              size={32}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </CameraView>}
      <View className="flex bg-yellow-900 px-6 py-3 rounded-xl justify-center items-center absolute m-4">
        <Text className="text-white text-lg font-bold">Dr. Jane Doe</Text>
      </View>
      <View className="flex-1 flex-row justify-center items-end mb-48 gap-4">
        <TouchableOpacity className="" onPress={() => setIsMuted(!isUnmuted)}>
          <View className="bg-yellow-600 p-4 rounded-full flex justify-center items-center elevation">
            <MaterialCommunityIcons
              name={isUnmuted ? "microphone" : "microphone-off"}
              size={42}
              color={isUnmuted ? "white" : "black"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => setIsVideo(!isVideo)}>
          <View className="bg-yellow-600 p-4 rounded-full flex justify-center items-center elevation">
            <MaterialCommunityIcons
              name={isVideo ? "video" : "video-off"}
              size={42}
              color={isVideo ? "white" : "black"}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="" onPress={() => router.back()}>
          <View className="bg-red-600 p-4 rounded-full flex justify-center items-center elevation">
            <MaterialCommunityIcons
              name="phone-hangup"
              size={42}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Call;
