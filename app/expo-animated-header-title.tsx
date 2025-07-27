import { ActionButtons } from "@/components/action-buttons";
import { Description } from "@/components/description";
import { Header } from "@/components/header";
import { Info } from "@/components/info";
import { List } from "@/components/list";
import { UserAvatar } from "@/components/user-avatar";
import { useScrollContext } from "@/contexts/scroll-context";
import { listData } from "@/mock/list-data";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { useAnimatedScrollHandler } from "react-native-reanimated";

export default function AnimatedHeaderTitle() {
  const { scrollY } = useScrollContext();
  const theme = useTheme();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      style={styles.container}
    >
      <View
        style={[styles.infoContainer, { backgroundColor: theme.colors.card }]}
      >
        <UserAvatar username="arunabhverma" />
        <Header title="expo-animated-header-title" />
        <Description description="Animated header title in native header, inspired by GitHub, built with Expo and Reanimated." />
        <Info stars={0} forks={0} />
        <ActionButtons />
      </View>
      <List data={listData} />
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {},
  infoContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
});
