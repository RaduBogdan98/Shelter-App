import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";

import {
    BackIcon,
    RightArrowIcon,
    GroupIcon,
    DangerIcon,
    LogoutIcon,
} from "../../assets/icons";
import { showToast } from "../resources/utils"
import { style } from "../resources/colors";
import { strings } from "../resources/strings";

const SettingsScreen = ({ navigation }) => {
    const onBackPress = () => navigation.goBack();

    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
    const toggleSwitchNotification = () => setIsNotificationEnabled((previousState) => !previousState);

    const [isDarkEnabled, setIsDarkEnabled] = useState(false);
    const toggleSwitchDark = () => setIsDarkEnabled((previousState) => !previousState);

    const handleEditProfilePress = () => showToast("success", "Edit profile picture");
    const handleChangeNamePress = () => showToast("success", "Change name");
    const handleChangePasswordPress = () => showToast("success", "Change password");
    const handleBecomeProviderPress = () => navigation.navigate("BecomeProviderScreen");
    const handleDeleteAccountPress = () => showToast("success", "Delete account");
    const handleLogoutPress = () => showToast("success", "Logout");
    const handleAboutAppPress = () => showToast("success", "About app");
    const handlePrivacyPolicyPress = () => showToast("success", "Privacy policy");
    const handleTermsAndConditionsPress = () => showToast("success", "Terms and conditions");

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
                <TouchableOpacity
                    style={styles.option}
                    onPress={handleEditProfilePress}
                >
                    <Text style={styles.mainText}>{strings.edit_profile_picture}</Text>
                    <RightArrowIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={handleChangeNamePress}>
                    <Text style={styles.mainText}>{strings.change_name}</Text>
                    <RightArrowIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={handleChangePasswordPress}
                >
                    <Text style={styles.mainText}>{strings.change_password}</Text>
                    <RightArrowIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={handleBecomeProviderPress}
                >
                    <Text style={styles.mainText}>{strings.become_a_provider}</Text>
                    <GroupIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.mainText}>{strings.push_notifications}</Text>
                    <Switch
                        onValueChange={toggleSwitchNotification}
                        value={isNotificationEnabled}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Text style={styles.mainText}>{strings.dark_mode}</Text>
                    <Switch onValueChange={toggleSwitchDark} value={isDarkEnabled} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={handleDeleteAccountPress}
                >
                    <Text style={[styles.mainText, styles.dangerText]}>
                        {strings.delete_account}
                    </Text>
                    <DangerIcon />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option} onPress={handleLogoutPress}>
                    <Text style={[styles.mainText, styles.logoutText]}>
                        {strings.logout}
                    </Text>
                    <LogoutIcon />
                </TouchableOpacity>
                <Text style={styles.titleText}>{strings.more}</Text>
                <TouchableOpacity style={styles.option} onPress={handleAboutAppPress}>
                    <Text style={styles.mainText}>{strings.about_app}</Text>
                    <RightArrowIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={handlePrivacyPolicyPress}
                >
                    <Text style={styles.mainText}>{strings.privacy_policy}</Text>
                    <RightArrowIcon />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.option}
                    onPress={handleTermsAndConditionsPress}
                >
                    <Text style={styles.mainText}>{strings.terms_and_conditions}</Text>
                    <RightArrowIcon />
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
    option: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    mainText: {
        fontSize: 18,
        fontFamily: "regular",
    },
    dangerText: {
        color: style.dangerRed,
    },
    logoutText: {
        fontFamily: "semibold",
    },
});
