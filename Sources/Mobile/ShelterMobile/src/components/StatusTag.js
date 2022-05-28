import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
    StayIcon,
    ChildcareIcon,
    FoodIcon,
    MedicalIcon,
} from "../../assets/icons";
import { style } from "../resources/colors";

const getIcon = (category) => {
    switch (category) {
        case "Stay":
            return <StayIcon />;
        case "Childcare":
            return <ChildcareIcon />;
        case "Food":
            return <FoodIcon />;
        case "Medical":
            return <MedicalIcon />;
        case "Provider":
            return null;
    }
};

const getBackgroundColor = (category) => {
    switch (category) {
        case "Stay":
            return style.darkGray;
        case "Childcare":
            return style.secondaryBlue;
        case "Food":
            return style.accentOrange;
        case "Medical":
            return style.accentGreen;
        case "Provider":
            return style.primaryBlue;
    }
};

const TagStatus = (props) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 16,
            backgroundColor: getBackgroundColor(props.category),
        },
        label: {
            paddingLeft: props.category === "Provider" ? 0 : 5,
            color: style.white,
        },
    });

    return (
        <View style={[styles.container, props.style]}>
            {getIcon(props.category)}
            <Text style={styles.label}>{props.category}</Text>
        </View>
    );
};

export default TagStatus;
