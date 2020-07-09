import * as React from 'react';
import {StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//--------------------------------------------------------------
//import my screens 
import WriteNews from "./WriteNews"          //importo la funzione della mia pagina dalla mia pagina 
import Homescreen from "./Homescreen" 
import ReadNews from "./ListNews" 
import Createuser from "./CreateUser"
import Welcomescreen from "./WelcomeScreen"
import Loginscreen from "./LoginSceen"
//---------------------------------------------------------------

const Stack = createStackNavigator();

//assegno i composnenti come HomeScreen a Home che sara il nome della mia pagina nel navigatore
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" component={Homescreen} /> 
        <Stack.Screen name="WriteNewNews" component={WriteNews} />
        <Stack.Screen name="ShowNews" component={ReadNews} />
        <Stack.Screen name="Create" component={Createuser} />
        <Stack.Screen name="Welcome" component={Welcomescreen} />
        <Stack.Screen name="Login" component={Loginscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//primo ex show news lo uso per il navigatore negli altri schermi invento io ex readNwes e la funzione che importo da ListNews(il mio file) e il nome e showNews
export default App;
