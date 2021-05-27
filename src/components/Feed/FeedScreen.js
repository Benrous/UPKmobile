import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SectionList, FlatList, StatusBar, Image, ActivityIndicator}  from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
  
function FeedScreen({navigation}){

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      fetch('http://rustycorp.ru/database.json')
        .then((response) => response.json())
        .then((json) => setData(json.users))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

    const Item = ({ title, contentText,userName,userFullname,image,userImage, }) => (
        <View style={styles.item}  >
          <View style={styles.avatarBlock}>
          <Image 
          style={styles.avatarImage}
          source={{
          uri: `${userImage}`,
        }} />
        <Text style={styles.userFullname}>{userName} {userFullname}</Text>
          </View>
          
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.contentText}>{contentText}</Text>

          <View style={styles.imageBlock}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: `${image}`,
        }}
      />
             </View>
        </View>
      );
      
     
        const renderItem = ({ item }) => (
        
            <Item 
            title={item.title} 
            contentText={item.contentText}
            userName={item.userName}
            userFullname={item.userFullname}
            image={item.image}
            userImage={item.userImage}
            />
        );
          
           
        

    return (
        <View style={styles.background}>
          {isLoading ? <ActivityIndicator/> : (
             <FlatList
             data={data}
             renderItem={renderItem}
             keyExtractor={item => item.id}  
            />  
          )}
         
        </View>
        
    );
}
export default FeedScreen


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    background: {
      backgroundColor: '#F08700'
    },
    item: {
      borderRadius: 5,
      backgroundColor: '#EFCA08',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      marginVertical: 6,
      fontSize: 17,
    },
    contentText: {
      fontSize: 15,
    },
    userFullname: {
      fontSize: 17,
      marginTop: 10,
      marginLeft: 5,
    },
    tinyLogo: {
      width: "100%",
      height: "100%",
    },
    imageBlock: {
      paddingTop: 20,
      width: "100%",
      height: 300,
    
    },
    avatarBlock:{
      flexDirection:'row',
      width: "100%",
    },
    avatarImage: {
      width: 60,
      height: 60,
      borderRadius: 50,
    },
    userImage: {
      width:50,
      height: 50
    }
  });