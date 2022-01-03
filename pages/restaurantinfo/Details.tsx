import React from "react";
import { VStack, HStack, Icon, Text, Pressable } from "native-base";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

function Details(props: any) {
  return (
    <VStack w="100%">
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        <Text
          color="coolGray.800"
          fontWeight="medium"
          fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
        >
          Sidecar
        </Text>
        <HStack space="10" alignItems="center">
          <HStack space="2" alignItems="center">
            <HStack
              px={1}
              mt={2}
              alignItems="center"
              borderRadius="lg"
              bg="success.700"
            >
              <Text color="white" fontWeight="medium" fontSize="xl">
                4.5
              </Text>
              <Icon
                color="white"
                fontWeight="medium"
                as={Entypo}
                size="xs"
                name="star"
              />
            </HStack>
            <VStack
              borderBottomWidth={1}
              borderBottomColor="coolGray.600"
              borderBottomStyle="dashed"
            >
              <Text color="coolGray.800" fontWeight="medium" fontSize="lg">
                335
              </Text>
              <Text color="coolGray.800" fontWeight="medium" fontSize="xs">
                Dining Reviews
              </Text>
            </VStack>
          </HStack>
          <HStack space="2" alignItems="center">
            <HStack
              mt={2}
              px={1}
              alignItems="center"
              borderRadius="lg"
              bg="success.700"
            >
              <Text color="white" fontWeight="medium" fontSize="xl">
                4.8
              </Text>
              <Icon
                color="white"
                fontWeight="medium"
                as={Entypo}
                size="xs"
                name="star"
              />
            </HStack>
            <VStack
              borderBottomWidth={1}
              borderBottomColor="coolGray.600"
              borderBottomStyle="dashed"
            >
              <Text color="coolGray.800" fontWeight="medium" fontSize="lg">
                423
              </Text>
              <Text color="coolGray.800" fontWeight="medium" fontSize="xs">
                Delivery Reviews
              </Text>
            </VStack>
          </HStack>
        </HStack>
      </HStack>
      <Text color="coolGray.700" fontWeight="normal" fontSize="lg">
        Continental, Asian, Beverages
      </Text>
      <Text color="coolGray.400" fontWeight="normal" fontSize="lg">
        M Block Market, Greater Kailash 2 (GK2), New Delhi
      </Text>
      <HStack space="3" alignItems="center">
        <Text color="orange.400" fontWeight="normal" fontSize="md">
          Closed
        </Text>
        <Text color="coolGray.400" fontWeight="normal" fontSize="md">
          - Opens at 1pm
        </Text>
      </HStack>
      <HStack mt={4} space="3" alignItems="center">
        <Pressable>
          <HStack
            borderRadius="lg"
            space="3"
            px={4}
            py={2}
            bg="red.500"
            alignItems="center"
          >
            <Icon color="white" as={Entypo} size="xs" name="star-outlined" />
            <Text color="coolGray.50" fontWeight="normal" fontSize="md">
              Add Review
            </Text>
          </HStack>
        </Pressable>

        <Pressable>
          <HStack
            borderRadius="lg"
            space="3"
            px={4}
            py={2}
            borderWidth={1}
            borderColor="coolGray.400"
            alignItems="center"
          >
            <Icon
              color="red.500"
              as={MaterialCommunityIcons}
              size="sm"
              name="directions"
            />
            <Text color="coolGray.600" fontWeight="normal" fontSize="md">
              Direction
            </Text>
          </HStack>
        </Pressable>

        <Pressable>
          <HStack
            borderRadius="lg"
            space="3"
            px={4}
            py={2}
            borderWidth={1}
            borderColor="coolGray.400"
            alignItems="center"
          >
            <Icon
              color="red.500"
              as={MaterialCommunityIcons}
              size="sm"
              name="bookmark-plus-outline"
            />
            <Text color="coolGray.600" fontWeight="normal" fontSize="md">
              Bookmark
            </Text>
          </HStack>
        </Pressable>

        <Pressable>
          <HStack
            borderRadius="lg"
            space="3"
            px={4}
            py={2}
            borderWidth={1}
            borderColor="coolGray.400"
            alignItems="center"
          >
            <Icon
              color="red.500"
              as={MaterialCommunityIcons}
              size="sm"
              name="share-outline"
            />
            <Text color="coolGray.600" fontWeight="normal" fontSize="md">
              Share
            </Text>
          </HStack>
        </Pressable>
      </HStack>
    </VStack>
  );
}

export default Details;
