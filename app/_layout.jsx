import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { Appearance } from "react-native";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors } from "../constants/theme";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  return (
    <Stack
      screenOptions={{
        headerOptions: { backgroundColor: theme.headerBackground },
        headerTintColor: theme.text,
        headerShadowVisible: false,
      }}
    >
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />  */}
      {/* <Stack.Screen name="(coffee)" options={{ headerShown: false }} />  */}
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
      <Stack.Screen
        name="index"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="list/[id]"
        options={{ headerShown: false, title: "Home" }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerShown: false,
          title: "Contact us",
          headerTitle: "Contact",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerShown: false,
          title: "About us",
          headerTitle: "About",
        }}
      />
      <Stack.Screen
        name="menu"
        options={{
          headerShown: true,
          title: "Menu",
          headerTitle: "Coffee Shop Menu",
          headerStyle: { backgroundColor: theme.headerBackground },
        }}
      />
    </Stack>
  );
}
