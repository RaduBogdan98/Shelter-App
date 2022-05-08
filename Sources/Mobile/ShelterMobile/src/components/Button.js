import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { style } from "../resources/colors";

const Button = (props) => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{ ...styles.defaultContainerStyle, ...props.containerStyle }}
        >
            <Text style={{ ...styles.defaultTextStyle, ...props.textStyle }}>
                {props.text}
            </Text>
        </TouchableOpacity >
    )
}
const styles = StyleSheet.create({
    defaultTextStyle: {
        color: style.white,
        fontSize: 20,
        fontFamily: 'medium'
    },
    defaultContainerStyle: {
        backgroundColor: style.primaryBlue,
        borderRadius: 16,
        paddingVertical: 14,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Button;