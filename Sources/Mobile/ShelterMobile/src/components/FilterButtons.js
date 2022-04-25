import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import {
    StayIcon,
    ChildcareIcon,
    FoodIcon,
    MedicalIcon,
} from "../../assets/icons";
import { style } from "../resources/colors";
import { strings } from '../resources/strings'

const FilterButtons = () => {
    const [stayIsActive, setStayIsActive] = useState(true);
    const [childcareIsActive, setChildcareIsActive] = useState(true);
    const [foodIsActive, setFoodIsActive] = useState(true);
    const [medicalIsActive, setMedicalIsActive] = useState(true);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{
                    ...styles.button,
                    backgroundColor: stayIsActive ? style.darkGray : style.white,
                    borderColor: style.darkGray,
                }}
                onPress={() => setStayIsActive(!stayIsActive)}
            >
                <StayIcon fill={stayIsActive ? style.white : style.darkGray} />
                <Text
                    style={[
                        styles.label,
                        stayIsActive ? styles.colorWhite : { color: style.darkGray },
                    ]}
                >
                    {strings.stay}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    ...styles.button,
                    backgroundColor: childcareIsActive
                        ? style.secondaryBlue
                        : style.white,
                    borderColor: style.secondaryBlue,
                }}
                onPress={() => setChildcareIsActive(!childcareIsActive)}
            >
                <ChildcareIcon
                    fill={childcareIsActive ? style.white : style.secondaryBlue}
                />
                <Text
                    style={[
                        styles.label,
                        childcareIsActive
                            ? styles.colorWhite
                            : { color: style.secondaryBlue },
                    ]}
                >
                    {strings.childcare}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    ...styles.button,
                    backgroundColor: foodIsActive ? style.accentOrange : style.white,
                    borderColor: style.accentOrange,
                }}
                onPress={() => setFoodIsActive(!foodIsActive)}
            >
                <FoodIcon fill={foodIsActive ? style.white : style.accentOrange} />
                <Text
                    style={[
                        styles.label,
                        foodIsActive ? styles.colorWhite : { color: style.accentOrange },
                    ]}
                >
                    {strings.food}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    ...styles.button,
                    backgroundColor: medicalIsActive ? style.accentGreen : style.white,
                    borderColor: style.accentGreen,
                }}
                onPress={() => setMedicalIsActive(!medicalIsActive)}
            >
                <MedicalIcon fill={medicalIsActive ? style.white : style.accentGreen} />
                <Text
                    style={[
                        styles.label,
                        medicalIsActive ? styles.colorWhite : { color: style.accentGreen },
                    ]}
                >
                    {strings.medical}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default FilterButtons;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginVertical: 12,
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 16,
        borderWidth: 1,
    },
    label: {
        fontSize: 14,
        paddingLeft: 5,
    },
    colorWhite: {
        color: style.white,
    },
});
