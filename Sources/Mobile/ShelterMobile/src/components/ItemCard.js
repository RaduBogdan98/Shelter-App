import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { style } from "../resources/colors";

const navigateToDetailsPage = () => {
    console.log("Navigating to details page");
};

const ItemCard = (props) => {
    return (
        <TouchableOpacity style={styles.item} onPress={navigateToDetailsPage()}>
            <Image source={props.image} style={styles.imageStyle} />
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    item: {
        height: 215,
        width: "45%",
        backgroundColor: style.baseGray25,
        margin: 10,
        borderRadius: 16,
        alignItems: 'flex-start',
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 18,
        fontFamily: 'regular',
    },
    imageStyle: {
        width: "101%",
        height: "60%",
        borderRadius: 16,
    },
});
