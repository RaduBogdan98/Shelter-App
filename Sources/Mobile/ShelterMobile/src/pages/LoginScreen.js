import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    Alert,
    Button,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginImage from "../../assets/generalImages/loginImage";
import { style } from "../resources/colors";

const LoginScreen = () => {

    const isValidEmail = (email) => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email);
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                <View style={styles.content}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput style={styles.input} placeholder={""} />
                </View>
                <Button onPress={onLoginPressed} title="Login">CEVA</Button>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
    },
    keyboardAware: {
        flex: 1,
        alignItems: "center",
        width: '100%',
    },
    title: {
        fontSize: 36,
        fontFamily: "bold",
        width: "100%",
    },
    content: {
        width: "100%",
    },
    input: {
        borderBottomColor: style.darkGray,
        borderBottomWidth: 1,
    },
});
