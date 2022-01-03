import React from "react";
import {
  Box,
  HStack,
  VStack,
  Pressable,
  Text,
  Link,
  Image,
  Icon,
} from "native-base";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Header from "../../components/Header";
import DiningOut from "../../components/DiningOut";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";

export default function GoForMeal(props: any) {
  const [tabName, setTabName] = React.useState("Dining Out");
  const router = useRouter();

  return (
    <Box
      alignItems="center"
      bg="coolGray.50"
      borderColor="coolGray.200"
      h="100%"
    >
      <Header />
      <VStack w={{ base: "95%", md: "90%", lg: "80%" }} mt="2">
        <HStack bg="coolGray.50" pt="2" w="100%" px="4">
          <Link
            isUnderlined={false}
            _text={{
              color: "coolGray.700",
              fontSize: "xs",
              fontWeight: "light",
            }}
            _hover={{
              _text: {
                color: "red.500",
              },
            }}
            onPress={() => router.push("/")}
          >
            Home
          </Link>
          <Text color="coolGray.400" fontSize={"xs"}>
            {"  "}/{"  "}
          </Text>
          <Text color="coolGray.300" fontWeight={"normal"} fontSize={"xs"}>
            Collections
          </Text>
        </HStack>
        <HStack
          w={{ base: "100%", md: "100%", lg: "100%" }}
          pl={{ base: 0, md: 0, lg: 0 }}
          alignItems={{ lg: "center" }}
          bg="coolGray.50"
          borderColor="coolGray.200"
          flexWrap="wrap"
        >
          <HStack
            justifyContent="flex-start"
            flexWrap="wrap"
            w={{ base: "95%", md: "95%", lg: "100%" }}
          >
            <Pressable
              p="2"
              px="2"
              pb="4"
              onPress={() => {
                return setTabName("Delivery");
              }}
              borderBottomWidth="2"
              borderBottomColor={
                tabName == "Delivery" ? "red.400" : "coolGray.50"
              }
            >
              <HStack alignItems={"center"}>
                <Box
                  bg={tabName == "Delivery" ? "cyanZomato.300" : "coolGray.100"}
                  p="4"
                  borderRadius="full"
                  mr="2"
                >
                  <Image
                    source={{
                      uri: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
                    }}
                    alt="Alternate Text"
                    w={8}
                    h={8}
                    resizeMode="contain"
                  />
                </Box>
                <Text
                  fontWeight="medium"
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={tabName == "Delivery" ? "red.500" : "coolGray.600"}
                >
                  Delivery
                </Text>
              </HStack>
            </Pressable>
            <Pressable
              p="2"
              px="4"
              pb="4"
              onPress={() => {
                setTabName("Dining Out");
              }}
              borderBottomWidth="2"
              borderBottomColor={
                tabName == "Dining Out" ? "red.400" : "coolGray.50"
              }
            >
              <HStack alignItems={"center"}>
                <Box
                  bg={
                    tabName == "Dining Out" ? "cyanZomato.300" : "coolGray.100"
                  }
                  p="4"
                  borderRadius="full"
                  mr="2"
                >
                  <Image
                    source={{
                      uri: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
                    }}
                    alt="Alternate Text"
                    w={8}
                    h={8}
                    resizeMode="contain"
                  />
                </Box>
                <Text
                  fontWeight="medium"
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={tabName == "Dining Out" ? "red.500" : "coolGray.600"}
                >
                  Dining Out
                </Text>
              </HStack>
            </Pressable>
            <Pressable
              p="2"
              pb="4"
              px="4"
              onPress={() => {
                setTabName("Nightlife");
              }}
              borderBottomWidth="2"
              borderBottomColor={
                tabName == "Nightlife" ? "red.400" : "coolGray.50"
              }
            >
              <HStack alignItems={"center"}>
                <Box
                  bg={
                    tabName == "Nightlife" ? "cyanZomato.300" : "coolGray.100"
                  }
                  p="4"
                  borderRadius="full"
                  mr="2"
                >
                  <Image
                    source={{
                      uri: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webphttps://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
                    }}
                    alt="Alternate Text"
                    w={8}
                    h={8}
                    resizeMode="contain"
                  />
                </Box>
                <Text
                  fontWeight="medium"
                  fontSize={{ base: "lg", lg: "xl" }}
                  color={tabName == "Nightlife" ? "red.500" : "coolGray.800"}
                >
                  Nightlife
                </Text>
              </HStack>
            </Pressable>
          </HStack>
        </HStack>
      </VStack>
      <Box bg="coolGray.50" w="100%" mx="auto" alignItems="center">
        <Box w={{ base: "95%", md: "90%", lg: "80%" }}>
          {tabName == "Delivery" ? <DiningOut /> : null}
          {tabName == "Dining Out" ? <DiningOut /> : null}
          {tabName == "Nightlife" ? <DiningOut /> : null}
        </Box>
      </Box>
      <HStack
        w={{ base: "95%", md: "90%", lg: "80%" }}
        mx="6"
        pt="8"
        pb="4"
        flexWrap="wrap"
      >
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Icon
            as={<Ionicons name="ios-git-compare-outline" />}
            size="4"
            color="coolGray.400"
          />
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Filters
          </Text>
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Icon
            as={<Ionicons name="swap-vertical-outline" />}
            size="5"
            color="coolGray.400"
          />
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Distance
          </Text>
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Rating: 4.0+
          </Text>
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Online bookings
          </Text>
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Cuisines
          </Text>
          <Icon
            as={<MaterialIcons name="keyboard-arrow-down" />}
            size="5"
            color="coolGray.400"
          />
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Pro Offers
          </Text>
          <Icon
            as={<MaterialIcons name="keyboard-arrow-down" />}
            size="5"
            color="coolGray.400"
          />
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Outdoor Seating
          </Text>
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Serves Alcohol
          </Text>
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Pure Veg
          </Text>
        </Link>
        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Open Now
          </Text>
        </Link>

        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            More filters
          </Text>
          <Icon
            as={<MaterialIcons name="keyboard-arrow-down" />}
            size="5"
            color="coolGray.400"
          />
        </Link>

        <Link
          mr="4"
          alignItems="center"
          borderWidth="1"
          borderRadius="md"
          _hover={{ bg: "coolGray.100" }}
          borderColor="coolGray.400"
          py="2"
          px="3"
          my="2"
        >
          <Text
            color="coolGray.400"
            fontSize="sm"
            fontWeight="light"
            fontFamily="Okra,Helvetica,sans-serif"
            ml="2"
          >
            Cafés
          </Text>
        </Link>
      </HStack>

      <Footer />
    </Box>
  );
}
