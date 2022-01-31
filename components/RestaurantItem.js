import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function RestaurantItem() {
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
        <View style={{marginTop:10 ,padding:15 , backgroundColor:"#fff"}}>
            <RestaurantImage />
            <RestaurantInfo />


        </View>
        </TouchableOpacity>
    )
}


const RestaurantImage = ()=>{
    return<>
     <Image source={{uri: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg"}} style={{width:"100%",height: 180}}>

</Image>
<TouchableOpacity style={{position:'absolute' ,right:20,left:20}}>
    <MaterialCommunityIcons name='heart-outline' size={25} color={"#fff"}></MaterialCommunityIcons>
</TouchableOpacity>
    </>
    
}


const RestaurantInfo = ()=>{
    return<>
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:10}}>
       <View>
       <Text style={{fontSize:15, fontWeight:"bold"}}>Farmhouse Kitchen Thai Cusine</Text>
        <Text style={{fontSize:13, color:"gray"}}>30-45 . min</Text>
       </View>
    <View style={{backgroundColor:"#fff",height:30, width:30,alignItems:"center", borderRadius: 15}}>
    <Text>4.5</Text>
    </View>
    </View>
    </>
}