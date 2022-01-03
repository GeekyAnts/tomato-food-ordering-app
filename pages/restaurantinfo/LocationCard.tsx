import React from "react";
import {
  VStack,
  Image,
  HStack,
  Icon,
  Text,
  Box,
  Link,
  Pressable,
} from "native-base";
import { Fontisto, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";

function LocationCard(prps: any) {
  return (
    <VStack
      my={{ base: 4, md: 4 }}
      w={80}
      shadow={4}
      mx="4"
      borderRadius="xl"
      py="4"
      px="4"
    >
      <Text
        fontWeight="normal"
        fontSize="xl"
        color="coolGray.800"
        mb="1"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        Call
      </Text>
      <Text
        fontWeight="light"
        fontSize="md"
        color="red.400"
        mb="1"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        +919718600666
      </Text>
      <Text
        fontWeight="light"
        fontSize="md"
        color="red.400"
        mb="4"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        +919718700666
      </Text>
      <Text
        fontWeight="normal"
        fontSize="xl"
        color="coolGray.800"
        mb="2"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        Direction
      </Text>

      <HStack alignItems="center">
        <Pressable>
          <Box bg="primary.50">
            <Image
              w={72}
              h={40}
              alt="Image"
              source={{
                uri: "https://maps.zomato.com/php/staticmap?center=28.4694101506,77.0631429926&maptype=zomato&markers=28.4694101506,77.0631429926,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250",
              }}
            />

            <HStack
              position="absolute"
              bottom="0"
              flex="1"
              borderTopRightRadius="sm"
              alignItems="center"
              justifyContent="flex-start"
              bg="rgba(0, 0, 0, 0.3)"
              px="1"
              py="1"
              space="1"
            >
              <Text
                fontSize="xs"
                fontWeight="light"
                fontFamily="Okra,Helvetica,sans-serif"
                color="white"
              >
                Ⓒ
              </Text>
              <Link
                _text={{
                  color: "blue.800",
                  fontSize: "xs",
                  fontWeight: "light",
                  fontFamily: "Okra,Helvetica,sans-serif",
                }}
                isUnderlined
              >
                OpenStreetMap
              </Link>
              <Text
                fontSize="xs"
                fontWeight="light"
                fontFamily="Okra,Helvetica,sans-serif"
                color="rgb(255, 255, 255)"
              >
                contributors
              </Text>
            </HStack>
          </Box>
        </Pressable>
      </HStack>
      <Text
        fontWeight="light"
        fontSize="md"
        color="coolGray.700"
        mb="1"
        mt="1"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        SCO 11-12, Ground Floor, Main Market, Sector 29, Gurgaon
      </Text>
      <HStack space="3">
        <Link
          _hover={{ bg: "coolGray.100" }}
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          borderColor="coolGray.400"
          py="1"
          px="2"
          my="2"
        >
          <Icon as={<Fontisto name="copy" />} size="5" color="coolGray.400" />
          <Text
            color="coolGray.700"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Copy
          </Text>
        </Link>
        <Link
          _hover={{ bg: "coolGray.100" }}
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          borderColor="coolGray.400"
          py="1"
          px="2"
          my="2"
        >
          <Icon
            as={<MaterialCommunityIcons name="directions" />}
            size="6"
            color="red.400"
          />
          <Text
            color="coolGray.700"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Direction
          </Text>
        </Link>
      </HStack>
      <HStack alignItems={"center"} space="2" mt="1">
        <Link
          href="#"
          isUnderlined={false}
          _text={{
            color: "red.400",
            fontSize: "sm",
            fontWeight: "light",
            fontFamily: "Okra,Helvetica,sans-serif",
          }}
          _hover={{
            _text: {
              color: "red.600",
            },
          }}
        >
          See all 2 Warehouse Cafe outlets in Delhi NCR
        </Link>
        <Link href="#" isUnderlined={false}>
          <Icon
            as={<Octicons name="triangle-right" />}
            size="4"
            color="red.400"
          />
        </Link>
      </HStack>
    </VStack>
  );
}

export default LocationCard;
