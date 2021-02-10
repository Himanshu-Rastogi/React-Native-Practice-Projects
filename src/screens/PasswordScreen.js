import React, {useState} from "react";
import {Text, StyleSheet, View, TextInput} from "react-native";
const PasswordScreen = () => {
    const [password, setPassword] = useState('');
    const [firstTouch, setfirstTouch] = useState(false);
    const updateText = (text) => {
          setPassword(text);
          setfirstTouch(true);
    };
    return(
        <View>
            <Text style = {styles.textStyle}>Enter Password : </Text>
            <TextInput 
            style = {styles.input} 
            autoCapitalize = "none" 
            autoCorrect = {false}
            value = {password}
            onChangeText = {(newvalue) => updateText(newvalue)}
            />
            {firstTouch && password.length < 8 ? <Text style = {styles.passwordText}>Password Should Greater than 8 characters</Text> : null} 
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
    passwordText:{
        color: 'red',
        marginLeft: 35,
        marginTop: -25,
    },
});
export default PasswordScreen;