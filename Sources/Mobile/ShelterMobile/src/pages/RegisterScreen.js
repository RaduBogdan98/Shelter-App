import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Alert, TouchableOpacity, } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Button } from "../components";

import RegisterImage from "../../assets/generalImages/registerImage";
import { EmailIcon, EyeOpenIcon, EyeCloseIcon, PasswordIcon, FaceIcon, PhoneIcon } from "../../assets/icons";

import { style } from "../resources/colors";
import { strings } from "../resources/strings";
import { isValidEmail, showToast } from "../resources/utils";


const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [securePassword, setSecurePassword] = useState(false);

    const onRegisterPressed = () => {
        console.log(email, password, fullName, phone);
        if (isValidEmail(email)) console.log("Register");
        else {
            showToast("error", "Invalid Email");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.keyboardAware}>
                <RegisterImage />
                <Text style={styles.title}>{strings.register}</Text>
                <View style={styles.content}>
                    <View style={styles.rowArrange}>
                        <EmailIcon />
                        <TextInput
                            style={styles.input}
                            placeholder={strings.email}
                            placeholderTextColor={style.darkGray}
                            keyboardType={"email-address"}
                            onChangeText={(value) => setEmail(value)}
                        />
                    </View>
                    <View style={styles.rowArrange}>
                        <PasswordIcon />
                        <TextInput
                            style={styles.input}
                            placeholder={strings.password}
                            placeholderTextColor={style.darkGray}
                            secureTextEntry={securePassword}
                            onChangeText={(value) => setPassword(value)}
                        />
                        {securePassword ? (
                            <TouchableOpacity
                                style={styles.eyeIcon}
                                onPress={() => setSecurePassword(false)}
                            >
                                <EyeOpenIcon />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.eyeIcon}
                                onPress={() => setSecurePassword(true)}
                            >
                                <EyeCloseIcon />
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={styles.rowArrange}>
                        <FaceIcon />
                        <TextInput
                            style={styles.input}
                            placeholder={strings.full_name}
                            placeholderTextColor={style.darkGray}
                            onChangeText={(value) => setFullName(value)}
                        />
                    </View>
                    <View style={styles.rowArrange}>
                        <PhoneIcon />
                        <TextInput
                            style={styles.input}
                            placeholder={strings.phone_number}
                            placeholderTextColor={style.darkGray}
                            onChangeText={(value) => setPhone(value)}
                        />
                    </View>
                </View>
                <View style={{ flex: 1 }} />
                <Text style={styles.TC}>{strings.TC}</Text>
                <View style={styles.buttonArrange}>
                    <Button text={strings.register} onPress={onRegisterPressed} />
                </View>
                <View style={styles.redirect}>
                    <Text style={styles.connectWith}>{strings.already_have_an_account}</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
                        <Text style={styles.signUp}>{strings.login}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};
export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.white,
    },
    keyboardAware: {
        flex: 1,
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        fontFamily: "bold",
        width: "100%",
        marginVertical: 5,
    },
    content: {
        width: "100%",
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
    eyeIcon: {
        position: "absolute",
        right: 0,
    },
    TC: {
        fontFamily: "light",
    },
    buttonArrange: {
        marginTop: 15,
        width: "100%",
    },
    redirect: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
    },
    signUp: {
        fontFamily: "regular",
        color: style.primaryBlue,
    },
    connectWith: {
        fontFamily: "regular",
        color: style.black,
    },
})