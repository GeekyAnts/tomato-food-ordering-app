import React from "react";
import {
  Center,
  VStack,
  Image,
  HStack,
  Icon,
  Text,
  Box,
  Divider,
  Link,
  Pressable,
  ScrollView,
  Radio,
  Hidden,
} from "native-base";
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navigator from "./Navigator";
import InfoBanner from "./InfoBanner";
import Details from "./Details";
import InfoWithTabs from "./InfoWithTabs";

export default function RestaurantInfo() {
  return (
    <VStack alignItems="center" bg="coolGray.50">
      <Header />

      <VStack
        alignItems="center"
        px={{ base: 4 }}
        w={{ base: "95%", md: "90%", lg: "80%" }}
      >
        <Navigator />
        <InfoBanner />
        <Details />
        <InfoWithTabs />
      </VStack>
      <Footer />
    </VStack>
  );
}
