import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { CircleCheck, CircleRemove, EllipsesIcon } from "../../assets/icons";
import { style } from "../resources/colors";
import { showToast } from '../resources/utils/toastHelpers';

const ProfileCard = (props) => {

    const getBackgroundColor = (category) => {
        switch (category) {
            case "Stay":
                return style.baseGray25;
            case "Childcare":
                return style.blue25;
            case "Food":
                return style.orange25;
            case "Medical":
                return style.green25;
        }
    };

    const styles = StyleSheet.create({
        profileCard: {
            backgroundColor: getBackgroundColor(props.category),
            flexDirection: "row",
            width: '100%',
            borderRadius: 16,
            justifyContent: 'center',
            padding: 5,
            paddingHorizontal: 10,
            marginVertical: 10,
        },
        imageStyle: {
            height: 80,
            width: 95,
            resizeMode: 'contain',
            borderRadius: 16,
        },
        infoArrange: {
            flex: 1,
            alignSelf: 'center',
            justifyContent: 'center',
            paddingHorizontal: 10,
        },
        title: {
            fontSize: 18,
            fontFamily: 'semibold',
        },
        date: {
            fontSize: 12,
            color: style.darkGray,
            fontFamily: 'regular',
        }
    });

    return (
        <View style={styles.profileCard}>
            <Image source={props.image} style={styles.imageStyle} />
            <View style={styles.infoArrange}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                <Text >by {props.author}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                {props.isConfirmed ?
                    <>
                        <TouchableOpacity onPress={() => showToast("success", "Confirm this service")}>
                            <CircleCheck />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => showToast("success", "Remove this service")}>
                            <CircleRemove />
                        </TouchableOpacity>
                    </>
                    :
                    <TouchableOpacity onPress={() => showToast("success", "Settings opening")}>
                        <EllipsesIcon />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default ProfileCard;