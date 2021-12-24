import React from "react";
import {
  Box,
  Divider,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
  Image,
  Pressable,
} from "native-base";
import {
  Entypo,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Links_Company = [
  "Who We Are",
  "Blog",
  "Careers",
  "Report Fraud",
  "Contact",
  "Investor Relations",
];
const Links_ForFoodies = [
  "Code of Conduct",
  "Community",
  "Blogger Help",
  "Mobile Apps",
];
const Links_ForRestaurants = ["Add Restaurants"];
const Links_ForEnterprises = ["Zomato for Work"];
const Links_ForYou = ["Privacy", "Terms", "Security", "Sitemap"];

export default function Footer(props: any) {
  return (
    <Box
      bg="#F8F8F8"
      py="5"
      w="100%"
      px={{ base: 2 }}
      mt={4}
      alignItems={"center"}
    >
      <VStack w={{ base: "95%", md: "80%", lg: "80%", xl: "80%" }}>
        <HStack
          mb={{ base: 5, md: 8 }}
          alignItems={{ base: "flex-start", md: "center" }}
          justifyContent={"space-between"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Text
            fontSize={"36px"}
            fontWeight={"extrabold"}
            mb={{ base: 2, md: 0 }}
          >
            Tomato
          </Text>
          <HStack alignItems={"center"} space="4">
            <HStack
              space="1"
              py="1"
              px="1"
              alignItems={"center"}
              borderWidth={"1"}
              borderColor={"coolGray.400"}
              borderRadius={"4"}
            >
              <Image
                source={{
                  uri: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg",
                }}
                alt="Alternate Text"
                size="5"
                resizeMode="contain"
                mr="2"
                ml="1"
              />
              <Text fontWeight={"normal"} fontSize={"18px"}>
                India
              </Text>
              <Pressable
              //@ts-ignore
              >
                <Icon
                  as={<MaterialCommunityIcons name="chevron-down" />}
                  size="5"
                  _light={{ color: "coolGray.900" }}
                  _dark={{ color: "coolGray.500" }}
                />
              </Pressable>
            </HStack>
            <HStack
              space="1"
              py="1"
              px="1"
              alignItems={"center"}
              borderWidth={"1"}
              borderColor={"coolGray.400"}
              borderRadius={"4"}
            >
              <Icon
                as={<SimpleLineIcons name="globe" />}
                size="4"
                _light={{ color: "coolGray.900" }}
                _dark={{ color: "coolGray.500" }}
                mr="1"
                ml="1"
              />
              <Text fontWeight={"normal"} fontSize={"18px"}>
                English
              </Text>

              <Pressable>
                <Icon
                  as={<MaterialCommunityIcons name="chevron-down" />}
                  size="5"
                  _light={{ color: "coolGray.900" }}
                  _dark={{ color: "coolGray.500" }}
                />
              </Pressable>
            </HStack>
          </HStack>
        </HStack>
        <HStack
          justifyContent="space-between"
          mr="16"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <VStack mb="4" space="6px">
            <Text
              mb="6px"
              fontSize={"sm"}
              fontWeight={"medium"}
              letterSpacing={"2xl"}
            >
              COMPANY
            </Text>
            {Links_Company.map((item, index) => {
              return (
                <Link
                  key={index}
                  href="#"
                  isUnderlined={false}
                  _text={{
                    color: "#696969",
                    fontSize: "sm",
                    fontWeight: "light",
                  }}
                  _hover={{
                    _text: {
                      color: "rgb(28, 28, 28)",
                    },
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </VStack>
          <VStack mb="4" space="6px">
            <Text
              mb="6px"
              fontSize={"sm"}
              fontWeight={"medium"}
              letterSpacing={"2xl"}
            >
              FOR FOODIES
            </Text>
            {Links_ForFoodies.map((item, index) => {
              return (
                <Link
                  key={index}
                  href="#"
                  isUnderlined={false}
                  _text={{
                    color: "#696969",
                    fontSize: "sm",
                    fontWeight: "light",
                  }}
                  _hover={{
                    _text: {
                      color: "rgb(28, 28, 28)",
                    },
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </VStack>
          <VStack>
            <VStack mb="4" space="6px">
              <Text
                mb="6px"
                fontSize={"sm"}
                fontWeight={"medium"}
                letterSpacing={"2xl"}
              >
                FOR RESTAURANTS
              </Text>
              {Links_ForRestaurants.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    isUnderlined={false}
                    _text={{
                      color: "#696969",
                      fontSize: "sm",
                      fontWeight: "light",
                    }}
                    _hover={{
                      _text: {
                        color: "rgb(28, 28, 28)",
                      },
                    }}
                  >
                    {item}
                  </Link>
                );
              })}
            </VStack>
            <VStack mb="4" space="6px" mt="3">
              <Text
                mb="6px"
                fontSize={"sm"}
                fontWeight={"medium"}
                letterSpacing={"2xl"}
              >
                FOR ENTERPRISES
              </Text>
              {Links_ForEnterprises.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    isUnderlined={false}
                    _text={{
                      color: "#696969",
                      fontSize: "sm",
                      fontWeight: "light",
                    }}
                    _hover={{
                      _text: {
                        color: "rgb(28, 28, 28)",
                      },
                    }}
                  >
                    {item}
                  </Link>
                );
              })}
            </VStack>
          </VStack>
          <VStack mb="4" space="6px">
            <Text
              mb="6px"
              fontSize={"sm"}
              fontWeight={"medium"}
              letterSpacing={"2xl"}
            >
              FOR YOU
            </Text>
            {Links_ForYou.map((item, index) => {
              return (
                <Link
                  key={index}
                  href="#"
                  isUnderlined={false}
                  _text={{
                    color: "#696969",
                    fontSize: "sm",
                    fontWeight: "light",
                  }}
                  _hover={{
                    _text: {
                      color: "rgb(28, 28, 28)",
                    },
                  }}
                >
                  {item}
                </Link>
              );
            })}
          </VStack>
          <VStack mb="4" space="6px" pr="8">
            <Text
              mb="6px"
              fontSize={"sm"}
              fontWeight={"medium"}
              letterSpacing={"2xl"}
            >
              SOCIAL LINKS
            </Text>
            <HStack space="2">
              <Pressable
              //@ts-ignore
              >
                <Icon
                  size="6"
                  as={Entypo}
                  name="facebook-with-circle"
                  _light={{ color: "coolGray.900" }}
                  _dark={{ color: "coolGray.500" }}
                />
              </Pressable>
              <Pressable
              //@ts-ignore
              >
                <Icon
                  size="6"
                  as={Entypo}
                  name="twitter-with-circle"
                  _light={{ color: "coolGray.900" }}
                  _dark={{ color: "coolGray.500" }}
                />
              </Pressable>
              <Pressable
              //@ts-ignore
              >
                <Icon
                  size="6"
                  as={Entypo}
                  name="instagram-with-circle"
                  _light={{ color: "coolGray.900" }}
                  _dark={{ color: "coolGray.500" }}
                />
              </Pressable>
            </HStack>
            <VStack mt="2" space={{ base: "1", lg: 0 }}>
              <Pressable
              //@ts-ignore
              >
                <Image
                  source={{
                    uri: "https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png",
                  }}
                  alt="Alternate Text"
                  resizeMode="contain"
                  w={{ base: "150px", lg: "100%" }}
                  h="50px"
                />
              </Pressable>
              <Pressable
              //@ts-ignore
              >
                <Image
                  source={{
                    uri: "https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png",
                  }}
                  alt="Alternate Text"
                  resizeMode="contain"
                  w={{ base: "150px", lg: "100%" }}
                  h="50px"
                />
              </Pressable>
            </VStack>
          </VStack>
        </HStack>
        <Divider
          mt="8"
          width="100%"
          _light={{ bg: "coolGray.400" }}
          _dark={{ bg: "coolGray.400" }}
        />
        <HStack mt="6" mb="3">
          <Text
            fontSize={"13px"}
            fontWeight={"light"}
            lineHeight={"17px"}
            color="#4F4F4F"
          >
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2021 © Zomato™ Ltd.
            All rights reserved.
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
