import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// https://www.uci.edu.py/uciweb/public/api/noticia/380
// https://www.uci.edu.py/uciweb/public/api/lista/0


const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>Hola</Text>
    <Button 
    onPress={() => navigation.navigate('Noticias')}
    title="TAP"
    />
    <TouchableOpacity onPress={() => console.log('NAH')}>
      <Text>GOTO</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
