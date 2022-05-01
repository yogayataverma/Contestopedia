import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Contests from './screens/Contests'
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';
import Search from './screens/Search';
import Placement from './screens/Placement';

//Screen names
const homeName = "Home";
const ConstProfile = "Profile";
const ConstSearch = "Search";
const ConstPlacement = "Placement";
const ConstContests = "Contests";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === ConstProfile) {
              iconName = focused ? 'man' : 'man';
            
            } else if (rn === ConstSearch) {
                iconName = focused ? 'search' : 'search-outline';
            
            } else if (rn === ConstPlacement) {
                iconName = focused ? 'briefcase' : 'briefcase';
            } else if (rn === ConstContests) {
                iconName = focused ? 'book' : 'book';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={ConstSearch} component={Search} />
        <Tab.Screen name={ConstPlacement} component={Placement} />
        <Tab.Screen name={ConstContests} component={Contests} />
        <Tab.Screen name={ConstProfile} component={Profile} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;