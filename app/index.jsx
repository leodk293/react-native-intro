import { View, Text, StyleSheet, Appearance, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/theme";
import { useRouter } from "expo-router";

const Index = () => {
  const colorScheme = Appearance.getColorScheme();
  const router = useRouter();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = CreateStyles(theme, colorScheme);
  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>index</Text>
      <Pressable onPress={()=>router.push(`/list/4`)}>
        <Text style={styles.homeTitle}>index 4</Text>
      </Pressable>
      <Text
        style={[styles.textColor, { color: "blue", marginTop: 16 }]}
        accessibilityRole="link"
        onPress={() => {
          // use `window.location` for web, else use navigation (if available)
          if (typeof window !== "undefined") {
            window.location.href = "/menu";
          }
        }}
      >
        Go to Menu
      </Text>
    </View>
  );
};

function CreateStyles(color, theme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: color.background,
    },
    homeTitle: {
      color: color.text,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: color.text,
      textAlign: "center",
      padding: 16,
    },
  });
}

export default Index;
