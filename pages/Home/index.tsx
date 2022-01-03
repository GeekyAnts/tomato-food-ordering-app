import React from "react";
import { VStack } from "native-base";
import Banner from "./Banner";
import ZomatoCategories from "./ZomatoCategories";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <VStack alignItems="center" w="100%" bg="coolGray.50">
      <Banner />
      <ZomatoCategories />
      <Footer />
    </VStack>
  );
}
