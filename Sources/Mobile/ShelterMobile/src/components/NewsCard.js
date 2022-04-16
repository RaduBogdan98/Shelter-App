import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { style } from "../resources/colors";

const NewsCard = (props) => {

    //uri vs source code selector from props

    return (
        <TouchableOpacity style={styles.container} onPress={() => console.log("Aici linking catre siteul stirii")}>
            <Image
                source={props.source}
                resizeMode="cover"
                style={styles.imageStyle}
            />
            <Text style={styles.titleStyle} numberOfLines={3}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default NewsCard;

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 160,
        borderRadius: 16,
        backgroundColor: style.baseGray25,
        justifyContent: "flex-start",
        marginRight: 10,
    },
    imageStyle: {
        width: "100%",
        height: "60%",
        borderRadius: 16
    },
    titleStyle: {
        padding: 6,
        fontSize: 11,
    }
});
