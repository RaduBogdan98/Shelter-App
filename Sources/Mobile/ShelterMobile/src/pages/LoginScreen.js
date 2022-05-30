import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Button } from "../components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginImage from "../../assets/generalImages/loginImage";
import {
    EmailIcon,
    EyeOpenIcon,
    EyeCloseIcon,
    PasswordIcon,
    GoogleIcon,
} from "../../assets/icons";
import { style } from "../resources/colors";
import { strings } from "../resources/strings";
import { isValidEmail, showToast } from "../resources/utils";

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [securePassword, setSecurePassword] = useState(false);

    const onLoginPressed = () => {
        console.log(email, password);
        if (isValidEmail(email)) console.log("Login");
        else {
            showToast("error", "Invalid Email");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView contentContainerStyle={styles.keyboardAware}>
                <LoginImage />
                <Text style={styles.title}>{strings.login}</Text>
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
                    <Text style={styles.forgotPass}>{strings.forgot_password}</Text>
                </View>
                <View style={{ flex: 1 }} />
                <View style={styles.buttonArrange}>
                    <Button text={strings.login} onPress={onLoginPressed} />
                </View>
                <View
                    style={{
                        ...styles.rowArrange,
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <View style={styles.divider} />
                    <Text style={styles.connectWith}>{strings.or_connect_with}</Text>
                    <View style={styles.divider} />
                </View>
                <View style={{ ...styles.buttonArrange, marginTop: 0 }}>
                    <Button
                        text={strings.login_google}
                        containerStyle={{ backgroundColor: style.gray25 }}
                        textStyle={{ color: style.black }}
                    >
                        <GoogleIcon style={{ marginRight: 10 }} />
                    </Button>
                </View>
                <View style={styles.redirect}>
                    <Text style={styles.connectWith}>{strings.dont_have_an_account}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{ padding: 10 }}>
                        <Text style={styles.signUp}>{strings.sign_up}</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

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
    forgotPass: {
        fontSize: 16,
        fontFamily: "regular",
        color: style.primaryBlue,
        alignSelf: "flex-end",
    },
    buttonArrange: {
        marginTop: 15,
        width: "100%",
    },
    divider: {
        height: 1,
        backgroundColor: style.darkGray,
        width: "30%",
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
});
