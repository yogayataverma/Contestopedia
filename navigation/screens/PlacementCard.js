import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList } from 'react-native-web';
// import { useEffect } from 'react/cjs/react.production.min';



export default function PlacementCard({ navigation }) {
    
    //loading screen
    const[isLoaded, setIsLoaded] = useState(true);


    //API data fetch
    const [myData, setMyData] = useState([]);
    const getUserData= async ()=>{
    try{
            const response = await fetch("https://kontests.net/api/v1/codeforces");
            
            const realData = await response.json();
            setMyData(realData);
            setIsLoaded(false);
            // console.log(realData);

        }catch(error){
            // console.log(error);
        }
    };
    

    useEffect(() => getUserData(),[]);

    //Show placement data
    const showUserData = ({item})=>{
        
        return(
        <View style={styles.card}>
        <View style={styles.cardContainer}>
             <text style={styles.bioData}>Name..{item.name}</text>
             <text style={styles.bioData}>URL..{item.url}</text>
             <text style={styles.bioData}>Start Time..{item.start_time}</text>
        </View>
            
        </View>
        )
    };


    return (
        // <View style={styles.cardContainer}>
        //     <Text>Company Name : </Text>
        //     <Text>Eligibility :</Text>
        //     <Text>Last Date to Apply :</Text>
        //     <Text>URL :</Text>
        //     <Text>Description :</Text>

        // </View>
            <FlatList 
                data={myData}
                renderItem={showUserData}/>
    );
}
// const deviceWidth = Math.round(Dimensions.get('window'.width))
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    cardContainer: { width: deviceWidth-25,
    backgroundColor: '#ff714e',
    height:200,
    borderRadius:20,
    marginLeft:29,
    marginTop:30,

    shadowColor: '#000',
    shadowOffset: {
        width:5,
        height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius:5,
    elevation: 9,
},
});