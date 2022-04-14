import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

const FeedScreen = () => {
    return (
        <View
            style={styles.container}
        >
            <Text>Feed Screen!</Text>
        </View>
    )
}

export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})