import * as React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import myApi from './API'

myApi.authorizationToken();

export default function Homescreen({ navigation }) {
  return (
    <View>
      {/* <Text>this is my home screen </Text> */}
      <TouchableOpacity onPress={() => navigation.navigate("ShowNews")}>
        <Text>lists of news</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("WriteNewNews")}>
        <Text>let's go for a new post</Text>
      </TouchableOpacity>
    </View>
  );
}


