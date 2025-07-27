import React, { createContext, ReactNode, useContext } from "react";
import { SharedValue, useSharedValue } from "react-native-reanimated";

type ScrollContextType = {
  scrollY: SharedValue<number>;
  extraSpace: SharedValue<number>;
  titleHeight: SharedValue<number>;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const scrollY = useSharedValue(0);
  const extraSpace = useSharedValue(0);
  const titleHeight = useSharedValue(0);

  return (
    <ScrollContext.Provider value={{ scrollY, extraSpace, titleHeight }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => {
  const context = useContext(ScrollContext);
  if (!context)
    throw new Error("useScrollContext must be used inside ScrollProvider");
  return context;
};
