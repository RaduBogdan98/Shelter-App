import { StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";

import { SearchIcon } from "../../assets/icons";
import { style } from "../resources/colors";
import { strings } from "../resources/strings";

const SearchBar = (props) => {

    const [searchText, setSearchText] = useState("");

    const onChangeText = (searchText) => {
        setSearchText(searchText);
    }

    return (
        <View style={styles.container}>
            <SearchIcon />
            <TextInput
                style={styles.input}
                value={searchText}
                placeholder={strings.search}
                placeholderTextColor={style.black}
                onChangeText={(searchText) => onChangeText(searchText)}
                onSubmitEditing={() => props.onSubmit && props.onSubmit(searchText)}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        paddingLeft: 16,
        backgroundColor: style.baseGray25,
    },
    input: {
        flex: 1,
        width: '100%',
        padding: 10,
        fontSize: 18,
        color: style.black,
        fontFamily: "regular",
    },
    icon: {
        padding: 8
    }
});
