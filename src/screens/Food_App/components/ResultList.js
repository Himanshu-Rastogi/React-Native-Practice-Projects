import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ResultList = ({ title, results }) => {
    return(
        <View>
            <Text style = {styles.titleStyle}>{title}</Text>
            <Text>Results: {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    }
});

export default ResultList;