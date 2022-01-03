import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { HStack, Icon, Text } from "native-base";

function MoreInfoItem(props: any) {
  return (
    <HStack alignItems="center" space={1}>
      <Icon
        as={<AntDesign name="checkcircleo" />}
        size="5"
        color="primary.600"
      />
      <Text color="coolGray.600" fontWeight="light" fontSize="md">
        {props.item}
      </Text>
    </HStack>
  );
}

export default MoreInfoItem;
