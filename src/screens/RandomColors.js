import React, {useState} from "react";
import {Text, StyleSheet, View, Button} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const RandomColors = () => {
    const [colors, setColors] = useState([]);
    return(
        <View>
            <Button title = "Add a Color" onPress = {() => {
                setColors([...colors, rgbColor()]);
            }}/>
            <FlatList 
            keyExtractor = {(item) => item}
            data = {colors}
            renderItem = {({item}) =>{
                return(
                    <View style = {{height: 100, width: 100, backgroundColor: item }}/>
                );
            }}
            />
            </View>
    );
};

const rgbColor = () => {
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);

    return `rgb(${red},${green},${blue})`;
}; 

const styles = StyleSheet.create({});

export default RandomColors; 