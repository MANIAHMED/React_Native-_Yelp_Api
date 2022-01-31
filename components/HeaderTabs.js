import React,{useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delievery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delievery" btnColor="#202020" textColor="#ffffff" activeTab={activeTab} setActiveTab={setActiveTab}  />
      <HeaderButton text="Pickup" btnColor="#ffffff" textColor="#202020" activeTab={activeTab} setActiveTab={setActiveTab} />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.text ?"#202020" :"#ffffff",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    
    }}
    onPress={()=> props.setActiveTab(props.text)}
  >
    <Text style={{ color: props.activeTab === props.text ?"#ffffff" :"#202020", fontSize: 15, fontWeight: "900" }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
