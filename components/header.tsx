import { useScrollContext } from "@/contexts/scroll-context";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";

export const Header = ({ title }: { title: string }) => {
  const theme = useTheme();
  const { titleHeight } = useScrollContext();
  return (
    <Text
      style={[styles.headerTitle, { color: theme.colors.text }]}
      onLayout={(e) => {
        titleHeight.value = e.nativeEvent.layout.height;
      }}
    >
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
