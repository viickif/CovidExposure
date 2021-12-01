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

const Home = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VStack
          w="100%"
          space={2.5}
          px="2"
          mt="4"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate("ExposureStatus")}
          >
            Exposure status
          </Button>
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate("ExposureKey")}
          >
            Exposure key
          </Button>
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate("Login")}
          >
            QR options
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default Home;
