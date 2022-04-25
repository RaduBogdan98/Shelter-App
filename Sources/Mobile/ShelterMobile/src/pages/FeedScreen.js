import * as React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import { SearchBar, FilterButtons, ItemCard } from "../components";
import { style } from "../resources/colors";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "First Item sdadsa",
        category: "food",
        image: require("../../assets/goToMap.png"),
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Second Item",
        category: "childcare",
        image: require("../../assets/goToMap.png"),
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Third Item",
        category: "childcare",
        image: require("../../assets/goToMap.png"),
    },
    {
        id: "59694a0f-3da1-471f-bd96-145571e2943",
        title: "Fourth Item",
        category: "stay",
        image: require("../../assets/goToMap.png"),
    },
    {
        id: "59694a0f-3da1-471f-bd96-145571e14134",
        title: "Fifth Item",
        category: "medical",
        image: require("../../assets/goToMap.png"),
    },
    {
        id: "59694421421141f-bd96-14557bbnur1e29d72",
        title: "Sixth Item",
        category: "food",
        image: require("../../assets/goToMap.png"),
    },
    {
        id: "59694a0f-3da1-471f-bd9ghjh6-145571e29dsa72",
        title: "Seventh Item",
        category: "stay",
        image: require("../../assets/goToMap.png"),
    },
];

const FeedScreen = () => {

    const renderItem = ({ item }) => (
        <ItemCard
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
        backgroundColor: "#fff",
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
    item: {
        height: 215,
        width: "45%",
        backgroundColor: '#f9c2ff',
        margin: 10,
    },
    title: {
        fontSize: 32,
    },
    listContainer: {
        // flex: 1,
        // width: "100%",
        // paddingHorizontal: 10,
        // backgroundColor: 'green',
        // justifyContent: 'center',
    },
    list: {
        // flex: 1,
        // width: "100%",
    }
});
