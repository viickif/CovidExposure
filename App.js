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

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="QROptions"
          component={QROptions}
          options={{ title: "QR options" }}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
