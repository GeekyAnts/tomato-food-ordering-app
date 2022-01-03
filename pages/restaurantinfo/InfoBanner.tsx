import React from "react";
import { Center, VStack, Image, HStack, Icon, Text } from "native-base";
import { Feather } from "@expo/vector-icons";

function InfoBanner(props: any) {
  return (
    <HStack alignItems="center" w="100%" space={2}>
      <Image
        w="60%"
        h={368}
        source={{
          uri: "https://b.zmtcdn.com/data/pictures/8/18765048/5759546a49208e6ae708f6860ef14e94.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        }}
        alt="Alternate Text"
      />
      <VStack w="40%" space={2}>
        <HStack alignItems="center" w="100%" space={2}>
          <Image
            w="50%"
            h={180}
            source={{
              uri: "https://b.zmtcdn.com/data/pictures/8/18765048/518439ba103538d3e7791eb97efca109.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
            }}
            alt="Alternate Text"
          />
          <VStack w="50%" h={180} alignItems="center">
            <Image
              position="absolute"
              zIndex={-1}
              w="100%"
              h={180}
              source={{
                uri: "https://b.zmtcdn.com/data/pictures/8/18765048/1de82baa37a2f4a577a79eec9e427972.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
              }}
              alt="Alternate Text"
            />
            <Center
              flex={1}
              w="100%"
              position="absolute"
              bottom="0"
              top="0"
              bg="grayTransparentZomato.600"
            >
              <Text p={2} color="white" fontWeight="medium" fontSize="md">
                View Gallery
              </Text>
            </Center>
          </VStack>
        </HStack>
        <HStack alignItems="center" space={2}>
          <Image
            w="50%"
            h={180}
            source={{
              uri: "https://b.zmtcdn.com/data/pictures/chains/8/18765048/46d55ef6853ae47a7f238dd99183b6fc.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*",
            }}
            alt="Alternate Text"
          />
          <VStack w="50%" h={180} alignItems="center">
            <Image
              position="absolute"
              zIndex={-1}
              w="100%"
              h={180}
              source={{
                uri: "https://b.zmtcdn.com/data/zomaland/a6750d1975cd3139cb91535088efb0c71578913426.jpeg?fit=around|69.75:68.25&crop=69.75:68.25;*,*",
              }}
              alt="Alternate Text"
            />
            <Center flex={1} w="100%">
              <Center w={9} h={9} bg="black" opacity={0.7} borderRadius="full">
                <Icon
                  color="white"
                  fontWeight="medium"
                  as={Feather}
                  size="xs"
                  name="camera"
                />
              </Center>
              <Text color="white" fontWeight="medium" fontSize="md">
                Add Photos
              </Text>
            </Center>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
}

export default InfoBanner;
