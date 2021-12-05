/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {View, StyleSheet} from 'react-native';
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
  Switch,
  Box,
  Alert,
  Image,
} from 'native-base';
import {width} from 'dom-helpers';
import {ToastAndroid, Platform, AlertIOS} from 'react-native';
import {useState} from 'react';

const ExposureKey = ({navigation}) => {
  const [key, setKey] = useState('');
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
          <Heading textAlign="center" mb="10">
            Enter your one-time key
          </Heading>
          <Alert w="90%" status="info" colorScheme="info">
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
                      A key was given to you when you received your diagnosis
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
          <Input
            value={key}
            onChange={text => {
              setKey(text);
            }}
            backgroundColor="white"
            mx="3"
            placeholder="Enter one-time key"
            size="lg"
            w={{
              base: '90%',
              md: '25%',
            }}
          />
          <Button
            size="lg"
            w="90%"
            onPress={() => {
              if (key != 'abcdef') {
                new ToastAndroid.show(
                  'Successfully submitted',
                  ToastAndroid.SHORT,
                );
                return;
              }
              new ToastAndroid.show(
                'Successfully submitted',
                ToastAndroid.SHORT,
              );
              navigation.navigate('Home');
            }}>
            Submit
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

export default ExposureKey;
