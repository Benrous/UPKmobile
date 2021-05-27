import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar, View, Text, Button, Image, FlatList} from 'react-native';
import styled from 'styled-components';


function ProfileScreen({ navigation }) {

    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('http://rustycorp.ru/userbase.json')
        .then((response) => response.json())
        .then((json) => setData(json.user))
        .catch((error) => console.error(error))
        
        // .finally(() => setLoading(false));
    }, []);

   
    const Item = ({image, numberGroup, teacher, teacherName, name}) => (
        <View style={styles.container}>
            <View style={styles.inContainer}>
                <View>
                    <Image
                        style={styles.userImage}
                        source={{
                            uri: 
                            `${image}`
                        }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Texts >{name}</Texts>
                    <Texts >{numberGroup} </Texts>
                    <Textm >{teacher}</Textm>
                    <Texts>{teacherName}</Texts>
                </View>
            </View>   
        </View>
    )

    const renderItem = ({item}) => (
        <Item 
        name={item.name}
        numberGroup={item.numberGroup}
        teacher={item.teacher}
        teacherName={item.teacherName}
        image={item.image}
        />
    )

    const  NavList = () =>  {

        return (
         <View style={{ flex: 1,}}>
                <Button 
                    color="orange"
                    onPress={() => navigation.navigate('TimeTable')} title="Рассписание" />
         </View>
   );
  
 };

    return (
        <View style={styles.background}>
            <FlatList
            
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}  
            />
          <NavList />
        </View>
        
        
    )
}



export default ProfileScreen


const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex:1,
        marginTop: StatusBar.currentHeight || 0,
    },
    background: {
        backgroundColor: "#f08700",
        height:'100%',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    },
    inContainer: {
        padding: 13,
        borderRadius: 5,
        backgroundColor: "#EFCA08",
        flexDirection: 'row',
        margin: 5,
    },
    userImage: {
        width: 150,
        height: 150,
        borderRadius: 5,
    },
    textContainer:{
        margin: 5,
        flexWrap:'wrap', 
    },
})

const Texts = styled.Text`
    font-size: 16px;
    flex-wrap:wrap;
`;
const Textm = styled.Text`
    font-size: 15px;
    flex-wrap:wrap;
`;