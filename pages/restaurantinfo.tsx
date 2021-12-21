import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import {
  Center,
  VStack,
  Image,
  HStack,
  Icon,
  Heading,
  Text,
  Box,
  FlatList,
  useBreakpointValue,
  Divider,
  Input,
  Link,
  Pressable,
  ScrollView,
  Avatar,
  Radio,
} from "native-base";
import React from "react";
const list = [
  {
    id: 5,
    featured: true,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/chains/5/18367195/3776dceebc30566d77281fc61079db82.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "The Calorie Kitchen",
    dininingReviw: 4.6,
    deliverhyReview: 4.7,
    address: "Healthy Food, Continental Good Earth City ",
  },
  {
    id: 6,
    featured: false,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/9/307309/347b2c6d727df7a8a8a95c96208c80a3.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Raasta",
    dininingReviw: 3.9,
    deliverhyReview: 3.6,
    address: "Continental, Italian, Salad, Beverages Cyber Hub",
  },
  {
    id: 7,
    featured: true,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/6/307036/bc49fda959596e327ae2b35fccc51675.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Excuse Me Boss",
    dininingReviw: 4.3,
    deliverhyReview: 4.5,
    address: "North Indian, Chinese, European, Fast Food, Continental",
  },
  {
    id: 8,
    featured: false,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/7/18925817/3ae4a29143a3b7505069f0a066d49384.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Key - Hotel Samrat",
    dininingReviw: 3.6,
    deliverhyReview: 4.5,
    address: "Continental, North Indian, Bar Food Chanakyapuri, New Delhi",
  },
  {
    id: 1,
    featured: true,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/7/18204627/44ca13546b00709b72493c609ef2de17_featured_v2.png?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Warehouse Cafe",
    dininingReviw: 4.3,
    deliverhyReview: 4.5,
    address: "Bar Food, North Indian, Continental Sector 29, Gurgaon",
  },
  {
    id: 2,
    featured: true,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/1/18565991/e64084200ffd3b666cc78744f3adc938.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "Dasaprakash",
    dininingReviw: 4.5,
    deliverhyReview: 4.6,
    address: "South Indian, North Indian, Chinese, Beverages",
  },
  {
    id: 3,
    featured: false,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/7/310737/985d2b54cfadd22b306bf9c2cf7fa992.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "7 Barrel Brew Pub",
    dininingReviw: 4.0,
    deliverhyReview: 4.5,
    address: "North Indian, Continental, Chinese, Kebab, ,",
  },
  {
    id: 4,
    featured: false,
    imageUri:
      "https://b.zmtcdn.com/data/pictures/chains/2/19548852/b9ec22f8d244dce3d3d8394270e497d3_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    name: "My Tea Chapel- Pinsa",
    dininingReviw: 3.6,
    deliverhyReview: 4.5,
    address: "Bubble Tea, Healthy Food, Italian, Salad, Fast Food,",
  },
];
const TabList = [
  {
    name: "Overview",
  },
  {
    name: "Order Online",
  },
  {
    name: "Reviews",
  },
  {
    name: "Photos",
  },
  {
    name: "Menu",
  },
  {
    name: "Book a Table",
  },
];

