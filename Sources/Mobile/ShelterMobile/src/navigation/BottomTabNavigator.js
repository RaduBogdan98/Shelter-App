import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import FeedScreen from '../pages/FeedScreen';
import MapScreen from '../pages/MapScreen';
import ProfileScreen from '../pages/ProfileScreen';
import { HomeIcon, FeedIcon, MapIcon, ProfileIcon } from '../../assets/bottomTabIcons'

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        switch (route.name) {
                            case 'Home': return <HomeIcon color={focused ? '#4A7DCB' : '#000'} />;
                            case 'Feed': return <FeedIcon color={focused ? '#4A7DCB' : '#000'} />;
                            case 'Map': return <MapIcon color={focused ? '#4A7DCB' : '#000'} />;
                            case 'Profile': return <ProfileIcon color={focused ? '#4A7DCB' : '#000'} />;
                        }
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        height: 75,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        marginTop: -10,
                    }
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Feed" component={FeedScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}