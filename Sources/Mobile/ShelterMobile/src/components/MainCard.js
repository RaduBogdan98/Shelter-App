import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    View,
} from "react-native";

import { NextIcon } from "../../assets/icons";
import { strings } from "../resources/strings";

const imageSelector = (type) =>
    type === "findHelp"
        ? require("../../assets/findHelp.png")
        : require("../../assets/goToMap.png");

const textSelector = (type) =>
    type === "findHelp" ? (
        <View>
            <Text style={styles.title}>
                {strings.find_help}
            </Text>
            <Text style={styles.description}>
                {strings.help_card_text}
            </Text>
        </View>
    ) : (
        <View>
            <Text style={styles.title}>
                {strings.go_to_map}
            </Text>
            <Text style={styles.description}>
                {strings.map_card_text}
            </Text>
        </View>
    );

const MainCard = (props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => props.onTap && props.onTap()}
            activeOpacity={0.7}
        >
            <ImageBackground
                source={imageSelector(props.type)}
                resizeMode="cover"
                style={styles.imageBackground}
                imageStyle={{ borderRadius: 16 }}
            >
                {textSelector(props.type)}
                <NextIcon style={styles.nextIcon} />
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 140,
        width: "50%",
        marginHorizontal: 5,
        marginVertical: 15,
    },
    imageBackground: {
        flex: 1,
        padding: 12,
    },
    title: {
        fontSize: 20,
        fontFamily: "medium",
    },
    description: {
        fontFamily: "light",
        fontSize: 16,
    },
    nextIcon: {
        position: "absolute",
        right: 19,
        bottom: 12,
    },
});

export default MainCard;
