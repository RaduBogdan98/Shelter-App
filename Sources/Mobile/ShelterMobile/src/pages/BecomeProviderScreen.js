import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, SafeAreaView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { FilterButtons, Button } from "../components";
import { BackIcon, AddressIcon, WorkIcon, HelpIcon } from "../../assets/icons";

import { style } from "../resources/colors";
import { strings } from "../resources/strings";

const BecomeProviderScreen = ({ navigation }) => {

    const [address, setAddress] = useState("");
    const [company, setCompany] = useState("");
    const [motivation, setMotivation] = useState("");

    const onBackPress = () => navigation.goBack();

    return (
        <SafeAreaView style={styles.safe}>
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>
                <TouchableOpacity style={styles.backIcon} onPress={onBackPress}>
                    <BackIcon />
                </TouchableOpacity>
                <Image
                    source={require("../../assets/generalImages/providerImage.png")}
                    style={styles.image}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{strings.become_a_provider}</Text>
                </View>
                <FilterButtons active={false} />

                <View style={styles.rowArrange}>
                    <AddressIcon />
                    <TextInput
                        style={styles.input}
                        placeholder={strings.address}
                        placeholderTextColor={style.darkGray}
                        onChangeText={(value) => setAddress(value)}
                    />
                </View>
                <View style={styles.rowArrange}>
                    <WorkIcon />
                    <TextInput
                        style={styles.input}
                        placeholder={strings.company}
                        placeholderTextColor={style.darkGray}
                        onChangeText={(value) => setCompany(value)}
                    />
                </View>
                <View style={styles.rowArrange}>
                    <HelpIcon />
                    <TextInput
                        style={styles.input}
                        placeholder={strings.motivation}
                        placeholderTextColor={style.darkGray}
                        onChangeText={(value) => setMotivation(value)}
                    />
                </View>

                <Button text={strings.submit} containerStyle={styles.button} />
                <View style={styles.textContainer}>
                    <Text style={styles.agreementText}>{strings.agreement}</Text>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default BecomeProviderScreen;

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: style.white,
    },
    container: {
        padding: 20,
        paddingTop: 30,
        backgroundColor: style.white,
        alignItems: "center",
    },
    backIcon: {
        alignSelf: "flex-start",
    },
    image: {
        width: 325,
        height: 240,
    },
    titleContainer: {
        marginVertical: 10,
    },
    title: {
        fontSize: 36,
        fontFamily: "semibold",
    },
    textContainer: {
        marginVertical: 10,
    },
    agreementText: {
        textAlign: "center",
        fontFamily: "light",
    },
    input: {
        borderBottomColor: style.darkGray,
        borderBottomWidth: 1,
        width: "91%",
        marginLeft: 10,
        fontFamily: "regular",
        fontSize: 16,
        paddingVertical: 2,
    },
    rowArrange: {
        flexDirection: "row",
        marginVertical: 20,
        alignItems: "center",
    },
    button: {
        marginTop: 30
    }
});
