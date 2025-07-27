import { useScrollContext } from "@/contexts/scroll-context";
import { useTheme } from "@react-navigation/native";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const UserAvatar = ({ username }: { username: string }) => {
  const theme = useTheme();
  const { extraSpace } = useScrollContext();
  return (
    <View
      style={styles.headerContainer}
      onLayout={(e) => {
        extraSpace.value = e.nativeEvent.layout.height;
      }}
    >
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/59590144?v=4",
        }}
        style={styles.avatar}
      />
      <Text style={[styles.usernameStyle, { color: theme.colors.text }]}>
        {username}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  usernameStyle: {
    fontSize: 17,
    opacity: 0.6,
  },
  headerContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  avatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
