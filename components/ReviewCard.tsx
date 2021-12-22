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
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function ReviewCard(props: any) {
  return (
    <VStack w="100%" px="4">
      <HStack justifyContent={"space-between"} w="100%">
        <HStack my="2">
          <Image
            height="44px"
            width="44px"
            borderRadius={"full"}
            source="https://b.zmtcdn.com/data/user_profile_pictures/70f/fa9eca8e5c5aba0e9648be31e4f5770f.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A"
            alt="Image"
            mr="3"
          />
          <VStack>
            <Text
              fontSize="md"
              fontWeight={"medium"}
              fontFamily={"Okra,Helvetica,sans-serif"}
              _dark={{ color: "coolGray.50" }}
              _light={{ color: "rgb(54, 54, 54)" }}
            >
              Sunny Chauhan
            </Text>
            <HStack alignItems={"center"}>
              <Text
                fontSize="sm"
                fontWeight={"light"}
                fontFamily={"Okra,Helvetica,sans-serif"}
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "#9C9C9C" }}
              >
                81 reviews
              </Text>
              <Icon
                as={<Entypo name="dot-single" />}
                size="6"
                _light={{ color: "#9C9C9C" }}
                _dark={{ color: "#9C9C9C" }}
              />
              <Text
                fontSize="sm"
                fontWeight={"light"}
                fontFamily={"Okra,Helvetica,sans-serif"}
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "#9C9C9C" }}
              >
                249 Followers
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <Box justifyContent={"center"} my="2">
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"rgb(255, 126, 139)"}
            py={"1"}
            px={"4"}
            flex="1"
          >
            <Text
              color="rgb(239, 79, 95)"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Follow
            </Text>
          </Link>
        </Box>
      </HStack>
      <HStack alignItems={"center"} space="2" mb="3">
        <HStack
          alignItems={"center"}
          bg="#0E5020"
          borderRadius={"md"}
          space="1"
          px="1"
        >
          <Text
            color="white"
            fontSize="13px"
            fontWeight={"semibold"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            5
          </Text>
          <Icon
            as={<FontAwesome name="star" />}
            size="2"
            _light={{ color: "white" }}
            _dark={{ color: "#9C9C9C" }}
          />
        </HStack>
        <Text
          color="#363636"
          fontSize="xs"
          fontWeight={"normal"}
          fontFamily={"Okra,Helvetica,sans-serif"}
          mr="1"
        >
          DINING
        </Text>
        <Text
          color="#9C9C9C"
          fontSize="sm"
          fontWeight={"normal"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          2 months ago
        </Text>
      </HStack>
      <HStack alignItems={"center"} space="1" mb="2">
        <Icon
          as={<FontAwesome name="thumbs-up" />}
          size="4"
          _light={{ color: "#3AB757" }}
          _dark={{ color: "coolGray.500" }}
        />
        <Text
          color="#3AB757"
          fontSize="13px"
          fontWeight={"medium"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          POSITIVE
        </Text>
      </HStack>
      <HStack alignItems={"center"} space="2" mb="4">
        <Box bg="#E8E8E8" px="2" py="6px" borderRadius={"2xl"}>
          <Text
            color="#828282"
            fontSize="xs"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            courteous staff
          </Text>
        </Box>
        <Box bg="#E8E8E8" px="2" py="6px" borderRadius={"2xl"}>
          <Text
            color="#828282"
            fontSize="xs"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            great food
          </Text>
        </Box>
        <Box bg="#E8E8E8" px="2" py="6px" borderRadius={"2xl"}>
          <Text
            color="#828282"
            fontSize="xs"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            ambience
          </Text>
        </Box>
        <Box bg="#E8E8E8" px="2" py="6px" borderRadius={"2xl"}>
          <Text
            color="#828282"
            fontSize="xs"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            amazing drinks
          </Text>
        </Box>
      </HStack>
      <HStack alignItems={"center"} mb="3">
        <Text
          color="#696969"
          fontSize="md"
          fontWeight={"light"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          The best bar in the country for a reason ! WHAT A PLACE !!! Their
          Infusions are out of this world. Highly Recommend the Yang’s Old
          Fashion, The Zing Thing and the Plum highball ! Also the Darjeeling
          Mail. Manish from the bar made sure each drink was exceptional. In
          terms of food the pork sliders were nice and juicy and when it came to
          the fried chicken - super crispy on the outside yet moist and tender
          on the inside. The Ambiance of the place was totally my kind - rustic
          - relaxed yet great energy !! DEFINITELY RECOMMENDED !!
        </Text>
      </HStack>
      <ScrollView
        mb="5"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          height="150px"
          width="240px"
          source="https://b.zmtcdn.com/data/reviews_photos/fc3/34c6f4408ce45fba3150dcd1bdd3cfc3_1634536759.jpg?output-format=webp"
          alt="Image"
          mr="2"
          borderRadius={"md"}
        />
        <Image
          height="150px"
          width="240px"
          source="https://b.zmtcdn.com/data/reviews_photos/45d/b3591d3baa2d5e223a4fe142d522a45d_1634536758.jpg?output-format=webp"
          alt="Image"
          mr="2"
          borderRadius={"md"}
        />
        <Image
          height="150px"
          width="240px"
          source="https://b.zmtcdn.com/data/reviews_photos/079/f65fbb66745f40c6a2d2a671c59ea079_1634536751.jpg?output-format=webp"
          alt="Image"
          borderRadius={"md"}
        />
      </ScrollView>
      <HStack alignItems={"center"}>
        <Text
          color="#9C9C9C"
          fontSize="sm"
          fontWeight={"light"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          0 Votes for helpful, 0 Comments
        </Text>
      </HStack>
      <HStack space="6" alignItems={"center"}>
        <Link
          _hover={{ bg: "#F8F8F8" }}
          alignItems={"center"}
          borderRadius={"md"}
          py={"2"}
          px={"1"}
          my="2"
        >
          <Icon
            as={<FontAwesome name="thumbs-o-up" />}
            size="5"
            _light={{ color: "rgb(130, 130, 130)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text
            color="#9C9C9C"
            fontSize="sm"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
            ml="1"
          >
            Helpful
          </Text>
        </Link>
        <Link
          _hover={{ bg: "#F8F8F8" }}
          alignItems={"center"}
          borderRadius={"md"}
          py={"2"}
          px={"1"}
          my="2"
        >
          <Icon
            as={<MaterialCommunityIcons name="comment-text-multiple-outline" />}
            size="5"
            _light={{ color: "rgb(130, 130, 130)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text
            color="#9C9C9C"
            fontSize="sm"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
            ml="1"
          >
            Comment
          </Text>
        </Link>
        <Link
          _hover={{ bg: "#F8F8F8" }}
          alignItems={"center"}
          borderRadius={"md"}
          py={"2"}
          px={"1"}
          my="2"
        >
          <Icon
            as={<Ionicons name="ios-arrow-redo-outline" />}
            size="5"
            _light={{ color: "rgb(130, 130, 130)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text
            color="#9C9C9C"
            fontSize="sm"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
            ml="1"
          >
            Share
          </Text>
        </Link>
      </HStack>
    </VStack>
  );
}
