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


const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <QROptions />
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
