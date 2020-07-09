import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";

import myApi from "./API";

export default function Loginscreen({ navigation }) {
  const [user, setUser] = useState(false);
  const [password, setPassword] = useState(false);
  const [errorState, setErrorState] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [loginResult, setLoginResult] = useState(false);

  const login = (username, password) => () => {
    setErrorState(false);
    setLoginState("loading");
    myApi
      .requestLogin(username, password)
      .then((r) => {
        setLoginState(false);

        if (r.error) {
          return setErrorState(r.error);
        }

        setLoginResult(r);
      })
      .catch((e) => {
        console.err("err", e);
      });
  };

  return (
    <View style={styles.container}>
      {errorState && (
        <View style={styles.errorView}>
          <Text>{errorState}</Text>
        </View>
      )}
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
        onPress={login(user, password)}
        disabled={loginState === "loading"}
        style={styles.opacityStyle}
      >
        <Text style={styles.opacityStyle}>login</Text>
      </TouchableOpacity>
      {loginState === "loading" && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}

      {(loginResult && (
        <View>
          <Text>{myApi.tokens.message}</Text>
        </View>
      )) || (
        <View>
          <Text>medda</Text>
        </View>
      )}

      {/* {loginResult && 
                props.navigation.navigate('ShowNews', { loginResult })
                
            }  


{/* this.props.navigation.navigate('Profile', {  
            userName: this.state.username,  
            otherParam: '101',  
        })  
const user_name = navigation.getParam('userName', 'NO-User');  */}

      <TouchableOpacity onPress={() => navigation.navigate("ShowNews")}>
        <Text>lists of news</Text>
      </TouchableOpacity>
    </View>
  );
}

// function doLogin(username, password) {
//   const basicHash = base64.encode(username + ":" + password);
//   return fetch("https://testnewstab.machinable.io/sessions/", {
//     method: "POST",
//     headers: {
//       Authorization: "Basic " + basicHash,
//     },
//   }).then((r) => {
//     console.log(r);
//     return r.json();
//   });
// }

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
  errorView: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    margin: 8,
  },
});
