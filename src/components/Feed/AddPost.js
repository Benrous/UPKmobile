import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components';

class AddPostScreen extends Component {
    state ={
        title: '',
        textContent: ''
    }
    
    handleTitle = (text) => {
      this.setState({title: text})
    }
    handleText = (text) => {
        this.setState({textContent: text})
    }
    
    post = (title, textContent) => {
        alert('title: ' + title + 'Текст: ' + textContent )
    }

   TitlePost = (text) => {
      return(
         this.post
      );
   }
   
  
   
    
    render() {
        return (
            <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Заголовок"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleTitle}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Текст"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleText}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.post(this.state.title, this.state.textContent)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
         </View>
        );
      }
}



  const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#7a42f4',
       padding: 10,
       margin: 15,
       height: 40,
    },
    submitButtonText:{
       color: 'white'
    }
 })

const TextBlock = styled.View`
padding-right: 50px;
padding-left: 50px;
background-color: #fff;
border-radius: 5px;
`;

const TextsInput = styled.TextInput`

`;

export default AddPostScreen