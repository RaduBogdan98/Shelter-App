import * as React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button"

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 25, fontFamily: 'light' }}>Home Screen!</Text>
            <Text style={{ fontSize: 25, fontFamily: 'regular' }}>Home Screen!</Text>
            <Text style={{ fontSize: 25, fontFamily: 'medium' }}>Home Screen!</Text>
            <Text style={{ fontSize: 25, fontFamily: 'semibold' }}>Home Screen!</Text>
            <Text style={{ fontSize: 25, fontFamily: 'bold' }}>Home Screen!</Text>
            <Button text="Home" onPress={() => console.log("HomePressed")} />
        </View>
    )
}

export default HomeScreen;