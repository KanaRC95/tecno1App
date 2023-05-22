import React,{useState, useEffect} from "react";
import {Text, StyleSheet, View, FlatList, Image, Button} from 'react-native';
import axios from "axios";
import HTMLView from 'react-native-htmlview';



function fetchNews(newsId){
    const [data, setPosts] = useState([]);
      useEffect(() => {
          axios.get(`https://www.uci.edu.py/uciweb/public/api/noticia/${newsId}`)
            .then(response => {
              setPosts(response.data);
            })
            .catch(error => {
              console.error(error);
            });
        }, []);
    return data;
  }

  const News = (props) => {
    const newsId = props.navigation.getParam('noticia');
    const noti = fetchNews(newsId);
    
    /*
    return (
      <WebView
        style={styles.container}
        source={{ uri: `https://www.uci.edu.py/uciweb/public/api/noticia/${newsId}` }}
      />
    );*/

    return (
        <View>
            <FlatList
        data={noti}
        renderItem={({ item }) => {
            return (<View style={styles.container}>
                <Text style={styles.title}>{item.titulo}</Text>
                <Text>Autor: {item.autor}</Text>
                <Text style={styles.subtitle}>Fecha: {item.fecha}</Text>
                <Image 
                    style={styles.tinyLogo}
                    source={{ uri: item.imagen}}>                
                </Image>
                <HTMLView value={item.noticia} />
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
  export default News;