import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { Center, HStack, Icon, Image, Text, VStack } from "native-base";
import React from "react";
import { listType } from "../../types/restaurants";

type PropType = {
  item: listType;
};

function RestaurantCard(props: PropType) {
  return (
    <VStack w={268} space={1}>
      <VStack w={268} h={185}>
        <Image
          borderRadius="lg"
          position="absolute"
          zIndex="-2"
          w={268}
          h={185}
          source={{
            uri: props?.item?.imageUri,
          }}
          alt="Alternate Text"
        />
        {props?.item?.featured ? (
          <HStack pl={2} pt={2} space="1" alignItems="center">
            <Center w={6} h={6} bg="red.500" borderRadius="full">
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
            bg="pinkZomato.100"
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
        {props?.item?.name}
      </Text>
      <HStack space={3} alignItems="center">
        <HStack
          space={1}
          px={1}
          alignItems="center"
          borderRadius="lg"
          bg="success.700"
        >
          <Text color="white" fontWeight="medium" fontSize="sm">
            {props?.item?.dininingReviw}
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
          bg="success.700"
        >
          <Text color="white" fontWeight="medium" fontSize="sm">
            {props?.item?.deliverhyReview}
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
        {props?.item?.address}
      </Text>
    </VStack>
  );
}

export default RestaurantCard;
