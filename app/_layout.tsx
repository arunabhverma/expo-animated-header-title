import { AnimatedHeaderTitle } from "@/components/animated-header-title";
import { ScrollProvider } from "@/contexts/scroll-context";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import "react-native-reanimated";

declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      background: string;
      card: string;
      text: string;
      border: string;
      notification: string;
      button: string;
      activeButton: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  let dark = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      card: "#0B0A0D",
      button: "#383A42",
      activeButton: "#18181C",
    },
  };
  let light = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      button: "#F5F5F5",
      activeButton: "#F5F5F5",
    },
  };
  const theme = colorScheme === "dark" ? dark : light;

  return (
    <ScrollProvider>
      <ThemeProvider value={theme}>
        <Stack
          screenOptions={{
            headerTitle: (props) => {
              return <AnimatedHeaderTitle title={props.children} />;
            },
            headerShadowVisible: true,
            headerLargeTitleShadowVisible: false,
          }}
        >
          <Stack.Screen name="index" options={{ title: "Home" }} />
          <Stack.Screen name="expo-animated-header-title" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ScrollProvider>
  );
}
