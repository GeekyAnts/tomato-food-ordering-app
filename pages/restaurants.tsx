import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Center,
  VStack,
  Image,
  HStack,
  Icon,
  Heading,
  Text,
  FlatList,
  useBreakpointValue,
  Divider,
  Pressable,
  Hidden,
} from "native-base";
import React from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
const list = [
  {
    id: 5,
    featured: true,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/chains/5/18367195/3776dceebc30566d77281fc61079db82.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "The Calorie Kitchen",
    dininingReviw: 4.6,
    deliverhyReview: 4.7,
    address: "Healthy Food, Continental Good Earth City ",
  },
  {
    id: 6,
    featured: false,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/9/307309/347b2c6d727df7a8a8a95c96208c80a3.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Raasta",
    dininingReviw: 3.9,
    deliverhyReview: 3.6,
    address: "Continental, Italian, Salad, Beverages Cyber Hub",
  },
  {
    id: 7,
    featured: true,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/6/307036/bc49fda959596e327ae2b35fccc51675.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Excuse Me Boss",
    dininingReviw: 4.3,
    deliverhyReview: 4.5,
    address: "North Indian, Chinese, European, Fast Food, Continental",
  },
  {
    id: 8,
    featured: false,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/7/18925817/3ae4a29143a3b7505069f0a066d49384.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Key - Hotel Samrat",
    dininingReviw: 3.6,
    deliverhyReview: 4.5,
    address: "Continental, North Indian, Bar Food Chanakyapuri, New Delhi",
  },
  {
    id: 1,
    featured: true,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/7/18204627/44ca13546b00709b72493c609ef2de17_featured_v2.png?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Warehouse Cafe",
    dininingReviw: 4.3,
    deliverhyReview: 4.5,
    address: "Bar Food, North Indian, Continental Sector 29, Gurgaon",
  },
  {
    id: 2,
    featured: true,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/1/18565991/e64084200ffd3b666cc78744f3adc938.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Dasaprakash",
    dininingReviw: 4.5,
    deliverhyReview: 4.6,
    address: "South Indian, North Indian, Chinese, Beverages",
  },
  {
    id: 3,
    featured: false,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/7/310737/985d2b54cfadd22b306bf9c2cf7fa992.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "7 Barrel Brew Pub",
    dininingReviw: 4.0,
    deliverhyReview: 4.5,
    address: "North Indian, Continental, Chinese, Kebab, ,",
  },
  {
    id: 4,
    featured: false,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/chains/2/19548852/b9ec22f8d244dce3d3d8394270e497d3_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "My Tea Chapel- Pinsa",
    dininingReviw: 3.6,
    deliverhyReview: 4.5,
    address: "Bubble Tea, Healthy Food, Italian, Salad, Fast Food,",
  },
];

