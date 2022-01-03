import React from "react";
import { list } from "./data";
import { useRouter } from "next/router";
import { Center, HStack, Image, Pressable, VStack } from "native-base";

function ZomatoCategories() {
  const router = useRouter();
  return (
    <HStack
      justifyContent="space-around"
      mt={8}
      w={{ base: "95%", md: "80%", lg: "80%", xl: "80%" }}
      mx={{ base: 4 }}
    >
      {list.map((item, index) => {
        return (
          <Pressable
            w="24%"
            key={index}
            onPress={() => {
              router.push("/goformeal");
            }}
          >
            <Card item={item} />
          </Pressable>
        );
      })}
    </HStack>
  );
}

function Card(props: any) {
  return (
    <VStack
      w="100%"
      alignItems="center"
      borderWidth={1}
      borderColor="coolGray.200"
      borderRadius="lg"
    >
      <Image
        borderTopLeftRadius="lg"
        borderTopRightRadius="lg"
        w="100%"
        h={220}
        source={{
          uri: props.item.imageUri,
        }}
        alt="Alternate Text"
      />
      <Center
        h={20}
        py={2}
        _text={{ fontSize: "lg", textAlign: "center" }}
        color="coolGray.800"
        fontWeight="extrabold"
      >
        {props.item.text}
      </Center>
    </VStack>
  );
}

export default ZomatoCategories;
