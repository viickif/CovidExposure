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

const ExposureStatus = () => {
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
          <Text fontSize="4xl" textAlign="center">
            You have not been exposed
          </Text>
          <Image
            source={{
              uri:
                "https://www.pngall.com/wp-content/uploads/8/Green-Check-Mark-PNG-Clipart.png",
            }}
            alt="Alternate Text"
            size="xl"
          />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

export default ExposureStatus;
