import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import {
    BackIcon,
} from "../../assets/icons";
import { FilterButtons, Button } from "../components"
import { style } from "../resources/colors";
import { strings } from "../resources/strings";

const BecomeProviderScreen = ({ navigation }) => {
    const onBackPress = () => navigation.goBack();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backIcon}
                onPress={onBackPress}
            >
                <BackIcon />
            </TouchableOpacity>
            <Image source={require("../../assets/generalImages/providerImage.png")} style={styles.image} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{strings.become_a_provider}</Text>
            </View>
            <FilterButtons />
            <Button text={strings.submit} />
            <View style={styles.textContainer}>
                <Text style={styles.agreementText}>{strings.agreement}</Text>
            </View>
        </View>
    )
}

export default BecomeProviderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: style.white,
        alignItems: "center",
    },
    backIcon: {
        alignSelf: "flex-start"
    },
    image: {
        width: 325,
        height: 240,
    },
    titleContainer: {
        marginVertical: 10
    },
    title: {
        fontSize: 36,
        fontFamily: "semibold",
    },
    textContainer: {
        marginVertical: 10
    },
    agreementText: {
        textAlign: "center",
        fontFamily: "light"
    },
})