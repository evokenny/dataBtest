import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import myApi from "./API.js";


export default function Createuser({ navigation }) {
  const [user, setUser] = useState("username");
  const [password, setPassword] = useState("password");

  return (
    <View style={styles.container}>
      <Text>enter the user: </Text>
      <TextInput
        style={styles.input}
        placeholder="user"
        onChangeText={(val) => setUser(val)}
      />
      <Text>Enter the password: </Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="password"
        onChangeText={(val) => setPassword(val)}
      />

      <TouchableOpacity
        onPress={() =>
          myApi.request("/users/register", "POST", {
            Username: user,
            password: password,
            read: true,
            write: true,
          })
        }
        style={styles.opacityStyle}
      >
        <Text style={styles.opacityStyle}>Registr now</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ShowNews")}>
        <Text>forgot the password ?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderBottomColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  opacityStyle: {
    backgroundColor: "#FF00E5",
    fontSize: 20,
    color: "#000000",
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
