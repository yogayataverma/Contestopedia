import { View, Text } from "react-native";
import Home from "./screens/Home";
import Contests from "./screens/Contests";
import Placement from "./screens/Placement";
import Notification from "./screens/Notification";
import Profile from "./screens/Profile";
import Search from "./screens/Search";

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from "react-native-elements";

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} barStyle={{backgroundcolor:'black'}} activeColor='white'>
        <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='home' color={color} size={26}/>
          )
        }}
        />

        <Tab.Screen name='Search' component={Search}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='magnify' color={color} size={26}/>
          )
        }}
        />
        <Tab.Screen name='Placements' component={Placement}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='briefcase' color={color} size={26}/>
          )
        }}
        />

        <Tab.Screen name='Contests' component={Contests}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='book' color={color} size={26}/>
          )
        }}
        />
        
        <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon:({color,size})=>(
            <MaterialCommunityIcons name='account-circle' color={color} size={26}/>
          )
        }}
        />


      

      </Tab.Navigator>
    </NavigationContainer>
    
  );
}
