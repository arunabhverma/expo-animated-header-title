import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button
        title="Go to animated header title"
        onPress={() => router.push("/expo-animated-header-title")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
