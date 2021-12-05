import {StyleSheet, View} from 'react-native';
import React from 'react';
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
} from 'native-base';

const QRCodes = ({navigation}) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VStack
          w="100%"
          space={2.5}
          px="2"
          mt="4"
          alignItems="center"
          justifyContent="center">
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate('QROptions')}>
            Encrypted QR code
          </Button>
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate('UnsecureQR')}>
            Offline QR code
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },

  alert: {
    paddingRight: 10,
  },
});

export default QRCodes;
