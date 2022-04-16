import { StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import MapView from "react-native-maps";

import { SearchBar, FilterButtons } from "../components";
import { style } from "../resources/colors";

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar onSubmit={(searchText) => console.log(searchText)} />
                <FilterButtons />
            </View>
            <MapView
                provider="google"
                style={styles.map}
                initialRegion={{
                    latitude: 45.7532,
                    longitude: 21.227,
                    latitudeDelta: 0.0722,
                    longitudeDelta: 0.0321,
                }}
            />
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.white,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        height: 150,
        width: "100%",
        zIndex: 2,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 20,
        paddingBottom: 0,
        backgroundColor: style.white,
    },
    map: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
    },
});
