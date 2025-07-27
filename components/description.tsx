import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";

export const Description = ({ description }: { description: string }) => {
  const theme = useTheme();
  return (
    <Text style={[styles.description, { color: theme.colors.text }]}>
      {description}
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    marginTop: 16,
  },
});
