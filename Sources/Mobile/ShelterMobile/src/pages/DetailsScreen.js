import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { BackIcon, EllipsesIcon } from "../../assets/icons";
import { style } from "../resources/colors";

const DetailsScreen = ({ navigation, route }) => {
    const [details, setDetails] = useState(route.params.item);

    const onBackPress = () => navigation.goBack();
    const onOptionsPress = () => {
        console.log("Options pressed!");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={[styles.icon, styles.iconLeft]}
                    onPress={onBackPress}
                >
                    <BackIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EllipsesIcon
                        style={[styles.icon, styles.iconRight]}
                        onPress={onOptionsPress}
                    />
                </TouchableOpacity>
            </View>
            <Image
                source={details.image}
                style={styles.imageStyle}
                resizeMode="cover"
            />
            <Text>{details.title}</Text>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: style.white,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        alignItems: "center",
    },
    icon: {
        padding: 12,
    },
    iconLeft: {
        paddingLeft: 0,
    },
    iconRight: {
        paddingRight: 0,
    },
    imageStyle: {
        width: "100%",
        height: 250,
        borderRadius: 20,
    },
});
