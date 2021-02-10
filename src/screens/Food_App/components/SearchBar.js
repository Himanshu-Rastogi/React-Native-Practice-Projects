import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
 
const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <EvilIcons style = {styles.iconStyle} name="search" color="black" />
            <TextInput style = {styles.inputStyle}
            placeholder = "Search"
            autoCapitalize = 'none'
            autoCorrect = {false}
            value = {term}
            onChangeText = {(newTerm) => onTermChange(newTerm)}   // this line & below this are two 
            onEndEditing = {onTermSubmit}                         // different ways to call a func 
            />
        </View>
    );
};
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgrey',
        margin: 15,
        height: 40,
        borderRadius: 5,
        flexDirection: 'row'
        
    },
    inputStyle:{
        flex: 1,
        fontSize: 18,
        marginLeft: 10
    },
    iconStyle:{
        fontSize: 40,
        alignSelf: 'center',
        marginLeft:5
    }
});
export default SearchBar;