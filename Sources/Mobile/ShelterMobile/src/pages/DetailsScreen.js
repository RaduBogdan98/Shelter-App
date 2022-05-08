import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking,
    Alert,
} from "react-native";
import React, { useState, useCallback } from "react";

import StatusTag from "../components/StatusTag";
import { Button } from "../components";
import { BackIcon, EllipsesIcon } from "../../assets/icons";
import { style } from "../resources/colors";
import { strings } from "../resources/strings";

const DetailsScreen = ({ navigation, route }) => {
    const [details, setDetails] = useState(route.params.item);
    const url = "tel:" + details.phoneNumber;

    const onBackPress = () => navigation.goBack();
    const onOptionsPress = () => {
        console.log("Options pressed!");
    };

    const onButtonPress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={[styles.icon, styles.iconLeft]}
                    onPress={onBackPress}
                >
                    <BackIcon />
                </TouchableOpacity>
                <TouchableOpacity>
                    <EllipsesIcon
                        style={[styles.icon, styles.iconRight]}
                        onPress={onOptionsPress}
                    />
                </TouchableOpacity>
            </View>
            <Image
                source={details.image}
                style={styles.imageStyle}
                resizeMode="cover"
            />
            <View style={styles.title}>
                <Text style={styles.titleText} numberOfLines={2}>
                    {details.title}
                </Text>
                <StatusTag category={details.category} />
            </View>
            <View style={styles.textcontainer}>
                <Text>{details.date}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.sectionText}>{strings.description}</Text>
                <Text style={styles.subsectionText}>{details.description}</Text>
            </View>
            <View style={styles.textcontainer}>
                <Text style={styles.sectionText}>{strings.posted}</Text>
                <Text style={styles.subsectionText}>{details.author}</Text>
            </View>
            <View style={styles.buttoncontainer}>
                <Button text={strings.i_need_this} onPress={onButtonPress} />
            </View>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 30,
        backgroundColor: style.white,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        height: 60,
        alignItems: "center",
    },
    icon: {
        padding: 12,
    },
    iconLeft: {
        paddingLeft: 0,
    },
    iconRight: {
        paddingRight: 0,
    },
    imageStyle: {
        width: "100%",
        height: 250,
        borderRadius: 20,
    },
    title: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 20,
    },
    titleText: {
        fontSize: 28,
        fontFamily: "medium",
        width: "75%",
    },
    textcontainer: {
        width: "100%",
    },
    description: {
        width: "100%",
        paddingTop: 20,
    },
    sectionText: {
        fontSize: 16,
    },
    subsectionText: {
        textAlign: "justify",
        marginVertical: 10,
    },
    buttoncontainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 30,
    },
});
