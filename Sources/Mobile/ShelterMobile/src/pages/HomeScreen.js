import React, { useEffect } from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { AccountAvatarIcon, RightArrowIcon } from "../../assets/icons";
import { MainCard, NewsCard } from "../components";
import { showToast } from "../resources/utils";
import { style } from "../resources/colors";
import { strings } from "../resources/strings";

const HomeScreen = ({ navigation }) => {
    const userDetails = useSelector(state => state.users.user)
    const dispatch = useDispatch();

    const handleBecomeProviderPress = () => navigation.navigate("BecomeProviderScreen");

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AccountAvatarIcon />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={styles.headerText}>{strings.hello_user}, {userDetails.name}!</Text>
                    <Text style={styles.headerText}>
                        {strings.welcome_to}<Text style={styles.shelterText}>{strings.shelter}</Text>
                    </Text>
                </View>
            </View>

            <View>

                <Text style={styles.title}>{strings.i_need_help}</Text>
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

                <Text style={styles.title}>{strings.latest_news}</Text>
                <View>
                    <ScrollView horizontal contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
                        <NewsCard source={require("../../assets/findHelp.png")} title={"Ukraine has fastest-growing refugee crisis since second world war, says UN"} />
                        <NewsCard source={require("../../assets/findHelp.png")} title={"Full of fear and foreboding, meet the refugees who have fled Ukraine for Poland"} />
                        <NewsCard source={require("../../assets/findHelp.png")} title={"Flight from Kyiv: 'I need to believe I'll come back'"} />
                        <NewsCard source={require("../../assets/findHelp.png")} title={"Ukraine has fastest-growing refugee crisis since second world war, says UN"} />
                        <NewsCard source={require("../../assets/findHelp.png")} title={"Ukraine has fastest-growing refugee crisis since second world war, says UN"} />
                    </ScrollView>
                </View>

                <Text style={styles.title}>{strings.how_can_i_help}</Text>
                <View style={styles.helpContainer}>


                    <TouchableOpacity style={styles.helpRow} onPress={handleBecomeProviderPress}>
                        <View style={styles.helpRow}>
                            <Image style={styles.helpImage} source={require("../../assets/homeScreenAssets/providerImage.png")} />
                            <Text style={styles.helpText}>{strings.become_a_provider}</Text>
                        </View>
                        <RightArrowIcon />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.helpRow}>
                        <View style={styles.helpRow}>
                            <Image style={styles.helpImage} source={require("../../assets/homeScreenAssets/redcrossImage.png")} />
                            <Text style={styles.helpText}>{strings.donate_to_redcross}</Text>
                        </View>
                        <RightArrowIcon />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.helpRow} onPress={() => showToast("success", "This is a temporary placeholder")}>
                        <View style={styles.helpRow}>
                            <Image style={styles.helpImage} source={require("../../assets/homeScreenAssets/volunteerImage.png")} />
                            <Text style={styles.helpText}>{strings.apply_to_be_a_volunteer}</Text>
                        </View>
                        <RightArrowIcon />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        paddingTop: 30,
        paddingRight: 0,
        backgroundColor: style.white,
        justifyContent: 'space-evenly'
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
    },
    helpRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 2,
        paddingRight: 7
    },
    helpContainer: {
        marginTop: 10,
        paddingRight: 6,
    },
    helpText: {
        fontSize: 18,
        fontFamily: "regular",
        paddingLeft: 5,
    },
    buttonPressZone: {
        padding: 14
    }
});
