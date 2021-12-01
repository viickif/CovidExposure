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

const BCServiceLoginOptions = ({ navigation }) => {
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
          <Text bold fontSize="lg" textAlign="center">
            Set up the BC Services Card app
          </Text>
          <Button size="lg" w="90%" mb="6" onPress={() => {}}>
            Get set up
          </Button>
          <Text bold fontSize="lg" textAlign="center">
            Already set up?
          </Text>
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate("PairingCode")}
          >
            Continue with BC Service Card app
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
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

  container: {
    backgroundColor: "pink",
  },
});

export default BCServiceLoginOptions;
