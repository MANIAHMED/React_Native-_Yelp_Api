import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "PickUp",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    text: "SoftDrink",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bread",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "FastFood",
  },
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "ShoppingBag",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
  {
    image: require("../assets/images/coffee.png"),
    text: "Coffe",
  },
  {
    image: require("../assets/images/bg1.jpg"),
  },
  {
    image: require("../assets/images/bg2.jpg"),
  },
  {
    image: require("../assets/images/bg3.jpg"),
  },
];

export default function Categories() {
  return (
      <View style={{marginTop:5,backgroundColor:"#fff",paddingVertical:10,paddingLeft:20}}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {items.map((item, index) => {
        return (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{ width: 50, height: 50, resizeMode: "contain" }}
            ></Image>
            <Text style={{ fontSize: 13, fontWeight: "700" }}>{item.text}</Text>
          </View>
        );
      })}
    </ScrollView>
    </View>
  );
}
