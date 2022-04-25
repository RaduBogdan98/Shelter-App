import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import FeedScreen from '../pages/FeedScreen';
import MapScreen from '../pages/MapScreen';
import ProfileScreen from '../pages/ProfileScreen';
import { HomeIcon, FeedIcon, MapIcon, ProfileIcon } from '../../assets/bottomTabIcons';
import { style } from '../resources/colors';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        switch (route.name) {
                            case 'Home': return <HomeIcon color={focused ? style.primaryBlue : style.black} />;
                            case 'Feed': return <FeedIcon color={focused ? style.primaryBlue : style.black} />;
                            case 'Map': return <MapIcon color={focused ? style.primaryBlue : style.black} />;
                            case 'Profile': return <ProfileIcon color={focused ? style.primaryBlue : style.black} />;
                        }
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        height: 75,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        paddingTop: Platform.OS === 'ios' ? 10 : 0,
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