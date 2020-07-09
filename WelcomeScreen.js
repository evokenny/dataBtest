import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";

export default function Welcomescreen({ navigation }) {
  return (
    <View>
      {/* <Text>this is my home screen </Text> */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text>login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Text>create a new user</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("WriteNewNews")}>
        <Text>create a news</Text>
      </TouchableOpacity>
    </View>
  );
}
