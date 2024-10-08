import React,{useState, useEffect} from "react";
import {Text, StyleSheet, View, FlatList, Image, Button, TouchableOpacity} from 'react-native';
import axios from "axios";

function fetchNewsList(page){
    const [data, setPosts] = useState([]);
      useEffect(() => {
          axios.get(`https://www.uci.edu.py/uciweb/public/api/lista/${page}`)
            .then(response => {
              setPosts(response.data);
            })
            .catch(error => {
              console.error(error);
            });
        }, []);
    return data;
  }


const NewsList = function({route, navigation}) {
    const pagina = Number(navigation.getParam('page'));
    const datos = fetchNewsList(pagina);
    
    
    //<Text>{item.id}</Text>
      return (
    <View>
     <View style={{padding: 8, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button 
            title='Home' 
            onPress={() => {
              navigation.navigate('Home');
            }}
            color='green'
            />
              
        <Button
            title='Siguiente' 
            onPress={() => {
              navigation.push('Noticias',{page: pagina+1});
            }} /> 
        </View> 
    <FlatList
        data={datos}
        renderItem={({ item }) => {
            return (<View style={styles.container}>
                <Text style={styles.title}>{item.titulo}</Text>
                <Text>Autor: {item.autor}</Text>
                <Text style={styles.subtitle}>Fecha: {item.fecha}</Text>
                <Image 
                    style={styles.tinyLogo}
                    source={{ uri: item.imagen}}>                
                </Image>
                <Button 
                  onPress={() => navigation.navigate('Noticia', {
                    noticia: item.id,
                  })}
                  title="Ver Mas"
                />
            </View>);
        }}
    
    ></FlatList>
    
    </View>  
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',      
    },
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
    subtitle: {
        flex: 1,
        fontSize: 15,
        fontWeight: "italic",
        alignItems: 'flex-start',
      },
    tinyLogo: {
        width: 400,
        height: 400,
      },
  });

export default NewsList;