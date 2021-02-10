import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const ButtonsScreen = ({ navigation }) => {
    return(
        <View>
            <Button 
            title = "Go to HomeScreen"
            onPress = {() => navigation.navigate('Home') } />
            <Button 
            title = "Go to ListScreen"
            onPress = {() => navigation.navigate('List') } />
            <Button 
            title = "Go to CounterScreen"
            onPress = {() => navigation.navigate('Counter') } />
            <Button 
            title = "Go to RandomColorsScreen"
            onPress = {() => navigation.navigate('Random') } />
            <Button 
            title = "Go to TextScreen "
            onPress = {() => navigation.navigate('Text') } />
             <Button 
            title = "Go to PasswordScreen "
            onPress = {() => navigation.navigate('Password') } />
            <Button 
            title = "Restaurant Search App"
            onPress = {() => navigation.navigate('Search') } />
            
        </View>
    );
};

const styles = StyleSheet.create({
});

export default ButtonsScreen;