export default function RestaurantInfo() {
  const noColumn = useBreakpointValue({
    base: 4,
    lg: 4,
    md: 4,
    xl: 4,
  });
  return (
    <VStack alignItems="center" bg="coolGray.50" py={2}>
      <Header />
      <Divider mt={2} mb={2} />

      <VStack alignItems="center" w="80%">
        <Navigator />
        <InfoBanner />
        <Details />
        <InfoWithTabs />
      </VStack>
    </VStack>
  );
}
function InfoWithTabs(props: any) {
  const [tabName, setTabName] = React.useState("Overview");
  return (
    <>
      <HStack mt={2} w="100%">
        {TabList.map((item, index) => {
          return (
            <Pressable
              key={index}
              p="2"
              px="4"
              pb="4"
              // @ts-ignore
              onPress={() => {
                setTabName(item.name);
              }}
              borderBottomWidth="2px"
              _light={{
                borderBottomColor:
                  tabName == item.name ? "#FF7E8B" : "coolGray.300",
              }}
              _dark={{
                borderBottomColor:
                  tabName == item.name ? "primary.700" : "customGray",
              }}
            >
              <Text
                fontWeight="medium"
                fontSize={"xl"}
                _light={{
                  color: tabName == item.name ? "#EF4F5F" : "#696969",
                }}
                _dark={{
                  color: tabName == item.name ? "coolGray.50" : "coolGray.400",
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        })}
      </HStack>

      {tabName == "Overview" ? <OverviewTab /> : null}
      {/* {tabName == "Dining Out" ? <DiningOut /> : null}
        {tabName == "Nightlife" ? <Nightlife /> : null} */}
    </>
  );
}
function RestaurantCard(props: any) {
  return (
    <VStack w={268} space={1}>
      <VStack w={268} h={185}>
        <Image
          borderRadius="lg"
          position="absolute"
          zIndex="-2"
          w={268}
          h={185}
          source={{
            uri: props.item.imageUri,
          }}
          alt="Alternate Text"
        />
        {props.item.featured ? (
          <HStack pl={2} pt={2} space="1" alignItems="center">
            <Center w={6} h={6} bg="#ef4f5f" borderRadius="full">
              <Icon
                color="white"
                fontWeight="medium"
                as={MaterialCommunityIcons}
                size="xs"
                name="crown-outline"
              />
            </Center>
            <Text color="white" fontWeight="medium" fontSize="xs">
              Featured
            </Text>
          </HStack>
        ) : null}

        <VStack flex={1} pl={2} pb={2} justifyContent="flex-end">
          <Center
            w={150}
            bg="#d92662"
            _text={{
              color: "white",
              fontWeight: "medium",
              fontSize: "sm",
            }}
          >
            Pro - Get 20% off
          </Center>
        </VStack>
      </VStack>
      <Text color="coolGray.800" fontWeight="medium" fontSize="md">
        {props.item.name}
      </Text>
      <HStack space={3} alignItems="center">
        <HStack
          space={1}
          px={1}
          alignItems="center"
          borderRadius="lg"
          bg="#24963f"
        >
          <Text color="white" fontWeight="medium" fontSize="sm">
            {props.item.dininingReviw}
          </Text>
          <Icon
            color="white"
            fontWeight="medium"
            as={Entypo}
            size="xxs"
            name="star"
          />
        </HStack>
        <Text color="coolGray.700" fontWeight="normal" fontSize="xs">
          DINING |
        </Text>
        <HStack
          space={1}
          px={1}
          alignItems="center"
          borderRadius="lg"
          bg="#24963f"
        >
          <Text color="white" fontWeight="medium" fontSize="sm">
            {props.item.deliverhyReview}
          </Text>
          <Icon
            color="white"
            fontWeight="medium"
            as={Entypo}
            size="xxs"
            name="star"
          />
        </HStack>
        <Text color="coolGray.800" fontWeight="normal" fontSize="xs">
          DELIVERY
        </Text>
      </HStack>
      <Text color="coolGray.800" fontWeight="normal" fontSize="md">
        {props.item.address}
      </Text>
    </VStack>
  );
}
function OverviewTab(props: any) {
  const noColumn = useBreakpointValue({
    base: 2,
    lg: 2,
    md: 2,
    xl: 2,
  });
  const moreInfoList = [
    "Home Delivery",
    "Takeaway Available",
    "Full Bar Available",
    "Table booking recommended",
    "Indoor Seating",
    "Happy Hours",
  ];
  return (
    <HStack w="100%">
      <VStack w="70%">
        <ScrollView>
          <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
            About this place
          </Text>
          <HStack justifyContent="space-between" alignItems="center">
            <Text color="coolGray.800" fontWeight="medium" fontSize="md">
              Menu
            </Text>
            <Text color="#FF7E8B" fontWeight="medium" fontSize="sm">
              See all menus
            </Text>
          </HStack>
          <HStack space="3" alignItems="center" w="100%" mt={3}>
            <VStack>
              <Image
                borderRadius="lg"
                source={{
                  uri: "https://b.zmtcdn.com/data/menus/048/18765048/3d7f5730c6035ff135714771e06bc33c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                }}
                alt="Alternate Text"
                w={200}
                h={218}
              />
              <Text color="coolGray.800" fontWeight="medium" fontSize="lg">
                Food Menu
              </Text>
              <Text color="coolGray.500" fontWeight="medium" fontSize="sm">
                5 pages
              </Text>
            </VStack>
            <VStack>
              <Image
                borderRadius="lg"
                source={{
                  uri: "https://b.zmtcdn.com/data/menus/048/18765048/ed952f0e5d64d8e34bbdd20e9c75dfb4.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                }}
                alt="Alternate Text"
                w={200}
                h={218}
              />
              <Text color="coolGray.800" fontWeight="medium" fontSize="lg">
                Bar Menu
              </Text>
              <Text color="coolGray.500" fontWeight="medium" fontSize="sm">
                12 pages
              </Text>
            </VStack>
          </HStack>
          <VStack mt={4}>
            <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
              Cuisines
            </Text>
            <HStack alignItems="center" space={2}>
              {cuisineItemList.map((item, index) => {
                return <CuisineItem item={item} key={index} />;
              })}
            </HStack>
            <Text mt={4} color="coolGray.800" fontWeight="medium" fontSize="xl">
              Popular Dishes
            </Text>
            <Text mt={2} color="coolGray.600" fontWeight="light" fontSize="md">
              Corn Curd, Avocado Toast, Lamb Curry, Cocktail, Drink, Dessert
            </Text>
            <Text mt={4} color="coolGray.800" fontWeight="medium" fontSize="xl">
              People Say This Place Is Known For
            </Text>
            <Text mt={2} color="coolGray.600" fontWeight="light" fontSize="md">
              Bartending Awesome, Cozy, Relaxed Atmosphere, Live Music, Packed
              on Weekends, Comfortable Seating
            </Text>
            <Text mt={4} color="coolGray.800" fontWeight="medium" fontSize="xl">
              Average Cost
            </Text>
            <Text mt={2} color="coolGray.600" fontWeight="light" fontSize="md">
              ₹1,600 for two people (approx.) Without alcohol
            </Text>
            <Text color="coolGray.400" fontWeight="light" fontSize="sm">
              Exclusive of applicable taxes and charges, if any
            </Text>
            <Text mt={2} color="coolGray.600" fontWeight="light" fontSize="md">
              ₹225 for a pint of beer (approx.)
            </Text>
            <Text color="coolGray.400" fontWeight="light" fontSize="sm">
              How do we calculate cost for two?
            </Text>
            <Text mt={2} color="coolGray.600" fontWeight="light" fontSize="md">
              Cash and Cards accepted
            </Text>
            <Text mt={4} color="coolGray.800" fontWeight="medium" fontSize="xl">
              More Info
            </Text>
            <HStack mt={2} alignItems="center" space={40}>
              <VStack space={2}>
                {moreInfoList.slice(0, 3).map((item, index) => {
                  return <MoreInfoItem item={item} key={index} />;
                })}
              </VStack>
              <VStack space={2}>
                {moreInfoList.slice(3, 6).map((item, index) => {
                  return <MoreInfoItem item={item} key={index} />;
                })}
              </VStack>
            </HStack>
            <Text mt={4} color="coolGray.600" fontWeight="medium" fontSize="xl">
              OUR SPONSORS
            </Text>

            <HStack alignItems="center" w="100%" space={4} pt={2}>
              {list.splice(0, 2).map((item, index) => {
                return <RestaurantCard item={item} key={index} />;
              })}
            </HStack>
            <FoodBloggerCard />
            <Divider mt={4} />
            <RateYourExperience />
            <ReviewHighlights />
            <Divider mt={4} />
            <ReviewCard />
          </VStack>
        </ScrollView>
      </VStack>
      <VStack w="30%">
        <LocaitonCard />
      </VStack>
    </HStack>
  );
}
function ReviewHighlights(props: any) {
  const reviewItemList = [
    "Corn Curd",
    "Avocado Toast",
    "Lamb Curry",
    "Cocktail",
    "Packed on Weekends",
    "Comfortable Seating",
    "Drink",
    "Dessert",
    "Bartending Awesome",
    "Cozy",
    "Relaxed Atmosphere",
    "Live Music",
    "Packed on Weekends",
    "Comfortable Seating",
  ];
  return (
    <>
      <Text mt={4} color="coolGray.800" fontWeight="medium" fontSize="xl">
        Review Highlights
      </Text>
      <HStack alignItems="center" space={2} w="100%" flexWrap="wrap">
        {reviewItemList.map((item, index) => {
          return <ReviewHighlightItem item={item} key={index} />;
        })}
      </HStack>
    </>
  );
}
function ReviewHighlightItem(props: any) {
  return (
    <Link
      _hover={{ bg: "#F8F8F8" }}
      alignItems={"center"}
      borderWidth={"1"}
      borderRadius={"full"}
      borderColor={"coolGray.200"}
      py={"1"}
      px={"4"}
      my="2"
    >
      <Text
        color="coolGray.600"
        fontSize="md"
        fontWeight={"light"}
        fontFamily={"Okra,Helvetica,sans-serif"}
      >
        {props.item}
      </Text>
    </Link>
  );
}
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
          _light={{
            //@ts-ignore
            _checked: {
              _icon: { color: "rgb(239, 79, 95)" },
              borderColor: "rgb(239, 79, 95)",
            },
          }}
          _dark={{
            //@ts-ignore
            _checked: {
              _icon: { color: "primary.700" },
              borderColor: "primary.700",
            },
          }}
          value="one"
        >
          Dining
        </Radio>

        <Radio
          ml={40}
          _light={{
            //@ts-ignore
            _checked: {
              _icon: { color: "rgb(239, 79, 95)" },
              borderColor: "rgb(239, 79, 95)",
            },
          }}
          _dark={{
            //@ts-ignore
            _checked: {
              _icon: { color: "primary.700" },
              borderColor: "primary.700",
            },
          }}
          value="two"
        >
          Delivery
        </Radio>
      </Radio.Group>
    </>
  );
}
function FoodBloggerCard(props: any) {
  return (
    <HStack
      mt={4}
      borderRadius="lg"
      alignItems="center"
      w="100%"
      bg="coolGray.100"
      px={3}
      py={2}
      justifyContent="space-between"
    >
      <VStack>
        <Text mt={4} color="coolGray.800" fontWeight="medium" fontSize="xl">
          Are you a food blogger?
        </Text>
        <HStack alignItems={"center"} space="2" mt="1">
          <Link
            href="#"
            isUnderlined={false}
            _text={{
              color: "rgb(239, 79, 95)",
              fontSize: "13px",
              fontWeight: "medium",
              fontFamily: "Okra,Helvetica,sans-serif",
            }}
            _hover={{
              _text: {
                color: "rgb(191, 40, 56)",
              },
            }}
          >
            Add a Zomato spoonback to your blog.
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
      <Link
        //_hover={{ bg: "#F8F8F8" }}
        _light={{ bg: "rgb(239, 79, 95)" }}
        alignItems={"center"}
        py={"2"}
        px={"2"}
        borderRadius="md"
      >
        <Text
          color="white"
          fontSize="sm"
          fontWeight={"light"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          Get Restaurant Widget
        </Text>
        <Icon
          ml="2"
          as={<Octicons name="triangle-right" />}
          size="4"
          _light={{ color: "white" }}
          _dark={{ color: "coolGray.500" }}
        />
      </Link>
    </HStack>
  );
}
const cuisineItemList = ["Continental", "Asian", "Beverages"];
function MoreInfoItem(props: any) {
  return (
    <HStack alignItems="center" space={1}>
      <Icon
        as={<AntDesign name="checkcircleo" />}
        size="5"
        _light={{ color: "rgb(17, 145, 153)" }}
        _dark={{ color: "coolGray.500" }}
      />
      <Text color="coolGray.600" fontWeight="light" fontSize="md">
        {props.item}
      </Text>
    </HStack>
  );
}
function CuisineItem(props: any) {
  return (
    <Link
      _hover={{ bg: "#F8F8F8" }}
      alignItems={"center"}
      borderWidth={"1"}
      borderRadius={"full"}
      borderColor={"coolGray.300"}
      py={"1"}
      px={"4"}
      my="2"
    >
      <Text
        color="#119199"
        fontSize="md"
        fontWeight={"light"}
        fontFamily={"Okra,Helvetica,sans-serif"}
      >
        {props.item}
      </Text>
    </Link>
  );
}
function LocaitonCard(prps: any) {
  return (
    <VStack
      w="340px"
      shadow={4}
      mx="4"
      borderRadius={"xl"}
      py="4"
      px="4"
      //   borderColor="coolGray.100"
      //   borderWidth={"1"}
    >
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
          //@ts-ignore
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
function Navigator(props: any) {
  return (
    <HStack w="100%" py="2">
      <Link
        href="#"
        isUnderlined={false}
        _text={{
          color: "rgb(130, 130, 130)",
          fontSize: "xs",
          fontWeight: "light",
        }}
        _hover={{
          _text: {
            color: "rgb(239, 79, 95)",
          },
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
          color: "rgb(130, 130, 130)",
          fontSize: "xs",
          fontWeight: "light",
        }}
        _hover={{
          _text: {
            color: "rgb(239, 79, 95)",
          },
        }}
      >
        India
      </Link>
      <Text color="coolGray.400" fontSize={"xs"}>
        {"  "}/{"  "}
      </Text>
      <Text color="coolGray.300" fontWeight={"normal"} fontSize={"xs"}>
        Bengaluru Restaurants
      </Text>
    </HStack>
  );
}
function Details(props: any) {
  return (
    <VStack w="100%">
      <HStack justifyContent="space-between" alignItems="center" w="100%">
        <Text color="coolGray.800" fontWeight="medium" fontSize="3xl">
          Sidecar
        </Text>
        <HStack space="10" alignItems="center">
          <HStack space="2" alignItems="center">
            <HStack
              space={1}
              px={1}
              alignItems="center"
              borderRadius="lg"
              bg="#267e3e"
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
              py={2}
              borderBottomWidth={1}
              borderBottomColor="coolGray.600"
              borderBottomStyle="dashed"
            >
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                335
              </Text>
              <Text color="coolGray.800" fontWeight="medium" fontSize="xs">
                Dining Reviews
              </Text>
            </VStack>
          </HStack>
          <HStack space="2" alignItems="center">
            <HStack
              space={1}
              px={1}
              alignItems="center"
              borderRadius="lg"
              bg="#267e3e"
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
              py={2}
              borderBottomWidth={1}
              borderBottomColor="coolGray.600"
              borderBottomStyle="dashed"
            >
              <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
                335
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
        <Text color="#f4a266" fontWeight="normal" fontSize="md">
          Closed
        </Text>
        <Text color="coolGray.400" fontWeight="normal" fontSize="md">
          - Opens at 1pm
        </Text>
      </HStack>
      <HStack mt={4} space="3" alignItems="center">
        <HStack
          borderRadius="lg"
          space="3"
          px={4}
          py={2}
          bg="#EF4F47"
          alignItems="center"
        >
          <Icon
            color="white"
            fontWeight="medium"
            as={Entypo}
            size="xs"
            name="star-outlined"
          />
          <Text color="coolGray.50" fontWeight="normal" fontSize="md">
            Add Review
          </Text>
        </HStack>
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
            color="#EF4F47"
            fontWeight="medium"
            as={MaterialCommunityIcons}
            size="xs"
            name="directions"
          />
          <Text color="coolGray.600" fontWeight="normal" fontSize="md">
            Direction
          </Text>
        </HStack>
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
            color="#EF4F47"
            fontWeight="medium"
            as={MaterialCommunityIcons}
            size="xs"
            name="bookmark-plus-outline"
          />
          <Text color="coolGray.600" fontWeight="normal" fontSize="md">
            Bookmark
          </Text>
        </HStack>
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
            color="#EF4F47"
            fontWeight="medium"
            as={FontAwesome}
            size="xs"
            name="share"
          />
          <Text color="coolGray.600" fontWeight="normal" fontSize="md">
            Share
          </Text>
        </HStack>
      </HStack>
    </VStack>
  );
}
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
            <Center flex={1} w="100%">
              <Center
                position="absolute"
                w="100%"
                h="100%"
                bg="coolGray.900"
                opacity={0.2}
                zIndex="-1"
              ></Center>
              <Text
                p={2}
                // opacity={0.2}
                // bg="coolGray.900"
                color="white"
                fontWeight="medium"
                fontSize="md"
              >
                Get the App
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
                uri: "https://b.zmtcdn.com/data/pictures/4/18462574/c41e6fa97d1c6253994fa9fd75bd9edc_featured_v2.jpg?output-format=webp",
              }}
              alt="Alternate Text"
            />
            <Center flex={1} w="100%">
              <Center
                position="absolute"
                w="100%"
                h="100%"
                bg="coolGray.500"
                opacity={0.8}
                zIndex="-1"
              ></Center>
              <VStack alignItems="center">
                <Center
                  w={9}
                  h={9}
                  bg="black"
                  opacity={0.7}
                  borderRadius="full"
                >
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
              </VStack>
            </Center>
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
}
function Header(props: any) {
  return (
    <HStack space="3" alignItems="center" w="80%">
      <Image
        mr={6}
        w={184}
        h={36}
        source={{
          uri: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
        }}
        alt="Alternate Text"
      />

      <HStack
        mr={4}
        bg="white"
        space="3"
        alignItems="center"
        borderRadius="lg"
        w="65%"
        py={2}
      >
        <HStack space="1" alignItems="center">
          <Icon
            ml="2"
            as={Entypo}
            name="location-pin"
            size="6"
            _light={{ color: "rgb(255, 126, 139)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text color="coolGray.500" fontSize="md">
            Bangla Sahib Gurdwara |
          </Text>
          <Icon
            as={AntDesign}
            name="caretdown"
            size="3"
            _light={{ color: "coolGray.600" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Divider h={5} w={0.5} ml={2} orientation="vertical" />
        </HStack>
        <HStack space="3" alignItems="center" flex={1}>
          <Icon
            ml={3}
            as={AntDesign}
            name="search1"
            size="5"
            _light={{ color: "coolGray.500" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Input
            _hover={{ bg: "white" }}
            _focus={{ bg: "white" }}
            color="coolGray.500"
            fontSize="md"
            flex={1}
            borderWidth={0}
            outline="none"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </HStack>
      </HStack>
      <Text mr={4} color="coolGray.600" fontWeight="medium" fontSize="lg">
        Log in
      </Text>
      <Text color="coolGray.600" fontWeight="medium" fontSize="lg">
        Sign up
      </Text>
    </HStack>
  );
}
function ReviewCard(props: any) {
  return (
    <VStack w="100%" px="4" mt={2}>
      <HStack justifyContent={"space-between"} w="100%">
        <HStack my="2">
          <Image
            height="44px"
            width="44px"
            borderRadius={"full"}
            source="https://b.zmtcdn.com/data/user_profile_pictures/70f/fa9eca8e5c5aba0e9648be31e4f5770f.jpg?fit=around%7C400%3A400&crop=400%3A400%3B%2A%2C%2A"
            alt="Image"
            mr="3"
          />
          <VStack>
            <Text
              fontSize="md"
              fontWeight={"medium"}
              fontFamily={"Okra,Helvetica,sans-serif"}
              _dark={{ color: "coolGray.50" }}
              _light={{ color: "rgb(54, 54, 54)" }}
            >
              Sunny Chauhan
            </Text>
            <HStack alignItems={"center"}>
              <Text
                fontSize="sm"
                fontWeight={"light"}
                fontFamily={"Okra,Helvetica,sans-serif"}
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "#9C9C9C" }}
              >
                81 reviews
              </Text>
              <Icon
                as={<Entypo name="dot-single" />}
                size="6"
                _light={{ color: "#9C9C9C" }}
                _dark={{ color: "#9C9C9C" }}
              />
              <Text
                fontSize="sm"
                fontWeight={"light"}
                fontFamily={"Okra,Helvetica,sans-serif"}
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "#9C9C9C" }}
              >
                249 Followers
              </Text>
            </HStack>
          </VStack>
        </HStack>
        <Box justifyContent={"center"} my="2">
          <Link
            _hover={{ bg: "#F8F8F8" }}
            alignItems={"center"}
            borderWidth={"1"}
            borderRadius={"md"}
            borderColor={"rgb(255, 126, 139)"}
            py={"1"}
            px={"4"}
            flex="1"
          >
            <Text
              color="rgb(239, 79, 95)"
              fontSize="sm"
              fontWeight={"light"}
              fontFamily={"Okra,Helvetica,sans-serif"}
            >
              Follow
            </Text>
          </Link>
        </Box>
      </HStack>
      <HStack alignItems={"center"} space="2" mb="3">
        <HStack
          alignItems={"center"}
          bg="#0E5020"
          borderRadius={"md"}
          space="1"
          px="1"
        >
          <Text
            color="white"
            fontSize="13px"
            fontWeight={"semibold"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            5
          </Text>
          <Icon
            as={<FontAwesome name="star" />}
            size="2"
            _light={{ color: "white" }}
            _dark={{ color: "#9C9C9C" }}
          />
        </HStack>
        <Text
          color="#363636"
          fontSize="xs"
          fontWeight={"normal"}
          fontFamily={"Okra,Helvetica,sans-serif"}
          mr="1"
        >
          DINING
        </Text>
        <Text
          color="#9C9C9C"
          fontSize="sm"
          fontWeight={"normal"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          2 months ago
        </Text>
      </HStack>
      <HStack alignItems={"center"} space="1" mb="2">
        <Icon
          as={<FontAwesome name="thumbs-up" />}
          size="4"
          _light={{ color: "#3AB757" }}
          _dark={{ color: "coolGray.500" }}
        />
        <Text
          color="#3AB757"
          fontSize="13px"
          fontWeight={"medium"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          POSITIVE
        </Text>
      </HStack>
      <HStack alignItems={"center"} space="2" mb="4">
        <Box bg="#E8E8E8" px="2" py="6px" borderRadius={"2xl"}>
          <Text
            color="#828282"
            fontSize="xs"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            courteous staff
          </Text>
        </Box>
        <Box bg="#E8E8E8" px="2" py="6px" borderRadius={"2xl"}>
          <Text
            color="#828282"
            fontSize="xs"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            great food
          </Text>
        </Box>
        <Box bg="#E8E8E8" px="2" py="6px" borderRadius={"2xl"}>
          <Text
            color="#828282"
            fontSize="xs"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            ambience
          </Text>
        </Box>
        <Box bg="#E8E8E8" px="2" py="6px" borderRadius={"2xl"}>
          <Text
            color="#828282"
            fontSize="xs"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
          >
            amazing drinks
          </Text>
        </Box>
      </HStack>
      <HStack alignItems={"center"} mb="3">
        <Text
          color="#696969"
          fontSize="md"
          fontWeight={"light"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          The best bar in the country for a reason ! WHAT A PLACE !!! Their
          Infusions are out of this world. Highly Recommend the Yang’s Old
          Fashion, The Zing Thing and the Plum highball ! Also the Darjeeling
          Mail. Manish from the bar made sure each drink was exceptional. In
          terms of food the pork sliders were nice and juicy and when it came to
          the fried chicken - super crispy on the outside yet moist and tender
          on the inside. The Ambiance of the place was totally my kind - rustic
          - relaxed yet great energy !! DEFINITELY RECOMMENDED !!
        </Text>
      </HStack>
      <ScrollView
        mb="5"
        //@ts-ignore
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          height="150px"
          width="240px"
          source="https://b.zmtcdn.com/data/reviews_photos/fc3/34c6f4408ce45fba3150dcd1bdd3cfc3_1634536759.jpg?output-format=webp"
          alt="Image"
          mr="2"
          borderRadius={"md"}
        />
        <Image
          height="150px"
          width="240px"
          source="https://b.zmtcdn.com/data/reviews_photos/45d/b3591d3baa2d5e223a4fe142d522a45d_1634536758.jpg?output-format=webp"
          alt="Image"
          mr="2"
          borderRadius={"md"}
        />
        <Image
          height="150px"
          width="240px"
          source="https://b.zmtcdn.com/data/reviews_photos/079/f65fbb66745f40c6a2d2a671c59ea079_1634536751.jpg?output-format=webp"
          alt="Image"
          borderRadius={"md"}
        />
      </ScrollView>
      <HStack alignItems={"center"}>
        <Text
          color="#9C9C9C"
          fontSize="sm"
          fontWeight={"light"}
          fontFamily={"Okra,Helvetica,sans-serif"}
        >
          0 Votes for helpful, 0 Comments
        </Text>
      </HStack>
      <HStack space="6" alignItems={"center"}>
        <Link
          _hover={{ bg: "#F8F8F8" }}
          alignItems={"center"}
          borderRadius={"md"}
          py={"2"}
          px={"1"}
          my="2"
        >
          <Icon
            as={<FontAwesome name="thumbs-o-up" />}
            size="5"
            _light={{ color: "rgb(130, 130, 130)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text
            color="#9C9C9C"
            fontSize="sm"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
            ml="1"
          >
            Helpful
          </Text>
        </Link>
        <Link
          _hover={{ bg: "#F8F8F8" }}
          alignItems={"center"}
          borderRadius={"md"}
          py={"2"}
          px={"1"}
          my="2"
        >
          <Icon
            as={<MaterialCommunityIcons name="comment-text-multiple-outline" />}
            size="5"
            _light={{ color: "rgb(130, 130, 130)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text
            color="#9C9C9C"
            fontSize="sm"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
            ml="1"
          >
            Comment
          </Text>
        </Link>
        <Link
          _hover={{ bg: "#F8F8F8" }}
          alignItems={"center"}
          borderRadius={"md"}
          py={"2"}
          px={"1"}
          my="2"
        >
          <Icon
            as={<Ionicons name="ios-arrow-redo-outline" />}
            size="5"
            _light={{ color: "rgb(130, 130, 130)" }}
            _dark={{ color: "coolGray.500" }}
          />
          <Text
            color="#9C9C9C"
            fontSize="sm"
            fontWeight={"light"}
            fontFamily={"Okra,Helvetica,sans-serif"}
            ml="1"
          >
            Share
          </Text>
        </Link>
      </HStack>
      <Divider mt={2} />
    </VStack>
  );
}
