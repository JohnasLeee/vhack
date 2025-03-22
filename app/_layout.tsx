import React from 'react';
import AccessibilityTabs from "@/components/AccessibilityTabs";
import "../global.css";
import { Slot, usePathname } from "expo-router";

export default function App() {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  return (
    <>
      <Slot />
      {/* {!isMainPage && <AccessibilityTabs />} */}
    </>
  );
}
