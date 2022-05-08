import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { SearchBar, FilterButtons, ItemCard } from "../components";
import { style } from "../resources/colors";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        author: "John Smith",
        phoneNumber: "0101010101",
        date: "3h ago",
        title: "Free lunch",
        category: "Food",
        description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: require("../../assets/Lunch.png"),
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        author: "John Smith",
        phoneNumber: "0101010101",
        date: "3h ago",
        title: "Free daycare for 3",
        category: "Childcare",
        description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: require("../../assets/findHelp.png"),
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        author: "John Smith",
        phoneNumber: "0101010101",
        date: "3h ago",
        title: "Third Item",
        category: "Childcare",
        description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: require("../../assets/goToMap.png"),
    },
    {
        id: "59694a0f-3da1-471f-bd96-145571e2943",
        author: "John Smith",
        phoneNumber: "0101010101",
        date: "3h ago",
        title: "Free stay indefinitely",
        category: "Stay",
        description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: require("../../assets/findHelp.png"),
    },
    {
        id: "59694a0f-3da1-471f-bd96-145571e14134",
        author: "John Smith",
        phoneNumber: "0101010101",
        date: "3h ago",
        title: "Medical services",
        category: "Medical",
        description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: require("../../assets/findHelp.png"),
    },
    {
        id: "59694421421141f-bd96-14557bbnur1e29d72",
        author: "John Smith",
        phoneNumber: "0101010101",
        date: "3h ago",
        title: "Homemade dinner",
        category: "Food",
        description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: require("../../assets/goToMap.png"),
    },
    {
        id: "59694a0f-3da1-471f-bd9ghjh6-145571e29dsa72",
        author: "John Smith",
        phoneNumber: "0101010101",
        date: "3h ago",
        title: "Seventh Item",
        category: "Stay",
        description: "Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: require("../../assets/goToMap.png"),
    },
];

const FeedScreen = ({ navigation }) => {

    const onCardPress = (item) => {
        navigation.navigate("DetailsScreen", { item })
    }

    const renderItem = ({ item }) => (
        <ItemCard
            onCardPress={() => onCardPress(item)}
            title={item.title}
            category={item.category}
            image={item.image}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <SearchBar onSubmit={(searchText) => console.log(searchText)} />
                <FilterButtons />
            </View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.listContainer}
                contentContainerStyle={styles.list}
                style={{ width: '100%', }}
            />
        </View>
    );
};

export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: style.white,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    header: {
        height: 150,
        width: "100%",
        zIndex: 2,
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 20,
        paddingBottom: 0,
        backgroundColor: style.white,
    },
    listContainer: {
        justifyContent: 'center',
    },
});
