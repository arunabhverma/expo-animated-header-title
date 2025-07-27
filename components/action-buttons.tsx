import { FontAwesome6, Octicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

export const ActionButtons = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Button
        title="Star"
        icon={<FontAwesome6 name="star" size={14} color={theme.colors.text} />}
        style={{ flex: 1 }}
      />
      <Button
        icon={
          <FontAwesome6
            name="code-fork"
            size={14}
            color={theme.colors.text}
            style={styles.disabledIcon}
          />
        }
      />
      <Button
        icon={
          <Octicons name="bell-fill" size={16} color={theme.colors.primary} />
        }
        style={{ backgroundColor: theme.colors.activeButton }}
      />
    </View>
  );
};

const Button = ({
  title,
  icon,
  style,
  onPress,
}: {
  title?: string;
  icon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}) => {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: theme.colors.button,
          borderWidth: 1,
          borderColor: theme.colors.border,
        },
        style,
      ]}
    >
      {icon}
      {Boolean(title) && (
        <Text style={[styles.buttonText, { color: theme.colors.text }]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 12,
    gap: 5,
    borderRadius: 5,
    minWidth: 45,
    height: 45,
  },
  buttonText: {
    fontSize: 16,
  },
  disabledIcon: {
    opacity: 0.3,
  },
});
