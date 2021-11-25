/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  Heading,
  Text,
  VStack,
  Center,
  NativeBaseProvider,
  Button,
  Input,
} from "native-base";

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
        Enter the key you got when you received your diagnosis.
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

const App = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <ExposureKey />
      </Center>
    </NativeBaseProvider>
  );
};

export default App;
