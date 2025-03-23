import { decreaseBrightness, increaseBrightness } from "@/components/AccessibilityActions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
  { id: 5, name: "Book an appointment", icon: "calendar" },
  { id: 6, name: "See current appointment", icon: "phone" },
  { id: 7, name: "See medical records", icon: "file-document" },
  { id: 8, name: "See bills and payments", icon: "cash" },
  { id: 9, name: "See medicine tracker", icon: "pill" },
  { id: 10, name: "Online consultation", icon: "video" },
];
  
export interface CommandType {
  id: number;
  name: string;
}

export const getGenericCommand: () => CommandType[] = () => {
  return GenericCommandItem.map((item) => {
    return { id: item.id, name: item.name };
  });
};
