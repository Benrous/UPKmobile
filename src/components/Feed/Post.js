import React from 'react';
import { StyleSheet, Text, View, Button, Image, SafeAreaView,ScrollView } from 'react-native';
import styled from 'styled-components';




const Post = ({items, }) => {
    return (
        <SafeAreaView style={{ marginTop:40 }}><ScrollView>
<PostBlock style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
          {items.map((item, index) =>(<PostItem key={index}>
            <PostContainer style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
            }} >
        
        <View style={{
        flexDirection: 'row',
        textAlign: 'left', 
        fontSize: 15,
        backgroundColor:'white'}}>
             
            <AvatarProfile 
            overlayContainerStyle={{flex: 0.4}} /*Some Layout fixes*/
            activeOpacity={0.7}
            imageProps={{resizeMode: 'cover'}} /*If you want your image to scale*/
            source= {{
                uri:
                item.user.avatar
            }}      
            />

            <Text 
                style={{ 
                alignSelf: "center", 
                fontSize: 17, 
                marginLeft: 10 }}>
                    {item.user.fullname}</Text>

            <Date>{item.user.date}</Date>        
            </View>
            <Title>{item.post.title}</Title>
            <ContentText>{item.post.contentText}</ContentText>
        
    </PostContainer>
          </PostItem>) )}
   
    </PostBlock>
    </ScrollView>
    </SafeAreaView>
    );
      
};
export default Post

Post.defaultProps = {

items: []
}

const PostBlock = styled.View``;

const PostItem = styled.View`
    width: 100%;
`;

const PostContainer = styled.View`
    background-color: #fff;
    border: 1px solid #eee;
    width: 90%;
    height: auto;
    margin: 10px;
    border-radius: 5px;
    min-height: 100px;
   
`;

const AvatarProfile = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin: 5px;
`;

const Title = styled.Text`
    font-size: 20px;
    margin-top: 10px;
    margin-left:10px;
    text-align: left; 
`;

const ContentText = styled.Text`
    margin-top: 10px;
    margin-left:12px;
    font-size: 17px;
    
`;

const Date = styled.Text`
    color: grey;
    text-align: left;
    align-self: flex-end;
}

`;


