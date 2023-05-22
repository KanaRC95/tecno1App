import React from "react";
import {Text, StyleSheet, View} from 'react-native';

const ComponentScreen = function() {
    const nombre = "Brian";
    return <View>
        <Text style={styles.textStyle}>Pruebas</Text>
        <Text>{nombre}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        color: 'blue',
        fontSize: 30, 
    },
});

export default ComponentScreen;