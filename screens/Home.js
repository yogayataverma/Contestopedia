import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/BottomTabs';
// import SearchBar from '../components/SearchBar'

export default function Home() {
    return (

      <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
        <Text>Home Page</Text>
      </View>

      // <SafeAreaView style={{backgroundColor: "#eee"}}>
      //     <View>
      //       <BottomTabs/>
      //     </View>
      // </SafeAreaView>
      // <Divider></Divider>
    );
}
