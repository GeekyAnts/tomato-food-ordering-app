import React from "react";
import { VStack, FlatList, useBreakpointValue } from "native-base";
import Header from "../../components/Header";
import Navigator from "./Navigator";
import Banner from "./Banner";
import RestaurantCard from "./RestaurantCard";
import Footer from "../../components/Footer";
import { list } from "./data";

export default function Restaurants() {
  const noColumn = useBreakpointValue({
    base: 1,
    sm: 2,
    lg: 3,
    xl: 4,
  });
  return (
    <VStack alignItems="center" bg="coolGray.50" w="100%">
      <Header />
      <VStack alignItems="center" w={{ base: "90%", md: "90%", lg: "82%" }}>
        <Navigator />
        <Banner />
        {noColumn > 1 ? (
          <FlatList
            mt={8}
            contentContainerStyle={{}}
            w="100%"
            numColumns={noColumn}
            data={list}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => <RestaurantCard item={item} />}
            key={noColumn}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
          />
        ) : (
          <FlatList
            mt={8}
            w="100%"
            numColumns={1}
            data={list}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => <RestaurantCard item={item} />}
            key={noColumn}
          />
        )}
      </VStack>
      <Footer />
    </VStack>
  );
}
