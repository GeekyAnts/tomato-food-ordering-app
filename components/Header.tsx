import React from "react";
import {
  Divider,
  HStack,
  Icon,
  Input,
  Text,
  Hidden,
  Center,
  Box,
  Pressable,
} from "native-base";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Header(props: any) {
  const router = useRouter();
  return (
    <Box w="100%" alignItems="center">
      <Hidden from="base" till="xl">
        <HStack mt="2" space="3" alignItems="center" w="80%">
          <Pressable
            onPress={() => {
              router.push("/");
            }}
            mr="6"
            w={184}
            h={36}
          >
            <Image
              width={184}
              height={36}
              src={"/images/tomato.png"}
              alt="Alternate Text"
            />
          </Pressable>

          <HStack
            borderWidth="1"
            borderColor="coolGray.200"
            mr="4"
            bg="white"
            space="3"
            alignItems="center"
            borderRadius="lg"
            w="65%"
            py="2"
          >
            <HStack space="1" alignItems="center">
              <Icon
                ml="2"
                as={Entypo}
                name="location-pin"
                size="6"
                color="cyanZomato.200"
              />
              <Text color="coolGray.500" fontSize="md">
                Bangla Sahib Gurdwara |
              </Text>
              <Icon
                as={AntDesign}
                name="caretdown"
                size="3"
                color="coolGray.600"
              />
              <Divider h="5" w="0.5" ml="2" orientation="vertical" />
            </HStack>
            <HStack space="3" alignItems="center" flex={1}>
              <Icon
                ml="3"
                as={AntDesign}
                name="search1"
                size="5"
                color="coolGray.500"
              />
              <Input
                _hover={{ bg: "white" }}
                _focus={{ bg: "white" }}
                color="coolGray.500"
                fontSize="md"
                flex={1}
                borderWidth="0"
                outline="undefined"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </HStack>
          </HStack>
          <Pressable _web={{ cursor: "pointer" }}>
            <Text mr="4" color="coolGray.600" fontWeight="medium" fontSize="lg">
              Log in
            </Text>
          </Pressable>
          <Pressable>
            <Text color="coolGray.600" fontWeight="medium" fontSize="lg">
              Sign up
            </Text>
          </Pressable>
        </HStack>
      </Hidden>
      <Hidden from="xl">
        <HStack
          py="2"
          mt="2"
          space="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <Center flex={1} ml="8">
            <Pressable
              onPress={() => {
                router.push("/");
              }}
            >
              <Image
                width={48}
                height={9}
                src={"/images/tomato.png"}
                alt="Alternate Text"
              />
            </Pressable>
          </Center>
          <Center
            w="9"
            h="9"
            mr="8"
            borderWidth="1"
            borderColor="coolGray.300"
            borderRadius="full"
          >
            <Icon
              color="cyanZomato.500"
              fontWeight="medium"
              as={Ionicons}
              size="xs"
              name="person"
            />
          </Center>
        </HStack>
      </Hidden>
      <Divider mt="2" mb="2" />
    </Box>
  );
}
