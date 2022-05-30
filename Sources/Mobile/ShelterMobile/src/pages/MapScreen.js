import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";

import { SearchBar, FilterButtons } from "../components";
import { style } from "../resources/colors";
import { mapStyle } from "../resources/mapStyle";

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar onSubmit={(searchText) => console.log(searchText)} />
                <FilterButtons active={true} />
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
                customMapStyle={mapStyle}
            >
                <Marker coordinate={{ latitude: 45.7532, longitude: 21.2270 }} pinColor={"orange"} />
                <Marker coordinate={{ latitude: 45.7478, longitude: 21.2174 }} pinColor={"orange"} />
                <Marker coordinate={{ latitude: 45.7549, longitude: 21.2460 }} pinColor={"blue"} />
                <Marker coordinate={{ latitude: 45.7535, longitude: 21.2216 }} pinColor={"blue"} />
                <Marker coordinate={{ latitude: 45.7300, longitude: 21.2220 }} pinColor={"green"} />
                <Marker coordinate={{ latitude: 45.7445, longitude: 21.2413 }} pinColor={"green"} />
                <Marker coordinate={{ latitude: 45.7598, longitude: 21.2131 }} pinColor={"indigo"} />
            </MapView>
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
