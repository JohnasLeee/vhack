import Text from "@/components/Text";
import { View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CommandItem } from "@/constants/Commands";

const AccessibilityListItem: React.FC<{
  item: CommandItem;
  onPress: (id: number) => void;
}> = ({ item, onPress }) => {
  const { id, name, icon, action } = item;

  return (
    <TouchableOpacity className="flex flex-row gap-2 items-center py-2 px-2" onPress={() => {
      if (action) action();
      onPress(id);
    }}>
      <MaterialCommunityIcons name={icon} size={24} color="black" />
      <Text className="text-lg">{name}</Text>
    </TouchableOpacity>
  );
};

export default AccessibilityListItem;
