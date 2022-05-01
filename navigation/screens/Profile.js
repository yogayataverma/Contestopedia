import * as React from 'react';
import { View, Text } from 'react-native';
import ProfileScreen from './ProfileScreen'
export default function Profile({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ProfileScreen/>
        </View>
    );
}