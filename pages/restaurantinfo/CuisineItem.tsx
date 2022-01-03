import React from "react";
import { Link, Text } from "native-base";

function CuisineItem(props: any) {
  return (
    <Link
      _hover={{ bg: "coolGray.100" }}
      alignItems={"center"}
      borderWidth="1"
      borderRadius="full"
      borderColor="coolGray.300"
      py="1"
      px="4"
      my="2"
    >
      <Text
        color="primary.600"
        fontSize="md"
        fontWeight="light"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        {props.item}
      </Text>
    </Link>
  );
}

export default CuisineItem;
