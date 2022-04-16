import React, { useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";

import { AccountAvatarIcon } from "../../assets/icons";
import { MainCard, NewsCard } from "../components";
import { style } from "../resources/colors";

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <AccountAvatarIcon />
                    <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.headerText}>Hello, User!</Text>
                        <Text style={styles.headerText}>
                            Welcome to <Text style={styles.shelterText}>Shelter</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.body}>
                    <Text style={styles.title}>I Need Help!</Text>
                    <View style={styles.mainCardContainer}>
                        <MainCard
                            type={"findHelp"}
                            onTap={() => navigation.navigate("Feed")}
                        />
                        <MainCard
                            type={"goToMap"}
                            onTap={() => navigation.navigate("Map")}
                        />
                    </View>
                    <Text style={styles.title}>Latest News</Text>
                    <View style={styles.mainNewsContainer}>
                        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
                            <NewsCard source={require("../../assets/findHelp.png")} title={"Ukraine has fastest-growing refugee crisis since second world war, says UN"} />
                            <NewsCard source={require("../../assets/findHelp.png")} title={"Ukraine has fastest-growing refugee crisis since second world war, says UN"} />
                            <NewsCard source={require("../../assets/findHelp.png")} title={"Ukraine has fastest-growing refugee crisis since second world war, says UN"} />
                            <NewsCard source={require("../../assets/findHelp.png")} title={"Ukraine has fastest-growing refugee crisis since second world war, says UN"} />
                            <NewsCard source={require("../../assets/findHelp.png")} title={"Ukraine has fastest-growing refugee crisis since second world war, says UN"} />
                        </ScrollView>
                    </View>
                    <Text style={styles.title}>How can i help?</Text>
                </View>
            </View>
        </SafeAreaView >
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: style.white,
    },
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        paddingRight: 0,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 30,
    },
    headerText: {
        fontSize: 24,
        fontFamily: "medium",
    },
    shelterText: {
        fontFamily: "bold",
        color: style.primaryBlue,
    },
    body: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontFamily: "semibold",
    },
    mainCardContainer: {
        flexDirection: "row",
        justifyContent: "center",
        paddingRight: 20,
    },
    newsCard: {
        width: 150,
        height: 150,
        backgroundColor: style.primaryBlue,
        marginRight: 10,
        marginVertical: 15,
        borderRadius: 10,
        justifyContent: "center",
    },
    scrollContainer: {
        paddingVertical: 20,
    }
});
