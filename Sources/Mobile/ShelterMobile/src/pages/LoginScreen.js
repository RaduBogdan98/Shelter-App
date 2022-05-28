import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Alert,
    TouchableOpacity
} from "react-native";
import { Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginImage from "../../assets/generalImages/loginImage";
import { EmailIcon, EyeOpenIcon, EyeCloseIcon, PasswordIcon } from "../../assets/icons";
import { style } from "../resources/colors";
import { strings } from "../resources/strings";

const LoginScreen = () => {

    const isValidEmail = (email) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [securePassword, setSecurePassword] = useState(false);

    const onLoginPressed = () => {
        if (isValidEmail(email))
            console.log("Login");
        else {
            Alert.alert("Invalid Email");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.keyboardAware}>
                <LoginImage />
                <Text style={styles.title}>Login</Text>
                <View style={styles.content}>
                    <View style={styles.rowArrange}>
                        <EmailIcon />
                        <TextInput style={styles.input} placeholder={strings.email} placeholderTextColor={style.darkGray} />
                    </View>
                    <View style={styles.rowArrange}>
                        <PasswordIcon />
                        <TextInput style={styles.input} placeholder={strings.password} placeholderTextColor={style.darkGray} secureTextEntry={securePassword} />
                        {securePassword ?
                            <TouchableOpacity style={styles.eyeIcon} onPress={() => setSecurePassword(false)}>
                                <EyeOpenIcon />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.eyeIcon} onPress={() => setSecurePassword(true)}>
                                <EyeCloseIcon />
                            </TouchableOpacity>
                        }
                    </View>
                    <Text style={styles.forgotPass}>{strings.forgot_password}</Text>
                </View>
                {/* <View style={{ flex: 1 }} /> */}
                <View style={styles.buttonArrange}>
                    <Button text={strings.login} />
                </View>
            </KeyboardAwareScrollView >
        </SafeAreaView >
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    keyboardAware: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        width: '100%',
    },
    title: {
        fontSize: 36,
        fontFamily: "bold",
        width: "100%",
        marginVertical: 20,
    },
    content: {
        width: "100%",
    },
    input: {
        borderBottomColor: style.darkGray,
        borderBottomWidth: 1,
        width: "100%",
        marginLeft: 10,
        fontFamily: "regular",
        fontSize: 16,
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
    forgotPass: {
        fontSize: 16,
        fontFamily: 'regular',
        color: style.primaryBlue,
        alignSelf: "flex-end",
    },
    buttonArrange: {
        marginTop: 15,
        width: '100%'
    },
});
