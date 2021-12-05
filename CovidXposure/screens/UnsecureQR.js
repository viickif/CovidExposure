import {StyleSheet, View} from 'react-native';
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
  ScrollView,
} from 'native-base';
import {ToastAndroid, Platform, AlertIOS} from 'react-native';
import React, {useState, useEffect} from 'react';

const UnsecureQR = () => {
  const [codeIndex, setCodeIndex] = useState(0);
  const codes = [
    'https://www.investopedia.com/thmb/na7Q1b971nlXOy76f-4F_Rxgt2k=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/qr-code-bc94057f452f4806af70fd34540f72ad.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCTrGBhblq5Ad652kvOPiMidTGD2PiTarJ8LQAfHLkYXyRWFw0FYOGGHDUKgsYh0c65E&usqp=CAU',
    'https://barcode-labels.com/wp-content/uploads/QRtoarticle_1.jpg',
  ];

  useEffect(() => {
    new ToastAndroid.show('QR code updated', ToastAndroid.SHORT);
  });

  return (
    <NativeBaseProvider>
      <ScrollView _contentContainerStyle={{}}>
        <Center flex={1} px="3">
          <VStack
            w="100%"
            space={2.5}
            px="2"
            mt="8"
            alignItems="center"
            justifyContent="center">
            <Image
              source={{
                uri: 'https://www.investopedia.com/thmb/na7Q1b971nlXOy76f-4F_Rxgt2k=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/qr-code-bc94057f452f4806af70fd34540f72ad.png',
              }}
              alt="Alternate Text"
              size="2xl"
            />
          </VStack>
        </Center>
      </ScrollView>
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

  container: {
    backgroundColor: 'pink',
  },
});

export default UnsecureQR;
