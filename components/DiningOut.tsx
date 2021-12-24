import React from "react";
import {
  Box,
  Button,
  Divider,
  Hidden,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  VStack,
  Image,
  Pressable,
  ScrollView,
} from "native-base";
import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useRouter } from "next/router";

const card_data = [
  {
    imageUri:
      "https://b.zmtcdn.com/data/collections/cda5618a6026b24d107c01c0a8c9e332_1608708052.jpg?output-format=webp",
    title: "Christmas Specials",
    subtitle: "7 Places",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/data/collections/26ac80f30915c30cb315afcdcf067fe6_1608708104.jpg?output-format=webp",
    title: "New Year's Specials",
    subtitle: "7 Places",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/data/collections/d7e3f1d03609fdd6672872662fa5bcf7_1637735165.png?output-format=webp",
    title: "Trending This Week",
    subtitle: "30 Places",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/data/collections/53be5a745e959a8f6c51c52dd3d9edd1_1536825795.jpg?output-format=webp",
    title: "Best of Bengaluru",
    subtitle: "121 Places",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg?output-format=webp",
    title: "Newly Opened",
    subtitle: "9 Places",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/data/collections/4b37078f7b206f169f7ffa42edf28637_1633437303.jpg?output-format=webp",
    title: "Love for Pizza",
    subtitle: "22 Places",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/data/collections/cac339f5fde8a44f6921bbcc1a5adaad_1633697927.jpg?output-format=webp",
    title: "Brilliant Biryanis",
    subtitle: "14 Places",
  },
];

export default function DiningOut(props: any) {
  const router = useRouter();
  return (
    <Box
      bg="#F8F8F8"
      py="5"
      borderTopWidth={"1px"}
      borderTopColor={"coolGray.200"}
      w="95%"
      mx="4"
    >
      <VStack pb="6">
        <Text
          fontSize={"30px"}
          fontWeight={"medium"}
          color="rgb(28, 28, 28)"
          fontFamily={"Okra,Helvetica,sans-serif"}
          mb="26px"
        >
          Collections
        </Text>
        <HStack
          // alignItems={"center"}
          alignItems={{ base: "flex-start", lg: "center" }}
          justifyContent={"space-between"}
          mb="3"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Text
            fontSize={"lg"}
            fontWeight={"light"}
            color="rgb(54, 54, 54)"
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </Text>
          <HStack alignItems="center" mt={{ base: 2, lg: 0 }} space="2">
            <Link
              href="#"
              isUnderlined={false}
              _text={{
                color: "rgb(255, 126, 139)",
                fontSize: "md",
                fontWeight: "light",
                fontFamily: "Okra,Helvetica,sans-serif",
              }}
              _hover={{
                _text: {
                  color: "#EF4F5F",
                },
              }}
            >
              All collections in Bengaluru
            </Link>
            <Link href="#" isUnderlined={false}>
              <Icon
                as={<Octicons name="triangle-right" />}
                size="4"
                _light={{ color: "rgb(255, 126, 139)" }}
                _dark={{ color: "coolGray.500" }}
              />
            </Link>
          </HStack>
        </HStack>
        {/* @ts-ignore */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {card_data.map((item: any, index: number) => {
            return (
              <HStack key={index} alignItems="center" mr="4">
                <Pressable
                  // @ts-ignore
                  onPress={() => {
                    router.push("/restaurants");
                  }}
                >
                  <Box
                    borderRadius="lg"
                    _light={{ bg: "primary.50" }}
                    _dark={{ bg: "customGray" }}
                  >
                    <Image
                      height="320px"
                      width="260px"
                      borderRadius={{ base: 4, md: 8 }}
                      source={item.imageUri}
                      alt="Image"
                    />

                    <VStack
                      position={"absolute"}
                      bottom={"0"}
                      // ml="4"
                      // mb="2"
                      flex="1"
                      width={"100%"}
                      //   p="4"
                      alignItems="flex-start"
                      backgroundColor={"rgba(50,50,50,0.6)"}
                      borderBottomRadius="lg"
                    >
                      <Text
                        ml="4"
                        mb="2"
                        fontSize="lg"
                        fontWeight={"light"}
                        fontFamily={"Okra,Helvetica,sans-serif"}
                        textAlign="center"
                        _dark={{ color: "coolGray.50" }}
                        _light={{ color: "white" }}
                      >
                        {item.title}
                      </Text>
                      <HStack alignItems={"center"} space="2" ml="4" mb="2">
                        <Text
                          fontSize="sm"
                          fontWeight={"light"}
                          fontFamily={"Okra,Helvetica,sans-serif"}
                          textAlign="center"
                          _dark={{ color: "coolGray.50" }}
                          _light={{ color: "white" }}
                        >
                          {item.subtitle}
                        </Text>
                        <Icon
                          as={<Octicons name="triangle-right" />}
                          size="4"
                          _light={{ color: "white" }}
                          _dark={{ color: "coolGray.500" }}
                        />
                      </HStack>
                    </VStack>
                  </Box>
                </Pressable>
              </HStack>
            );
          })}
        </ScrollView>
        {/* </ScrollView> */}
      </VStack>
    </Box>
  );
}
