import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const ListPage = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text style={{ color: "white" }}>ListPage {id}</Text>
    </View>
  );
};

export default ListPage;
