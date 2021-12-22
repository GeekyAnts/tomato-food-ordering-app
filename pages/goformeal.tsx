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

import DiningOut from "../components/DiningOut";
import { Ionicons, MaterialIcons, Octicons } from "@expo/vector-icons";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function GoForMeal(props: any) {
  const [tabName, setTabName] = React.useState("Dining Out");

  return (
    <Box
      alignItems="center"
      _light={{
        bg: "coolGray.50",
        borderColor: "coolGray.200",
      }}
      _dark={{
        bg: "coolGray.900",
        borderColor: "coolGray.800",
      }}
      w="100%"
    >
      <Header />
      <VStack w="80%">
        <HStack bg="coolGray.50" pl="5" pt="2">
          <Link
            href="#"
            isUnderlined={false}
            _text={{
              color: "rgb(130, 130, 130)",
              fontSize: "xs",
              fontWeight: "light",
            }}
            _hover={{
              _text: {
                color: "rgb(239, 79, 95)",
              },
            }}
          >
            Home
          </Link>
          <Text color="coolGray.400" fontSize={"xs"}>
            {"  "}/{"  "}
          </Text>
          <Link
            href="#"
            isUnderlined={false}
            _text={{
              color: "rgb(130, 130, 130)",
              fontSize: "xs",
              fontWeight: "light",
            }}
            _hover={{
              _text: {
                color: "rgb(239, 79, 95)",
              },
            }}
          >
            India
          </Link>
          <Text color="coolGray.400" fontSize={"xs"}>
            {"  "}/{"  "}
          </Text>
          <Text color="coolGray.300" fontWeight={"normal"} fontSize={"xs"}>
            Bengaluru Restaurants
          </Text>
        </HStack>
        <HStack
          pl={{ base: 4, md: 10, lg: 10 }}
          pt={{ base: 4 }}
          space={{ base: 40, md: 40, lg: 40 }}
          alignItems={{ lg: "center" }}
          _light={{
            bg: "coolGray.50",
            borderColor: "coolGray.200",
          }}
          flexWrap="wrap"
          width="100%"
        >
          <HStack
            justifyContent="flex-start"
            space="16"
            pt={2}
            px={{ base: 4, md: 4, lg: 0 }}
            flexWrap="wrap"
            w={{ base: "60%", md: "60%", lg: "100%" }}
          >
            <Pressable
              p="2"
              px="4"
              pb="4"
              // pr="0"
              // @ts-ignore
              onPress={() => {
                setTabName("Delivery");
              }}
              borderBottomWidth="2px"
              _light={{
                borderBottomColor:
                  tabName == "Delivery" ? "#FF7E8B" : "coolGray.50",
              }}
              _dark={{
                borderBottomColor:
                  tabName == "Delivery" ? "primary.700" : "customGray",
              }}
            >
              <VStack>
                <HStack alignItems={"center"}>
                  <Box
                    bg={tabName == "Delivery" ? "#E5F3F3" : "#F8F8F8"}
                    p="4"
                    borderRadius="full"
                    mr="2"
                  >
                    <Image
                      source={{
                        uri: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
                      }}
                      alt="Alternate Text"
                      w="30px"
                      h="30px"
                      resizeMode="contain"
                    />
                  </Box>
                  <Text
                    fontWeight="medium"
                    fontSize={"xl"}
                    _light={{
                      color: tabName == "Delivery" ? "#EF4F5F" : "#696969",
                    }}
                    _dark={{
                      color:
                        tabName == "Delivery" ? "coolGray.50" : "coolGray.400",
                    }}
                  >
                    Delivery
                  </Text>
                </HStack>
              </VStack>
            </Pressable>
            <Pressable
              p="2"
              px="4"
              pb="4"
              // @ts-ignore
              onPress={() => {
                setTabName("Dining Out");
              }}
              borderBottomWidth="2px"
              _light={{
                borderBottomColor:
                  tabName == "Dining Out" ? "#FF7E8B" : "coolGray.50",
              }}
              _dark={{
                borderBottomColor:
                  tabName == "Dining Out" ? "primary.700" : "customGray",
              }}
            >
              <VStack>
                <HStack alignItems={"center"}>
                  <Box
                    bg={tabName == "Dining Out" ? "#E5F3F3" : "#F8F8F8"}
                    p="4"
                    borderRadius="full"
                    mr="2"
                  >
                    <Image
                      source={{
                        uri: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
                      }}
                      alt="Alternate Text"
                      w="30px"
                      h="30px"
                      resizeMode="contain"
                    />
                  </Box>
                  <Text
                    fontWeight="medium"
                    fontSize={"xl"}
                    _light={{
                      color: tabName == "Dining Out" ? "#EF4F5F" : "#696969",
                    }}
                    _dark={{
                      color:
                        tabName == "Dining Out"
                          ? "coolGray.50"
                          : "coolGray.400",
                    }}
                  >
                    Dining Out
                  </Text>
                </HStack>
              </VStack>
            </Pressable>
            <Pressable
              p="2"
              pb="4"
              px="4"
              // @ts-ignore
              onPress={() => {
                setTabName("Nightlife");
              }}
              borderBottomWidth="2px"
              _light={{
                borderBottomColor:
                  tabName == "Nightlife" ? "#FF7E8B" : "coolGray.50",
              }}
              _dark={{
                borderBottomColor:
                  tabName == "Nightlife" ? "primary.700" : "customGray",
              }}
            >
              <HStack alignItems={"center"}>
                <Box
                  bg={tabName == "Nightlife" ? "#E5F3F3" : "#F8F8F8"}
                  p="4"
                  borderRadius="full"
                  mr="2"
                >
                  <Image
                    source={{
                      uri: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webphttps://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
                    }}
                    alt="Alternate Text"
                    w="30px"
                    h="30px"
                    resizeMode="contain"
                  />
                </Box>
                <Text
                  fontWeight="medium"
                  fontSize={"xl"}
                  _light={{
                    color: tabName == "Nightlife" ? "#EF4F5F" : "#696969",
                  }}
                  _dark={{
                    color:
                      tabName == "Nightlife" ? "coolGray.50" : "coolGray.400",
                  }}
                >
                  Nightlife
                </Text>
              </HStack>
            </Pressable>
          </HStack>
        </HStack>
        {tabName == "Delivery" ? <DiningOut /> : null}
        {tabName == "Dining Out" ? <DiningOut /> : null}
        {tabName == "Nightlife" ? <DiningOut /> : null}
        <HStack px="5" pt="8" space="4" flexWrap={"wrap"}>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Icon
              as={<Ionicons name="ios-git-compare-outline" />}
              size="4"
              _light={{ color: "#9C9C9C" }}
              _dark={{ color: "coolGray.500" }}
            />
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
              ml="2"
            >
              Filters
            </Text>
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Icon
              as={<Ionicons name="swap-vertical-outline" />}
              size="5"
              _light={{ color: "#9C9C9C" }}
              _dark={{ color: "coolGray.500" }}
            />
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
              ml="2"
            >
              Distance
            </Text>
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Rating: 4.0+
            </Text>
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Online bookings
            </Text>
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"2"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
              mr="2"
            >
              Cuisines
            </Text>
            <Icon
              as={<MaterialIcons name="keyboard-arrow-down" />}
              size="5"
              _light={{ color: "#9C9C9C" }}
              _dark={{ color: "coolGray.500" }}
            />
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"2"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
              mr="2"
            >
              Pro Offers
            </Text>
            <Icon
              as={<MaterialIcons name="keyboard-arrow-down" />}
              size="5"
              _light={{ color: "#9C9C9C" }}
              _dark={{ color: "coolGray.500" }}
            />
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Outdoor Seating
            </Text>
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Serves Alcohol
            </Text>
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Pure Veg
            </Text>
          </Link>
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Open Now
            </Text>
          </Link>

          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"2"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
              mr="2"
            >
              More filters
            </Text>
            <Icon
              as={<MaterialIcons name="keyboard-arrow-down" />}
              size="5"
              _light={{ color: "#9C9C9C" }}
              _dark={{ color: "coolGray.500" }}
            />
          </Link>

          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"#9C9C9C"}
            py={"2"}
            px={"3"}
            my="2"
          >
            <Text
              color="#9C9C9C"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Cafés
            </Text>
          </Link>
        </HStack>
      </VStack>
      <Footer />
    </Box>
  );
}
