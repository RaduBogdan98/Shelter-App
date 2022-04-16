import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

import { SearchBar } from '../components';
import { style } from "../resources/colors";

const MapScreen = () => {
    return (
        <View
            style={styles.container}
        >
            <View style={styles.header}>
                <SearchBar onSubmit={(searchText) => console.log(searchText)} />
            </View>
            <MapView
                provider="google"
                style={styles.map}
                initialRegion={{
                    latitude: 45.7532,
                    longitude: 21.2270,
                    latitudeDelta: 0.0722,
                    longitudeDelta: 0.0321,
                }} />
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        backgroundColor: style.white,
        height: 150,
        width: '100%',
        zIndex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    map: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    }
})