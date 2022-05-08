import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import StatusTag from "../components/StatusTag";
import { NextIcon } from "../../assets/icons";
import { style } from "../resources/colors";

const navigateToDetailsPage = () => {
    console.log("Navigating to details page");
};

const ItemCard = (props) => {
    return (
        <TouchableOpacity style={styles.item} onPress={navigateToDetailsPage}>
            <Image source={props.image} style={styles.imageStyle} />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                <View style={styles.actionRow}>
                    <StatusTag category={props.category} />
                    <NextIcon />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ItemCard;

const styles = StyleSheet.create({
    item: {
        height: 215,
        width: "44%",
        backgroundColor: style.baseGray25,
        margin: 10,
        borderRadius: 16,
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 17,
        fontFamily: 'regular',
    },
    imageStyle: {
        width: "101%",
        height: "60%",
        borderRadius: 16,
    },
    info: {
        flex: 1,
        width: "100%",
        padding: 10,
        justifyContent: 'space-around'
    },
    actionRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
});
