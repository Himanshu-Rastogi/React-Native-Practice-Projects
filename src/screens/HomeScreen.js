import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  const name = 'himanshu';
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Text style={styles.subHeader}>my name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  subHeader: {
    fontSize: 20
  }
});

export default HomeScreen;
