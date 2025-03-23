import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

interface HighlightComponentProps {
  imageUri: string;
  text: string;
}

const HighlightComponent: React.FC<HighlightComponentProps> = ({ imageUri, text }) => {
  return (
    <TouchableOpacity className="flex-1 items-center text-center gap-2 elevation">
      <Image
        source={{
          uri: imageUri,
        }}
        style={{ width: 256, height: 200, borderRadius: 12 }}
      />
      <Text
        className="text-white font-bold text-lg z-10"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          padding: 12,
          width: "100%",
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HighlightComponent;
