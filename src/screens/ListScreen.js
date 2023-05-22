import React from "react";
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = function() {
    const datos = [
        {name: 'Brian'},
        {name: 'Jose'},
        {name: 'Martin'},
        {name: 'Carlos'}
    ]
    return (
    <FlatList 
        data={datos}
        renderItem={({ item }) => {
            return <Text>{item.name}</Text>
        }}
    
    ></FlatList>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'blue',
        fontSize: 30, 
    },
});

export default ListScreen;