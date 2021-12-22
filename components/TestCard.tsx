import React from "react";
import {
  Box,
  Button,
  Divider,
  Hidden,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  VStack,
  Image,
  Pressable,
  ScrollView,
} from "native-base";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";

export default function TestCard(props: any) {
  return (
    <VStack w="340px" shadow={4} m="4" borderRadius={"xl"} py="4" px="4">
      <Text
        fontWeight={"normal"}
        fontSize={"xl"}
        color="rgb(28, 28, 28)"
        mb="1"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        Call
      </Text>
      <Text
        fontWeight={"light"}
        fontSize={"md"}
        color="rgb(255, 126, 139)"
        mb="1"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        +919718600666
      </Text>
      <Text
        fontWeight={"light"}
        fontSize={"md"}
        color="rgb(255, 126, 139)"
        mb="4"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        +919718700666
      </Text>
      <Text
        fontWeight={"normal"}
        fontSize={"xl"}
        color="rgb(28, 28, 28)"
        mb="2"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        Direction
      </Text>

      <HStack alignItems="center" mr="4">
        <Pressable
          onPress={() => {
            console.log("pressed");
          }}
        >
          <Box _light={{ bg: "primary.50" }} _dark={{ bg: "customGray" }}>
            <Image
              height="150px"
              width="308px"
              source="https://maps.zomato.com/php/staticmap?center=28.4694101506,77.0631429926&maptype=zomato&markers=28.4694101506,77.0631429926,pin_res32&sensor=false&scale=2&zoom=16&language=en&size=240x150&size=400x240&size=650x250"
              alt="Image"
            />

            <HStack
              position={"absolute"}
              bottom={"0"}
              flex="1"
              borderTopRightRadius={"sm"}
              alignItems="center"
              justifyContent="flex-start"
              bg="rgba(0, 0, 0, 0.3)"
              px="1"
              py="1px"
              space="1"
            >
              <Text
                fontSize="xs"
                fontWeight={"light"}
                fontFamily={"Okra,Helvetica,sans-serif"}
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "white" }}
              >
                Ⓒ
              </Text>
              <Link
                _text={{
                  color: "#0000EE",
                  fontSize: "xs",
                  fontWeight: "light",
                  fontFamily: "Okra,Helvetica,sans-serif",
                }}
                isUnderlined
              >
                OpenStreetMap
              </Link>
              <Text
                fontSize="xs"
                fontWeight={"light"}
                fontFamily={"Okra,Helvetica,sans-serif"}
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "rgb(255, 255, 255)" }}
              >
                contributors
              </Text>
            </HStack>
          </Box>
        </Pressable>
      </HStack>
      <Text
        fontWeight={"light"}
        fontSize={"md"}
        color="rgb(28, 28, 28)"
        mb="1"
        mt="1"
        fontFamily="Okra,Helvetica,sans-serif"
      >
        SCO 11-12, Ground Floor, Main Market, Sector 29, Gurgaon
      </Text>
      <HStack space="3">
        <Link
          _hover={{ bg: "#F8F8F8" }}
          alignItems={"center"}
          borderWidth={"1"}
          borderRadius={"md"}
          borderColor={"#9C9C9C"}
          py={"1"}
          px={"2"}
          my="2"
        >
          <Icon
            as={<Fontisto name="copy" />}
            size="5"
            _light={{ color: "#9C9C9C" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text
            color="#1C1C1C"
            fontSize="sm"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
            ml="2"
          >
            Copy
          </Text>
        </Link>
        <Link
          _hover={{ bg: "#F8F8F8" }}
          alignItems={"center"}
          borderWidth={"1"}
          borderRadius={"md"}
          borderColor={"#9C9C9C"}
          py={"1"}
          px={"2"}
          my="2"
        >
          <Icon
            as={<MaterialCommunityIcons name="directions" />}
            size="6"
            _light={{ color: "rgb(239, 79, 95)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text
            color="#1C1C1C"
            fontSize="sm"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
            ml="2"
          >
            Direction
          </Text>
        </Link>
      </HStack>
      <HStack alignItems={"center"} space="2" mt="1">
        <Link
          href="#"
          isUnderlined={false}
          _text={{
            color: "rgb(239, 79, 95)",
            fontSize: "13px",
            fontWeight: "light",
            fontFamily: "Okra,Helvetica,sans-serif",
          }}
          _hover={{
            _text: {
              color: "rgb(191, 40, 56)",
            },
          }}
        >
          See all 2 Warehouse Cafe outlets in Delhi NCR
        </Link>
        <Link href="#" isUnderlined={false}>
          <Icon
            as={<Octicons name="triangle-right" />}
            size="4"
            _light={{ color: "rgb(239, 79, 95)" }}
            _dark={{ color: "coolGray.500" }}
          />
        </Link>
      </HStack>
    </VStack>
  );
}
