import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput} from "react-native";
const TextScreen = () => {
    const [name, setName] = useState('');
    return(
        <View>
            <Text style = {styles.textStyle}>Enter Name : </Text>
            <TextInput 
            style = {styles.input} 
            autoCapitalize = "none" 
            autoCorrect = {false}
            value = {name}
            onChangeText = {(newvalue) => setName(newvalue)}
            />
            <Text style = {styles.textStyle}>Your Name is : {name}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    input:{
        margin: 30,
        marginTop: 0,
        height: 35,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5,
    },
    textStyle:{
        marginLeft: 30,
        marginTop: 30,
        fontSize: 20,
    },
});
export default TextScreen;