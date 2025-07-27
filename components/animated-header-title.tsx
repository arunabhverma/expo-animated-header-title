import { useScrollContext } from "@/contexts/scroll-context";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

const HEADER_HEIGHT = 40;

export const AnimatedHeaderTitle = ({ title }: { title: string }) => {
  const theme = useTheme();
  const { scrollY, extraSpace, titleHeight } = useScrollContext();
  const headerOffset = useSharedValue(0);

  useDerivedValue(() => {
    headerOffset.value = -interpolate(
      scrollY.value,
      [0, extraSpace.value + titleHeight.value / 0.85],
      [-extraSpace.value - titleHeight.value / 0.85, 0],
      Extrapolation.CLAMP
    );
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: headerOffset.value,
        },
      ],
    };
  });

  return (
    <View style={styles.headerContainer}>
      <Animated.Text
        style={[
          styles.headerTitle,
          animatedTextStyle,
          { color: theme.colors.text },
        ]}
      >
        {title}
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: HEADER_HEIGHT,
    overflow: "hidden",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});
