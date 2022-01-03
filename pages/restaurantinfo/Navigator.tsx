import React from "react";
import { useRouter } from "next/router";
import { HStack, Text, Link } from "native-base";

function Navigator() {
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
        onPress={() => {
          router.push("/restaurants");
        }}
      >
        Bengaluru Restaurants
      </Link>
      <Text color="coolGray.400" fontSize={"xs"}>
        {"  "}/{"  "}
      </Text>
      <Text color="coolGray.300" fontWeight={"normal"} fontSize={"xs"}>
        Sidecar
      </Text>
    </HStack>
  );
}

export default Navigator;
