import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
import { Button, StatusTag } from "../components";
import { strings } from "../resources/strings";
import { style } from "../resources/colors";
import { SettingsIcon } from "../../assets/icons";
import { DATA } from "./FeedScreen";
import { ProfileCard } from "../components";

const mockUser = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "123456789",
    address: "123 Main St, New York, NY 10001",
};

const ProfileScreen = ({ navigation }) => {
    const [isProvider, setIsProvider] = useState(true);

    const navigateToSettings = () => navigation.navigate("SettingsScreen");

    return (
        <View style={styles.container}>
            <View style={styles.headerArrange}>
                <View style={styles.userInfoArrange}>
                    <Image
                        source={require("../../assets/mockImages/avatar.png")}
                        style={styles.avatar}
                    />
                    <View
                        style={{ flex: 1, marginHorizontal: 10, justifyContent: "center" }}
                    >
                        <Text style={styles.username} numberOfLines={1}>
                            {mockUser.name}
                        </Text>
                        {isProvider && (
                            <StatusTag
                                category={"Provider"}
                                style={styles.providerStatusArrange}
                            />
                        )}
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.touchableOpacityRight}
                    onPress={navigateToSettings}
                >
                    <SettingsIcon />
                </TouchableOpacity>
            </View>
            <Text style={styles.sectionTitle}>{strings.services}</Text>
            <FlatList
                data={DATA}
                style={styles.flatList}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ProfileCard
                        title={item.title}
                        author={item.author}
                        category={item.category}
                        image={item.image}
                        date={item.date}
                        isConfirmed={item.isConfirmed}
                    />
                )}
            />
            {isProvider ? null : (
                <Button
                    text={strings.become_a_provider}
                    onPress={() => navigation.navigate("BecomeProviderScreen")}
                />
            )}
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: style.white,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: 20,
        paddingTop: 40,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    headerArrange: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    username: {
        fontFamily: "medium",
        fontSize: 24,
    },
    userInfoArrange: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    touchableOpacityRight: {
        padding: 12,
        paddingRight: 0,
    },
    providerStatusArrange: {
        alignSelf: "flex-start",
        borderRadius: 16,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontFamily: "semibold",
        fontSize: 20,
    },
    flatList: {
        flex: 1,
        width: "100%",
        marginVertical: 10,
    },
    list: {
        // backgroundColor: 'red'
    },
});
