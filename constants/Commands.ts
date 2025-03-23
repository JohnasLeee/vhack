import { decreaseBrightness, increaseBrightness, increaseTextSize, decreaseTextSize } from "@/components/AccessibilityActions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface CommandType {
  id: number;
  name: string;
}

export const GenericCommand: CommandType[] = [
  { id: 0, name: "Increase brightness" },
  { id: 1, name: "Decrease brightness" },
  { id: 2, name: "Navigate to home page" },
  { id: 3, name: "Increase font size" },
  { id: 4, name: "Decrease font size" },
];

export interface CommandItem {
  id: number;
  name: string;
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
  action?: () => void;
};

export const GenericCommandItem: CommandItem[] = [
  { id: 0, name: "Increase brightness", icon: "brightness-5", action: increaseBrightness },
  { id: 1, name: "Decrease brightness", icon: "brightness-6", action: decreaseBrightness },
  { id: 2, name: "Navigate to home page", icon: "home" },
  { id: 3, name: "Increase font size", icon: "format-font-size-increase" },
  { id: 4, name: "Decrease font size", icon: "format-font-size-decrease" },
]
