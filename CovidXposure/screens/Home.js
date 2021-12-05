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
import {TouchableOpacity} from 'react-native';
import UnsecureQR from './UnsecureQR';
import {ToastAndroid, Platform, AlertIOS} from 'react-native';
import {useState} from 'react';

const Home = ({navigation}) => {
  const [showWarning, setShowWarning] = useState(true);

  function stateChange(newState) {
    setTimeout(function () {
      setShowWarning(false);
    }, 5000);
    
  }

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
          {false && (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login")
                setShowWarning(false);
              }}>
              <Alert w="90%" status="error" colorScheme="info">
                <VStack space={2} flexShrink={1} w="100%">
                  <HStack
                    flexShrink={1}
                    space={2}
                    alignItems="center"
                    justifyContent="space-between">
                    <HStack flexShrink={1} space={2} alignItems="center">
                      <Alert.Icon />
                      <View style={styles.alert}>
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          color="coolGray.800">
                          Your offline QR code is out of date. Tap to update.
                        </Text>
                      </View>
                    </HStack>
                    {/* <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
              /> */}
                  </HStack>
                </VStack>
              </Alert>
            </TouchableOpacity>
          )}
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate('Login')}>
            QR code
          </Button>
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate('ExposureStatus')}>
            Exposure status
          </Button>
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate('ExposureKey')}>
            Exposure key
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

export default Home;
