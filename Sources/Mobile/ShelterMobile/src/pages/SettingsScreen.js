import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "../components";
import { BackIcon, EllipsesIcon } from "../../assets/icons";
import { style } from "../resources/colors";
import { strings } from "../resources/strings";

const SettingsScreen = ({ navigation }) => {

    const onBackPress = () => navigation.goBack();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={[styles.icon, styles.iconLeft]}
                    onPress={onBackPress}
                >
                    <BackIcon />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.titleText}>{strings.account_settings}</Text>
                <TouchableOpacity>
                    <Text style={styles.mainText}>{strings.edit_profile_picture}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: style.white,
        // alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        alignItems: "center",
    },
    titleText: {
        fontSize: 20,
        fontFamily: "semibold",
        color: style.primaryBlue,
        paddingVertical: 20,
    },
    mainText: {
        fontSize: 18,
        fontFamily: "regular",
    }
});
