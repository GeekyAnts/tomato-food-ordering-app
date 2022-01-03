import React from "react";
import { HStack, Text, Link } from "native-base";
import { useRouter } from "next/router";

export default function Navigator() {
  const router = useRouter();
  return (
    <HStack w="100%" py="2">
      <Link
        href="#"
        isUnderlined={false}
        _text={{
          color: "coolGray.500",
          fontSize: "xs",
          fontWeight: "light",
        }}
        _hover={{
          _text: {
            color: "red.400",
          },
        }}
        onPress={() => {
          router.push("/");
        }}
      >
        Home
      </Link>
      <Text color="coolGray.400" fontSize={"xs"}>
        {"  "}/{"  "}
      </Text>
      <Link
        href="#"
        isUnderlined={false}
        _text={{
          color: "coolGray.400",
          fontSize: "xs",
          fontWeight: "light",
        }}
        _hover={{
          _text: {
            color: "red.400",
          },
        }}
        onPress={() => {
          router.push("/goformeal");
        }}
      >
        Collections
      </Link>
      <Text color="coolGray.400" fontSize={"xs"}>
        {"  "}/{"  "}
      </Text>
      <Link
        href="#"
        isUnderlined={false}
        _text={{
          color: "coolGray.400",
          fontSize: "xs",
          fontWeight: "light",
        }}
        _hover={{
          _text: {
            color: "red.400",
          },
        }}
      >
        Bengaluru Restaurants
      </Link>
      <Text color="coolGray.400" fontSize={"xs"}>
        {"  "}/{"  "}
      </Text>
      <Text color="coolGray.300" fontWeight={"normal"} fontSize={"xs"}>
        Trending this week
      </Text>
    </HStack>
  );
}
