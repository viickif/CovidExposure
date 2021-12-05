/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import { StyleSheet, View } from "react-native";
 import React from "react";
 import {
   Heading,
   Text,
   VStack,
   Center,
   NativeBaseProvider,
   Button,
   Input,
   Divider,
   HStack,
   Alert,
   Switch,
   Box,
   Image,
 } from "native-base";
 import { width } from "dom-helpers";
 import ExposureStatus from "./screens/ExposureStatus";
 import ExposureKey from "./screens/ExposureKey";
 import QRInfoSuccess from "./screens/QRInfoSuccess";
 import QROptions from "./screens/QROptions";
 import { NavigationContainer } from "@react-navigation/native";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import Home from "./screens/Home";
 import Login from "./screens/Login";
 import QRInfoFailure from "./screens/QRInfoFailure";
 import PairingCode from "./screens/PairgCode";
 import BCServiceLoginOptions from "./screens/BCServiceLoginOptions"
 import UnsecureQR from "./screens/UnsecureQR";
import QRCodes from "./screens/QRCodes";
 
 const Stack = createNativeStackNavigator();
 
 const App = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Group>
           <Stack.Screen
             name="Home"
             component={Home}
             options={{ title: "Home" }}
           />
           <Stack.Screen
             name="QROptions"
             component={QROptions}
             options={{ title: "Encrypted QR code" }}
             style={styles.container}
           />
                      <Stack.Screen
             name="UnsecureQR"
             component={UnsecureQR}
             options={{ title: "Offline QR code" }}
             style={styles.container}
           />
                                 <Stack.Screen
             name="QRCodes"
             component={QRCodes}
             options={{ title: "QR codes" }}
             style={styles.container}
           />
           <Stack.Screen
             name="ExposureStatus"
             component={ExposureStatus}
             options={{ title: "Exposure status" }}
           />
           <Stack.Screen
             name="ExposureKey"
             component={ExposureKey}
             options={{ title: "Exposure key" }}
           />
           <Stack.Screen
             name="QRInfoSuccess"
             component={QRInfoSuccess}
             options={{ title: "QR information" }}
           />
           <Stack.Screen
             name="QRInfoFailure"
             component={QRInfoFailure}
             options={{ title: "QR information" }}
           />
           <Stack.Screen
             name="Login"
             component={Login}
             options={{ title: "Log in" }}
           />
                     <Stack.Screen
             name="PairingCode"
             component={PairingCode}
             options={{ title: "Pairing Code" }}
           />
                               <Stack.Screen
             name="BCService"
             component={BCServiceLoginOptions}
             options={{ title: "Log in with BC Service Card" }}
           />
         </Stack.Group>
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 const styles = StyleSheet.create({
   infoContainer: {
     display: "flex",
     flexDirection: "row",
     alignItems: "center",
     justifyContent: "space-between",
     width: "100%",
     padding: 10,
   },
 
   alert: {
     paddingRight: 10,
   },
 });
 
 export default App;
 