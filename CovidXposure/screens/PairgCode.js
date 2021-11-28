import { ImageBackgroundComponent, StyleSheet, View } from "react-native";
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
import { TouchableOpacity } from "react-native";

const PairingCode = ({ navigation }) => {
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
          <Heading textAlign="center" mb="10">
            Pairing code
          </Heading>
          <Text fontSize="2xl" textAlign="center">
            A8X2J
          </Text>
          <TouchableOpacity style={styles.hidden} onPress={() => navigation.navigate("QROptions")}>
          </TouchableOpacity>
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

  hidden: {
    height: 100,
    width: "100%",
  },
});

export default PairingCode;
