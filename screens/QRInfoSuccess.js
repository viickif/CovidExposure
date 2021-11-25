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

const QRInfoSuccess = () => {
  return (
    <VStack
      w="100%"
      space={2.5}
      px="2"
      mt="4"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="4xl" textAlign="center">
        John Doe
      </Text>
      <Divider my="2" />
      <Heading textAlign="center" mb="10">
        QR code information
      </Heading>
      <View style={styles.infoContainer}>
        <Text bold fontSize="lg" textAlign="center">
          Date of birth
        </Text>
        <Text fontSize="lg" textAlign="center">
          May 01 2000
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text bold fontSize="lg" textAlign="center">
          First vaccine dose
        </Text>
        <Text fontSize="lg" textAlign="center">
          Complete
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Text bold fontSize="lg" textAlign="center">
          Second vaccine dose
        </Text>
        <Text fontSize="lg" textAlign="center">
          Complete
        </Text>
      </View>
    </VStack>
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

export default QRInfoSuccess;
