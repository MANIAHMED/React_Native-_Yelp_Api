import React,{useState} from 'react'
import { View, Text, SafeAreaView,StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'
import SearchBar from '../components/SearchBar'



export default function Home() {

    const [restaurantData,setRestaurantData] = useState(localRestaurants)
    return (
        <SafeAreaView style={{flex: 1 }}>
            <View style={styles.top}>
                <View  style={styles.toptop}>
                <HeaderTabs />
                <SearchBar />

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} />
            
                </ScrollView>

            </View>
        </ SafeAreaView >
    )
}

const styles = StyleSheet.create ({
    top :{
     
        backgroundColor:"#eeeeee",
        height:"100vh"
    },
    toptop:{
        marginTop:20,
        backgroundColor:"#fff",
        padding:15
    }

})