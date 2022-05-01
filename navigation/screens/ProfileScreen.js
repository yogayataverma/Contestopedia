import * as React from 'react';
import { View, Text , Image} from 'react-native';

export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
            source={{ uri: 'https://i.pinimg.com/550x/d3/a5/b7/d3a5b77b86f84e2d55a09605cdcbb666.jpg' }}
            style={{ width: 100, height: 100
            , borderRadius:500 }}
        />
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Name: Testing </Text>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Age:21</Text>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Qualifications: BCA/Btech/ </Text>
            <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Gender: Male</Text>
            
            {/* <Text
                onPress={() => navigation.navigate('Search')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Logout</Text> */}
        </View>
    );
}