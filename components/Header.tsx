import React from "react";
import { Divider, HStack, Icon, Input, Text, Image } from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Header(props: any) {
  return (
    <HStack space="3" alignItems="center" w="80%">
      <Image
        mr={6}
        w={184}
        h={36}
        source={{
          uri: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
        }}
        alt="Alternate Text"
      />

      <HStack
        mr={4}
        bg="white"
        space="3"
        alignItems="center"
        borderRadius="lg"
        w="65%"
        py={2}
      >
        <HStack space="1" alignItems="center">
          <Icon
            ml="2"
            as={Entypo}
            name="location-pin"
            size="6"
            _light={{ color: "rgb(255, 126, 139)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text color="coolGray.500" fontSize="md">
            Bangla Sahib Gurdwara |
          </Text>
          <Icon
            as={AntDesign}
            name="caretdown"
            size="3"
            _light={{ color: "coolGray.600" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Divider h={5} w={0.5} ml={2} orientation="vertical" />
        </HStack>
        <HStack space="3" alignItems="center" flex={1}>
          <Icon
            ml={3}
            as={AntDesign}
            name="search1"
            size="5"
            _light={{ color: "coolGray.500" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Input
            _hover={{ bg: "white" }}
            _focus={{ bg: "white" }}
            color="coolGray.500"
            fontSize="md"
            flex={1}
            borderWidth={0}
            outline="undefined"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </HStack>
      </HStack>
      <Text mr={4} color="coolGray.600" fontWeight="medium" fontSize="lg">
        Log in
      </Text>
      <Text color="coolGray.600" fontWeight="medium" fontSize="lg">
        Sign up
      </Text>
    </HStack>
  );
}
