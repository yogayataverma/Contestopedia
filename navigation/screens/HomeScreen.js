import * as React from 'react';
import { ScrollView,View, Text } from 'react-native';
import HomeCards from './HomeCards';

export default function HomeScreen({ navigation }) {
    return (
        // <SafeAreaView style={style.container}>
            //<ScrollView>
            //  {postMessage.map((HomeCards,index)=>(
                //      <Post HomeCards={HomeCards} key={index}/>
                //      
                //  ))}
                //<HomeCards/>
                //   </ScrollView>
                
                // {/* </SafeAreaView> */}
                //  <View >
                //      <Text>Latest Contests</Text>
                //  </View>
                
            <>
            <Text>Latest Contest</Text>
            <ScrollView>
                <HomeCards/>
                {/* <HomeCards/>
                <HomeCards/>
                <HomeCards/>
                <HomeCards/> */}
            </ScrollView>
        </>
    );
}

