import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Appearance,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
} from "react-native";
import menu from "../constants/menuItem";

import { Colors } from "../constants/theme";
import React from "react";

const Menu = () => {
  const colorScheme = Appearance.getColorScheme();
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = CreateStyles(theme, colorScheme);

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menu}
        numColumns={2}
        //style={{display:'flex', flexWrap:'wrap', gap:'5px'}}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image
              source={item.image}
              style={styles.image}
            />
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        )}
      />
    </Container>
  );

  function CreateStyles(color, theme) {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: color.background,
      },
      title: {
        fontSize: 24,
        fontWeight: "bold",
        color: color.text,
        textAlign:'center',
        padding: 16,
      },
      listContainer: {
        padding: 8,
      },
      menuItem: {
        flex: 1,
        margin: 8,
        backgroundColor: color.card,
        borderRadius: 8,
        padding: 12,
        alignItems: "center",
      },
      image: {
        width: 120,
        height: 120,
        borderRadius: 8,
        marginBottom: 8,
      },
      itemName: {
        fontSize: 16,
        fontWeight: "600",
        color: color.text,
        marginBottom: 4,
      },
      itemDescription: {
        fontSize: 12,
        color: color.text,
        textAlign: "center",
      },
    });
  }
};

export default Menu;
