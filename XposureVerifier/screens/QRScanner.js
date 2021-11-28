import { View } from "react-native";
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
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

import QRCodeScanner from "react-native-qrcode-scanner"

const QRScanner = ({ navigation }) => {
  return (
    <QRCodeScanner
      styles={styles.scanner}
      onRead={(code) => {
        console.log(code);
        if(code["data"]=="https://www.investopedia.com/terms/q/quick-response-qr-code.asp"){
            navigation.navigate("QRInfoSuccess");
        }
        else {
            navigation.navigate("QRInfoFailure");
        }
      }}
    />
  );
};

const styles = StyleSheet.create({
  scanner: {
    width: "100%",
    height: "100%",
  },
});

export default QRScanner;
