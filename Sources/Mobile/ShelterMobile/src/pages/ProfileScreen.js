import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components";
import { strings } from "../resources/strings";
import { style } from "../resources/colors";

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Button text={strings.become_a_provider} />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.white,
        alignItems: "center",
        justifyContent: "center",
    },
});
