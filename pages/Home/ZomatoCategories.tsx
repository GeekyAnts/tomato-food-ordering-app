import React from "react";

import { useRouter } from "next/router";
import { Center, HStack, Image, Pressable, VStack } from "native-base";

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
