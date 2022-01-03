import React from "react";
import {
  Box,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
  Image,
  Pressable,
  ScrollView,
} from "native-base";
import { Octicons } from "@expo/vector-icons";
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
      py="5"
      borderTopWidth="1"
      borderTopColor="coolGray.200"
      w={{ base: "95%", md: "90%", lg: "100%" }}
      maxW="1362"
    >
      <VStack pb="6">
        <Text
          fontSize="3xl"
          fontWeight="medium"
          color="grayZomato.700"
          fontFamily="Okra,Helvetica,sans-serif"
          mb={6}
        >
          Collections
        </Text>
        <HStack
          alignItems={{ base: "flex-start", lg: "center" }}
          justifyContent="space-between"
          mb="3"
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Text
            fontSize="lg"
            fontWeight="light"
            color="grayZomato.650"
            fontFamily="Okra,Helvetica,sans-serif"
          >
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Bengaluru, based on trends
          </Text>
          <HStack alignItems="center" mt={{ base: 2, lg: 0 }} space="2">
            <Link
              href="#"
              isUnderlined={false}
              _text={{
                color: "cyanZomato.200",
                fontSize: "md",
                fontWeight: "light",
                fontFamily: "Okra,Helvetica,sans-serif",
              }}
              _hover={{
                _text: {
                  color: "cyanZomato.500",
                },
              }}
            >
              All collections in Bengaluru
            </Link>
            <Link href="#" isUnderlined={false}>
              <Icon
                as={<Octicons name="triangle-right" />}
                size="4"
                color="cyanZomato.200"
              />
            </Link>
          </HStack>
        </HStack>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {card_data.map((item: any, index: number) => {
            return (
              <HStack key={index} alignItems="center" mr="4">
                <Pressable
                  onPress={() => {
                    router.push("/restaurants");
                  }}
                >
                  <Box borderRadius="lg" bg="primary.50">
                    <Image
                      height={80}
                      width={64}
                      borderRadius={{ base: 4, md: 8 }}
                      source={item.imageUri}
                      alt="Image"
                    />

                    <Box
                      position="absolute"
                      bottom="0"
                      w="100%"
                      top="0"
                      justifyContent="flex-end"
                      bg={{
                        linearGradient: {
                          colors: [
                            "grayTransparentZomato.400",
                            "grayTransparentZomato.600",
                          ],
                          start: [0, 0],
                          end: [0, 1],
                        },
                      }}
                    >
                      <VStack alignItems="flex-start" borderBottomRadius="lg">
                        <Text
                          ml="4"
                          mb="2"
                          fontSize="lg"
                          fontWeight="light"
                          fontFamily="Okra,Helvetica,sans-serif"
                          textAlign="center"
                          color="white"
                        >
                          {item.title}
                        </Text>
                        <HStack alignItems="center" space="2" ml="4" mb="2">
                          <Text
                            fontSize="sm"
                            fontWeight="light"
                            fontFamily="Okra,Helvetica,sans-serif"
                            textAlign="center"
                            color="white"
                          >
                            {item.subtitle}
                          </Text>
                          <Icon
                            as={<Octicons name="triangle-right" />}
                            size="4"
                            color="white"
                          />
                        </HStack>
                      </VStack>
                    </Box>
                  </Box>
                </Pressable>
              </HStack>
            );
          })}
        </ScrollView>
      </VStack>
    </Box>
  );
}
