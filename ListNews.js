import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import myApi from "./API";

export default function ReadNews({ navigation }) {
  const [apiState, setApiState] = useState(false);

  useEffect(() => {
    myApi
      .request("/api/TestNews?_limit=100", "GET")
      .then((data) => setApiState(data.items));
  }, []); // in questo caso mettiamo un array vuoto perche si esegua una sola volta ... se in quell'arrey passassimo una variabile per esempio che si esegue con un bottone avremmo un refresh
  console.log("sono qui");
  return (
    <View style={styles.container}>
      <Text>{myApi.tokens.message}</Text>

      {/*display just when apiState is empty */}

      {!apiState && <Text>Loading...</Text>}
      {apiState && <Text>{apiState.length}</Text>}
      {apiState && apiState.map((n) => <News title={n.title} news={n.news} />)}
    </View>
  );
}

function News({ news, title }) {
  return (
    <View style={{ marginTop: 8, borderColor: "pink", borderWidth: 1 }}>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
      <Text>{news} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
