import { ListItem } from "@/mock/list-data";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const List = ({ data }: { data: ListItem[] }) => {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.activeButton,
          borderBottomColor: theme.colors.border,
        },
      ]}
    >
      {data.map((item, index) => (
        <View key={index.toString()}>
          {index !== 0 && (
            <View
              style={[
                styles.separator,
                { borderTopColor: theme.colors.border },
              ]}
            />
          )}
          <View style={styles.item}>
            <View style={styles.itemContent}>
              <View style={[styles.icon, { backgroundColor: item.color }]} />
              <Text style={[styles.itemTitle, { color: theme.colors.text }]}>
                {item.title}
              </Text>
            </View>
            <View style={styles.itemCount}>
              <Text
                style={[styles.itemCountText, { color: theme.colors.text }]}
              >
                {item.count}
              </Text>
              <Octicons
                name="chevron-right"
                size={16}
                style={styles.itemCountIcon}
                color={theme.colors.text}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginLeft: 15,
  },
  itemCount: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  itemCountText: {
    fontSize: 17,
    fontWeight: "500",
    opacity: 0.5,
  },
  itemCountIcon: {
    opacity: 0.5,
  },
  separator: {
    width: "85%",
    borderTopWidth: 1,
    alignSelf: "flex-end",
  },
});
