import * as React from 'react';
import Emoji from 'react-native-emoji';
import { ScrollView,View, Text ,Button, Alert} from 'react-native';
import ContestCard from './ContestCard';


export default function Help({ navigation }) {
    return (
    <>
        <ScrollView>
            <Text style={{fontSize:50,marginLeft:450,marginTop:20,marginBottom:20}}>Need Help? We are here</Text>
            <Text style={{fontSize:20,marginLeft:100 , marginBottom:20}}>All the content here is shown in the forms of cards and you will see that it is shown in the vibrant theme of Black and White .The pages we have are:</Text>
            <ul style={{fontFamily:'cursive'}}>
                <li>Contests:<Text style={{flex:1,flexDirection: "column"}}>It is for having a track of all the contests for which we have only 24 hours left.You can have a track of the starting time and ending time and you will be provided with the URL links which you can copy and access the contests .<Emoji name="smiley" style={{fontSize: 50 }} /></Text></li>
                <li>Home:<Text>It shows all the contests whether they are active for 24 hours only or not .You will provided the starting time , ending time and  URL links. <Emoji name="coffee" style={{fontSize: 50 }} /> </Text></li>
                <li>Placements:<Text>It is for showing placements and you can access how many people have participated in it.<Emoji name="heart" style={{fontSize: 50 }} /></Text></li>
                <li>Search:<Text>You can search here all the contests and placements here and you can access that specific contest or placement through URL. </Text><Emoji name="man" style={{fontSize: 50 }} /></li>
                <li>About Us:<Text> We are telling about us in this page and providing details like from where we have taken the information or how we are rendering these pages etc.</Text><Emoji name="woman" style={{fontSize: 50 }} /></li>
            </ul>

            <Text>Thank You for visiting us.</Text>
        </ScrollView>
    </>
    );
}