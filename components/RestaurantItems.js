import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    categories: ["Cafe", "Bar"],
    price: "$5",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$5",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    categories: ["Cafe", "Bar"],
    price: "$5",
    reviews: 1244,
    rating: 4.1,
  },
  {
    name: "Beachside Bar",
    image_url:
      "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg",
    categories: ["Cafe", "Bar"],
    price: "$5",
    reviews: 1244,
    rating: 4.5,
  },
];

export default function RestaurantItems({restaurantData}) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurantData.map((restaurant, index) => (
        <View style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => {
  return (
    <>
      <Image
        source={{
          uri: props.image,
        }}
        style={{ width: "100%", height: 180 }}
      ></Image>
      <TouchableOpacity style={{ position: "absolute", right: 20, left: 20 }}>
        <MaterialCommunityIcons
          name="heart-outline"
          size={25}
          color={"#fff"}
        ></MaterialCommunityIcons>
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = (props) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.name}</Text>
          <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min</Text>
        </View>
        <View
          style={{
            backgroundColor: "#efefef",
            height: 30,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          <Text>{props.rating}</Text>
        </View>
      </View>
    </>
  );
};
