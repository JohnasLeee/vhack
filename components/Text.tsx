import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import React, { createContext, useContext, useState } from 'react';
import { StyleSheet } from 'react-native';

export interface TextProps extends RNTextProps {
  className?: string;
}

const fontSizeMap: Record<string, number> = {
  'text-xs': 12,
  'text-sm': 14,
  'text-base': 16,
  'text-lg': 18,
  'text-xl': 20,
  'text-2xl': 24,
  'text-3xl': 30,
  'text-4xl': 36,
  'text-5xl': 48,
  'text-6xl': 60,
  'text-7xl': 72,
  'text-8xl': 96,
  'text-9xl': 128,
};

const fontSizeKeys = Object.keys(fontSizeMap);

interface TextContextProps {
  sizeAdjustment: number;
  setSizeAdjustment: React.Dispatch<React.SetStateAction<number>>;
}

const TextContext = createContext<TextContextProps | undefined>(undefined);

export const TextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sizeAdjustment, setSizeAdjustment] = useState(0);
  return (
    <TextContext.Provider value={{ sizeAdjustment, setSizeAdjustment }}>
      {children}
    </TextContext.Provider>
  );
};

export const useTextContext = () => {
  const context = useContext(TextContext);
  if (!context) {
    return { sizeAdjustment: 0, setSizeAdjustment: () => {} };
  }
  return context;
};

const Text: React.FC<TextProps> = ({ className = '', style, ...props }) => {
  const { sizeAdjustment } = useTextContext();
  const classList = className.split(' ');
  const fontSizeClass = classList.find(cls => fontSizeMap.hasOwnProperty(cls)) || 'text-sm';
  const filteredClassNames = classList.filter(cls => cls !== fontSizeClass).join(' ');

  const currentIndex = fontSizeKeys.indexOf(fontSizeClass);
  const adjustedIndex = Math.max(0, Math.min(fontSizeKeys.length - 1, currentIndex + sizeAdjustment));
  const adjustedFontSize = fontSizeMap[fontSizeKeys[adjustedIndex]];

  const textStyle = [
    style,
    { fontSize: adjustedFontSize },
  ];

  return <RNText style={textStyle} {...props} className={filteredClassNames} />;
};

export default Text;