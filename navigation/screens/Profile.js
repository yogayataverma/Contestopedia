import * as React from 'react';
import { View, Text , Image} from 'react-native';

export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
  source={{ uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' }}
  style={{ width: 500, height: 500 }}
/>
            <text>Name: </text>
            <text>Age: </text>
            <text>Qualifications: </text>
            <text>Gender: </text>
            
            <Text
                onPress={() => navigation.navigate('Home')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Logout</Text>
        </View>
    );
}