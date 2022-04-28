import * as React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';


export default function Placement({ navigation }) {
    return (
        <View style={styles.cardContainer}>
            <Text>Latest Contests</Text>
        </View>
    );
}
// const deviceWidth = Math.round(Dimensions.get('window'.width))
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    cardContainer: { width: deviceWidth-25,
    backgroundColor: '#FFA500',
    height:200,
    borderRadius:20,
    // alignItems:'center',
    // alignContent: 'center',
    marginLeft:12,
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