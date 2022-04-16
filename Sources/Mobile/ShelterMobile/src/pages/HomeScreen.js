import React, { useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import AccountAvatarIcon from "../../assets/icons/account_avatar.js";
import { style } from "../resources/colors";
import MainCards from "../components/MainCard";

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
                    <View style={styles.mainCardsContainer}>
                        <MainCards
                            type={"findHelp"}
                            onTap={() => navigation.navigate("Feed")}
                        />
                        <MainCards
                            type={"goToMap"}
                            onTap={() => navigation.navigate("Map")}
                        />
                    </View>
                    <Text style={styles.title}>Latest News</Text>
                    <View style={styles.mainNewsContainer}>
                        <ScrollView horizontal>
                            <View style={styles.newsCard} />
                            <View style={styles.newsCard} />
                            <View style={styles.newsCard} />
                            <View style={styles.newsCard} />
                            <View style={styles.newsCard} />
                            <View style={styles.newsCard} />
                            <View style={styles.newsCard} />
                            <View style={styles.newsCard} />
                        </ScrollView>
                    </View>
                </View>
            </View>
        </SafeAreaView>
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
        // backgroundColor: 'red'
    },
    title: {
        fontSize: 24,
        fontFamily: "semibold",
    },
    mainCardsContainer: {
        flexDirection: "row",
        justifyContent: "center",
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
});
