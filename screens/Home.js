import React from 'react'
import { View, Text, SafeAreaView,StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import RestaurantItem from '../components/RestaurantItem'
import SearchBar from '../components/SearchBar'

export default function Home() {
    return (
        <SafeAreaView style={{flex: 1 }}>
            <View style={styles.top}>
                <View  style={styles.toptop}>
                <HeaderTabs />
                <SearchBar />

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem />
                <RestaurantItem />
                <RestaurantItem />
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