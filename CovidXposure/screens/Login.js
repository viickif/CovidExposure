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
  Select,
} from "native-base";
import { useState } from "react";

const Login = ({ navigation }) => {
  const [dobYear, setDobYear] = useState(null);
  const [dobMonth, setDobMonth] = useState(null);
  const [dobDay, setDobDay] = useState(null);
  const [vacYear, setVacYear] = useState(null);
  const [vacMonth, setVacMonth] = useState(null);
  const [vacDay, setVacDay] = useState(null);

  let years = [];
  for (let i = 0; i < 120; i++) {
    years.push(i);
  }

  let days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
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
          justifyContent="center"
        >
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate("BCService")}
          >
            Log in with BC service card app
          </Button>
          <Text fontSize="2xl" bold textAlign="center">
            or
          </Text>
          <Text fontSize="md" textAlign="center">
            Personal Health Number
          </Text>
          <Input
            backgroundColor="white"
            backgroundColor="white"
            mx="3"
            placeholder="Enter your personal health number"
            size="md"
            w={{
              base: "90%",
              md: "25%",
            }}
          />
          <Text fontSize="md" textAlign="center">
            Date of Birth
          </Text>
          <HStack
            w="100%"
            space={2.5}
            px="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Select
              backgroundColor="white"
              backgroundColor="white"
              selectedValue={dobYear}
              minWidth="75"
              placeholder="Year"
              mt={1}
              onValueChange={(itemValue) => setDobYear(itemValue)}
            >
              {years.map(function (year, i) {
                return (
                  <Select.Item
                    label={2021 - year}
                    value={2021 - year}
                    key={year}
                  />
                );
              })}
            </Select>
            <Select
              backgroundColor="white"
              selectedValue={dobMonth}
              minWidth="120"
              placeholder="Month"
              mt={1}
              onValueChange={(itemValue) => setDobMonth(itemValue)}
            >
              <Select.Item label="Jan" value="Jan" />
              <Select.Item label="Feb" value="Feb" />
              <Select.Item label="Mar" value="Mar" />
              <Select.Item label="Apr" value="Apr" />
              <Select.Item label="May" value="May" />
              <Select.Item label="Jun" value="Jun" />
              <Select.Item label="Jul" value="Jul" />
              <Select.Item label="Aug" value="Aug" />
              <Select.Item label="Sep" value="Sep" />
              <Select.Item label="Oct" value="Oct" />
              <Select.Item label="Nov" value="Nov" />
              <Select.Item label="Dec" value="Dec" />
            </Select>
            <Select
              backgroundColor="white"
              selectedValue={dobDay}
              minWidth="75"
              placeholder="Day"
              mt={1}
              onValueChange={(itemValue) => setDobDay(itemValue)}
            >
              {days.map(function (day, i) {
                return <Select.Item label={day} value={day} key={day} />;
              })}
            </Select>
          </HStack>
          <Text fontSize="md" textAlign="center">
            Date of Vaccine (Dose 1 or Dose 2)
          </Text>
          <HStack
            w="100%"
            space={2.5}
            px="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Select
              backgroundColor="white"
              selectedValue={vacYear}
              minWidth="75"
              placeholder="Year"
              mt={1}
              onValueChange={(itemValue) => setVacYear(itemValue)}
            >
              {years.map(function (year, i) {
                return (
                  <Select.Item
                    label={2021 - year}
                    value={2021 - year}
                    key={year}
                  />
                );
              })}
            </Select>
            <Select
              backgroundColor="white"
              selectedValue={vacMonth}
              minWidth="120"
              placeholder="Month"
              mt={1}
              onValueChange={(itemValue) => setVacMonth(itemValue)}
            >
              <Select.Item label="Jan" value="Jan" />
              <Select.Item label="Feb" value="Feb" />
              <Select.Item label="Mar" value="Mar" />
              <Select.Item label="Apr" value="Apr" />
              <Select.Item label="May" value="May" />
              <Select.Item label="Jun" value="Jun" />
              <Select.Item label="Jul" value="Jul" />
              <Select.Item label="Aug" value="Aug" />
              <Select.Item label="Sep" value="Sep" />
              <Select.Item label="Oct" value="Oct" />
              <Select.Item label="Nov" value="Nov" />
              <Select.Item label="Dec" value="Dec" />
            </Select>
            <Select
              backgroundColor="white"
              selectedValue={vacDay}
              minWidth="75"
              placeholder="Day"
              mt={1}
              onValueChange={(itemValue) => setVacDay(itemValue)}
            >
              {days.map(function (day, i) {
                return <Select.Item label={day} value={day} key={day} />;
              })}
            </Select>
          </HStack>
          <Button
            size="lg"
            w="90%"
            onPress={() => navigation.navigate("QROptions")}
          >
            Enter
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

export default Login;
