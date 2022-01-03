import React from "react";
import {
  VStack,
  Image,
  HStack,
  Icon,
  Text,
  Divider,
  Pressable,
  ScrollView,
  Hidden,
} from "native-base";
import { Octicons } from "@expo/vector-icons";
import LocationCard from "./LocationCard";
import RestaurantCard from "./RestaurantCard";
import RateYourExperience from "./RateYourExperience";
import ReviewHighlights from "./ReviewHighlights";
import ReviewCard from "./ReviewCard";
import MoreInfoItem from "./MoreInfoItem";
import FoodBloggerCard from "./FoodBloggerCard";
import CuisineItem from "./CuisineItem";
import { listType, tabListType } from "../../types/restaurants";

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
] as listType[];

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
] as tabListType[];
const cuisineItemList = ["Continental", "Asian", "Beverages"];

function InfoWithTabs() {
  const [tabName, setTabName] = React.useState("Overview");
  return (
    <>
      <HStack mt={3} w="100%">
        {TabList.map((item: tabListType, index: any) => {
          return (
            <Pressable
              key={index}
              p="2"
              px={{ base: 2, md: 2, lg: 6 }}
              pb="4"
              onPress={() => {
                setTabName(item.name);
              }}
              borderBottomWidth="2"
              borderBottomColor={
                tabName == item.name ? "red.400" : "coolGray.300"
              }
            >
              <Text
                fontWeight="medium"
                fontSize={"xl"}
                color={tabName == item.name ? "red.500" : "coolGray.600"}
              >
                {item.name}
              </Text>
            </Pressable>
          );
        })}
      </HStack>

      {tabName == "Overview" ? <OverviewTab /> : null}
      {tabName == "Book a Table" ? <BookTableTab /> : null}
      {/* {tabName == "Dining Out" ? <DiningOut /> : null}
            {tabName == "Nightlife" ? <Nightlife /> : null} */}
    </>
  );
}

function OverviewTab(props: any) {
  const moreInfoList = [
    "Home Delivery",
    "Takeaway Available",
    "Full Bar Available",
    "Table booking recommended",
    "Indoor Seating",
    "Happy Hours",
  ];
  return (
    <HStack
      w="100%"
      space={4}
      flexDirection={{
        base: "column-reverse",
        md: "column-reverse",
        lg: "column-reverse",
        xl: "row",
      }}
      mt="4"
    >
      <VStack w={{ base: "100%", md: "100%", lg: "70%" }}>
        <ScrollView>
          <Text color="coolGray.800" fontWeight="medium" fontSize="2xl">
            About this place
          </Text>
          <HStack mt={2} justifyContent="space-between" alignItems="center">
            <Text color="coolGray.800" fontWeight="medium" fontSize="xl">
              Menu
            </Text>
            <Pressable>
              <HStack alignItems="center" space={2}>
                <Text color="red.400" fontWeight="medium" fontSize="sm">
                  See all menus
                </Text>
                <Icon
                  mt={1}
                  as={<Octicons name="triangle-right" />}
                  size="4"
                  color="red.400"
                />
              </HStack>
            </Pressable>
          </HStack>
          <HStack space="6" alignItems="center" w="100%" mt={3}>
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
              <Text
                color="coolGray.800"
                fontWeight="medium"
                fontSize="lg"
                mt="3"
              >
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
              <Text
                color="coolGray.800"
                fontWeight="medium"
                fontSize="lg"
                mt="3"
              >
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
              {list.splice(0, 2).map((item: listType, index: any) => {
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
      <VStack w={{ base: "100%", md: "100%", lg: "30%" }}>
        <Hidden from="xl">
          <Text mt={2} color="coolGray.800" fontWeight="medium" fontSize="xl">
            Address
          </Text>
        </Hidden>

        <LocationCard />
      </VStack>
    </HStack>
  );
}
function BookTableTab(props: any) {
  return (
    <VStack w={{ base: "100%", md: "100%", lg: "100%" }}>
      <VStack
        my={{ base: 4, md: 4 }}
        w="80%"
        shadow={4}
        mx="4"
        borderRadius={"xl"}
        py={{ base: 4, md: 4, lg: 6, xl: 8 }}
        px="4"
      >
        <Text color="coolGray.800" textAlign="center" fontSize="md">
          Oops, no availability found for Side Bar.
        </Text>
        <Text color="coolGray.800" textAlign="center" fontSize="md">
          Please contact the restaurant directly at +91 8032974626 or try again
          later.
        </Text>
      </VStack>
    </VStack>
  );
}

export default InfoWithTabs;
