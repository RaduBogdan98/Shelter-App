import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux";

import BottomTabNavigator from '../navigation/BottomTabNavigator';

import { DetailsScreen, LoginScreen, RegisterScreen, ForgotPasswordScreen, SettingsScreen, BecomeProviderScreen } from '../pages';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={BottomTabNavigator} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
            <Stack.Screen name="BecomeProviderScreen" component={BecomeProviderScreen} />
        </Stack.Navigator>
    );
}

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        </Stack.Navigator>
    );
}

export default function AppNavigator() {

    const userDetails = useSelector(state => state.user)
    console.log("🚀 ~ file: AppNavigator.js ~ line 36 ~ AppNavigator ~ userDetails", userDetails)

    return (
        <NavigationContainer>
            {userDetails != undefined ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
}