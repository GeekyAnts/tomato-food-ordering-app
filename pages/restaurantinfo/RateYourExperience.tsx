import React from "react";
import { Radio, Text } from "native-base";

function RateYourExperience(props: any) {
  return (
    <>
      <Text mt={4} color="coolGray.800" fontWeight="medium" fontSize="xl">
        Rate your experience for
      </Text>
      <Radio.Group
        mt={1}
        defaultValue="1"
        name="MyRadioGroup"
        flexDirection="row"
      >
        <Radio
          //@ts-ignore
          _checked={{
            _icon: { color: "red.400" },
            borderColor: "red.400",
          }}
          value="one"
        >
          Dining
        </Radio>

        <Radio
          ml={40}
          //@ts-ignore
          _checked={{
            _icon: { color: "red.400" },
            borderColor: "red.400",
          }}
          value="two"
        >
          Delivery
        </Radio>
      </Radio.Group>
    </>
  );
}

export default RateYourExperience;
