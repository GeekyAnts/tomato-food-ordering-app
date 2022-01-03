import React from "react";
import { Octicons } from "@expo/vector-icons";
import { HStack, Icon, Link, Text, VStack } from "native-base";

function FoodBloggerCard(props: any) {
  return (
    <HStack
      mt={4}
      borderRadius="lg"
      alignItems="center"
      w="100%"
      bg="coolGray.100"
      px={3}
      py={2}
      justifyContent="space-between"
    >
      <VStack py={2}>
        <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
          Are you a food blogger?
        </Text>
        <HStack alignItems="center" space="2" mt="1">
          <Link
            href="#"
            isUnderlined={false}
            _text={{
              color: "red.400",
              fontSize: "sm",
              fontWeight: "medium",
              fontFamily: "Okra,Helvetica,sans-serif",
            }}
            _hover={{
              _text: {
                color: "red.700",
              },
            }}
          >
            Add a Zomato spoonback to your blog.
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
      <Link bg="red.400" alignItems="center" py="2" px="2" borderRadius="md">
        <Text
          color="white"
          fontSize="sm"
          fontWeight="light"
          fontFamily="Okra,Helvetica,sans-serif"
        >
          Get Restaurant Widget
        </Text>
        <Icon
          ml="2"
          as={<Octicons name="triangle-right" />}
          size="4"
          color="white"
        />
      </Link>
    </HStack>
  );
}

export default FoodBloggerCard;
