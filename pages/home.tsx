import React from "react";
import {
  Center,
  Image,
  HStack,
  Text,
  Heading,
  VStack,
  Icon,
  Divider,
  Input,
  Pressable,
} from "native-base";
import { useRouter } from "next/router";
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";
import Footer from "../components/Footer";
const list = [
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/64dffaa58ffa55a377cdf42b6a690e721585809275.png?fit=around|402:360&crop=402:360;*,*",
    text: "Order Food Online",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/95f005332f5b9e71b9406828b63335331585809309.png?fit=around|402:360&crop=402:360;*,*",
    text: "Go out for a meal",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/b256d0dd8a29f9e0623ecaaea910534d1585809352.png?fit=around|402:360&crop=402:360;*,*",
    text: "Zomato Pro",
  },
  {
    imageUri:
      "https://b.zmtcdn.com/webFrontend/8ff4212b71b948ed5b6d2ce0d2bc99981594031410.png?fit=around|402:360&crop=402:360;*,*",
    text: "Nightlife & Clubs",
  },
];

export default function Home() {
  return (
    <VStack alignItems="center">
      <MainPageBanner />
      <ZomatoCategories />
      <Footer />
    </VStack>
  );
}
function MainPageBanner(props: any) {
  return (
    <VStack w="100%" h={500}>
      <Image
        position="absolute"
        zIndex="-1"
        source={{
          uri: "https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png",
        }}
        alt="Alternate Text"
        size="xl"
        w="100%"
        h={500}
      />
      <HStack alignItems="center" justifyContent="space-between" mx={40} py={4}>
        <Text color="white" fontWeight="medium" fontSize="md">
          Get the App
        </Text>
        <HStack space="10" alignItems="center">
          <Text color="white" fontWeight="medium" fontSize="md">
            Add restaurant
          </Text>
          <Text color="white" fontWeight="medium" fontSize="md">
            Log in
          </Text>
          <Text color="white" fontWeight="medium" fontSize="md">
            Sign up
          </Text>
        </HStack>
      </HStack>
      <Center mt={20}>
        <Image
          source={{
            uri: "https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png",
          }}
          alt="Alternate Text"
          w={300}
          h={60}
        />

        <Heading
          color="white"
          fontSize="4xl"
          fontWeight="normal"
          lineHeight="xs"
          mt={10}
        >
          Discover the best food &amp; drinks in Delhi NCR
        </Heading>

        <HStack
          bg="white"
          space="3"
          alignItems="center"
          borderRadius="lg"
          w="48%"
          py={2}
          mt={12}
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
      </Center>
    </VStack>
  );
}
function ZomatoCategories(props: any) {
  const router = useRouter();
  return (
    <Pressable
      //@ts-ignore
      onPress={() => {
        console.log("hello");
        router.push("/goformeal");
      }}
    >
      <HStack space={4} mt={8}>
        {list.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </HStack>
    </Pressable>
  );
}
function Card(props: any) {
  return (
    <VStack
      w={260}
      alignItems="center"
      borderWidth={1}
      borderColor="coolGray.200"
      borderRadius="lg"
    >
      <Image
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        w={260}
        h={220}
        source={{
          uri: props.item.imageUri,
        }}
        alt="Alternate Text"
      />
      <Center
        _text={{ lineHeight: "4xl", fontSize: "lg" }}
        color="#363636"
        fontWeight="extrabold"
      >
        {props.item.text}
      </Center>
    </VStack>
  );
}
