import { FontAwesome6 } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Info = ({ stars, forks }: { stars: number; forks: number }) => {
  const theme = useTheme();
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoItem}>
        <FontAwesome6
          name="star"
          size={14}
          color={theme.colors.text}
          style={styles.icon}
        />
        <Text style={[styles.info, { color: theme.colors.text }]}>
          {stars}{" "}
          <Text style={[styles.infoText, { color: theme.colors.text }]}>
            stars
          </Text>
        </Text>
      </View>
      <View style={styles.infoItem}>
        <FontAwesome6
          name="code-fork"
          size={14}
          color={theme.colors.text}
          style={styles.icon}
        />
        <Text style={[styles.info, { color: theme.colors.text }]}>
          {forks}{" "}
          <Text style={[styles.infoText, { color: theme.colors.text }]}>
            forks
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 20,
    flexDirection: "row",
    gap: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  info: {
    fontSize: 16,
    fontWeight: "600",
  },
  infoText: {
    opacity: 0.7,
    fontWeight: "400",
  },
  icon: {
    opacity: 0.7,
  },
});
