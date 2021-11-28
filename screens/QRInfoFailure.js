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

const QRInfoFailure = () => {
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
            Mary Poppins
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
              Aug 20 1978
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text bold fontSize="lg" textAlign="center">
              First vaccine dose
            </Text>
            <Text fontSize="lg" textAlign="center">
              Incomplete
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text bold fontSize="lg" textAlign="center">
              Second vaccine dose
            </Text>
            <Text fontSize="lg" textAlign="center">
              Incomplete
            </Text>
          </View>
          <Image
            source={{
              uri:
                "https://lh3.googleusercontent.com/proxy/n3fhYofSZ29Ovj767U9UgNYqNH7VxbhWm66tk5dLSNa8Qxv2pxEOvCskNqjJi9d4c8GRyEokUtdFoTTR7Tc98rTAm4rwCxr2CsUG2B4BkORhi7oHod9MIY9licurAkiT6WjRAipqfnEcKgCze79-BliStAO1C_1oU6BOBNOI_Bf28zW4D7U",
            }}
            alt="Alternate Text"
            size="xl"
          />
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
});

export default QRInfoFailure;