export default function Restaurants() {
  const noColumn = useBreakpointValue({
    base: 2,
    lg: 4,
    md: 2,
    xl: 4,
  });
  return (
    <VStack alignItems="center" bg="coolGray.50">
      <Header />

      <VStack alignItems="center" w={{ base: "90%", md: "90%", lg: "80%" }}>
        <Banner />
        <FlatList
          mt={8}
          // @ts-ignore
          contentContainerStyle={{
            alignItems: "center",
          }}
          w="100%"
          numColumns={noColumn}
          data={list}
          // @ts-ignore
          keyExtractor={(item, index) => "key" + index}
          // @ts-ignore
          renderItem={({ item }) => <RestaurantCard item={item} />}
          key={noColumn}
        />
      </VStack>
      <Footer />
    </VStack>
  );
}
function RestaurantCard(props: any) {
  const router = useRouter();
  return (
    <Pressable
      //@ts-ignore
      onPress={() => {
        console.log("hello");
        router.push("/restaurantinfo");
      }}
    >
      <VStack w={268} mx={3} my={1} space={1}>
        <VStack w={268} h={185}>
          <Image
            borderRadius="lg"
            position="absolute"
            zIndex="-2"
            w={268}
            h={185}
            source={{
              uri: props.item.imageUri,
            }}
            alt="Alternate Text"
          />
          {props.item.featured ? (
            <HStack pl={2} pt={2} space="1" alignItems="center">
              <Center w={6} h={6} bg="#ef4f5f" borderRadius="full">
                <Icon
                  color="white"
                  fontWeight="medium"
                  as={MaterialCommunityIcons}
                  size="xs"
                  name="crown-outline"
                />
              </Center>
              <Text color="white" fontWeight="medium" fontSize="xs">
                Featured
              </Text>
            </HStack>
          ) : null}

          <VStack flex={1} pl={2} pb={2} justifyContent="flex-end">
            <Center
              w={150}
              bg="#d92662"
              _text={{
                color: "white",
                fontWeight: "medium",
                fontSize: "sm",
              }}
            >
              Pro - Get 20% off
            </Center>
          </VStack>
        </VStack>
        <Text color="coolGray.800" fontWeight="medium" fontSize="md">
          {props.item.name}
        </Text>
        <HStack space={3} alignItems="center">
          <HStack
            space={1}
            px={1}
            alignItems="center"
            borderRadius="lg"
            bg="#24963f"
          >
            <Text color="white" fontWeight="medium" fontSize="sm">
              {props.item.dininingReviw}
            </Text>
            <Icon
              color="white"
              fontWeight="medium"
              as={Entypo}
              size="xxs"
              name="star"
            />
          </HStack>
          <Text color="coolGray.700" fontWeight="normal" fontSize="xs">
            DINING |
          </Text>
          <HStack
            space={1}
            px={1}
            alignItems="center"
            borderRadius="lg"
            bg="#24963f"
          >
            <Text color="white" fontWeight="medium" fontSize="sm">
              {props.item.deliverhyReview}
            </Text>
            <Icon
              color="white"
              fontWeight="medium"
              as={Entypo}
              size="xxs"
              name="star"
            />
          </HStack>
          <Text color="coolGray.800" fontWeight="normal" fontSize="xs">
            DELIVERY
          </Text>
        </HStack>
        <Text color="coolGray.800" fontWeight="normal" fontSize="md">
          {props.item.address}
        </Text>
      </VStack>
    </Pressable>
  );
}
function Banner(props: any) {
  return (
    <VStack w="100%" h={320} mt={4}>
      <Image
        borderRadius="lg"
        position="absolute"
        zIndex="-2"
        w="100%"
        h={320}
        source={{
          uri: "https://b.zmtcdn.com/data/pictures/9/8019/d25efe481c28b69a550a8c904653e8b1_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        }}
        alt="Alternate Text"
      />

      <HStack
        w="100%"
        space="3"
        alignItems="center"
        justifyContent="flex-end"
        mt={4}
        pr={4}
      >
        <Center
          bg="black"
          opacity={0.7}
          px={4}
          py={2}
          borderRadius={20}
          _text={{
            color: "white",
            fontWeight: "medium",
            fontSize: "md",
          }}
        >
          + Save Collection
        </Center>
        <Center w={9} h={9} bg="black" opacity={0.7} borderRadius="full">
          <Icon
            color="white"
            fontWeight="medium"
            as={Entypo}
            size="xs"
            name="attachment"
          />
        </Center>
      </HStack>
      <VStack flex={1} pl={5} pb={5} justifyContent="flex-end">
        <VStack>
          <Heading
            color="white"
            fontSize="4xl"
            fontWeight="normal"
            lineHeight="xs"
            mt={10}
          >
            Trending This Week
          </Heading>
          <Text color="white" fontWeight="medium" fontSize="md">
            Most popular restaurants in town this week
          </Text>
          <Text mt={2} color="white" fontWeight="medium" fontSize="md">
            30 Places
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
}
