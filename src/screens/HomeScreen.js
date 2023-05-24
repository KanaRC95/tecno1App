import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import homepic from '../bocchi.gif'
// https://www.uci.edu.py/uciweb/public/api/noticia/380
// https://www.uci.edu.py/uciweb/public/api/lista/0

const pic = Image.resolveAssetSource(homepic).uri
const HomeScreen = ({navigation}) => {
  return <View>
    <TouchableOpacity onPress={() => navigation.navigate('Noticias',{
      page: 0,
    })}>
      <Image 
      style={styles.tinyLogo}
      source={{uri: pic}}>
      </Image>

    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  tinyLogo: { 
    justifyContent: 'center',
    alignItems: 'center',
    width: 440,
    height: 498,
  },
});

export default HomeScreen;
