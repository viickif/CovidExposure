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
  Box,

} from "native-base";
import { width } from "dom-helpers";

const ExposureStatus = () => {
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
        You have not been exposed
      </Text>
    </VStack>
  );
};

const ExposureKey = () => {
  return (
    <VStack
      w="100%"
      space={2.5}
      px="2"
      mt="4"
      alignItems="center"
      justifyContent="center"
    >
      <Heading textAlign="center" mb="10">
        Enter your one-time key
      </Heading>
      <Text fontSize="xl" textAlign="center">
        Enter the key you got when you received your diagnosis
      </Text>
      <Input
        mx="3"
        placeholder="Enter one-time key"
        size="lg"
        w={{
          base: "90%",
          md: "25%",
        }}
      />
      <Button size="lg" w="90%" onPress={() => console.log("hello world")}>
        Submit
      </Button>
    </VStack>
  );
};

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
});

const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <QRInfoSuccess />
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
