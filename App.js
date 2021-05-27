
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons';

import FeedScreen from '/webstorm_project/Android_Projects/UPKmobile/src/components/Feed/FeedScreen'
import ProfileScreen from '/webstorm_project/Android_Projects/UPKmobile/src/components/Profile/ProfileScreen'
import AddPostScreen from '/webstorm_project/Android_Projects/UPKmobile/src/components/Feed/AddPost'
import TimeTableScreen from '/webstorm_project/Android_Projects/UPKmobile/src/components/Profile/NavList/comp/TimeTableScreen'


const Tab = createBottomTabNavigator();

const FeedStack = createStackNavigator();

function FeedStackScreen() {
    return (
    <FeedStack.Navigator >
        <FeedStack.Screen name='Feed' component={FeedScreen}  options={{ headerTintColor:"#F08700",
        headerStyle: {
            backgroundColor: '#EFCA08'
        }
    }}/>
        <FeedStack.Screen name='AddPost' component={AddPostScreen} />
    </FeedStack.Navigator>
    );

}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
    return(
        <ProfileStack.Navigator initialRouteName="Profile" >
            <ProfileStack.Screen name='Profile' component={ProfileScreen} 
            options={{ headerTintColor:"#F08700",
            headerStyle: {
                backgroundColor: '#EFCA08'
            }
        }}
            />
            <ProfileStack.Screen name='TimeTable' component={TimeTableScreen}  
            options={{ headerTintColor:"#F08700",
            headerStyle: {
                backgroundColor: '#EFCA08'
            }
        }} />
        </ProfileStack.Navigator>
    )
}


export default class App extends React.Component {
    
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator 
                 screenOptions={({ route }) => ({
            
                         
                    tabBarIcon: ({ focused, color, size }) => {
                      if (route.name === 'Feed') {
                        return (
                          <Ionicons
                            name={
                              focused
                                ? 'md-paper'
                                : 'md-paper'
                            }
                            size={size}
                            color={color}
                          />
                        );
                      } else if (route.name === 'Profile') {
                        return (
                          <Ionicons
                            name={focused ? 'md-contact' : 'md-contact'}
                            size={size}
                            color={color}
                          />
                        );
                      }
                    },
                  })}
                  tabBarOptions={{
                    
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                    tabStyle: {
                        backgroundColor:"#F9DD4D"
                    },
    
                    
                  }}
                >
                    <Tab.Screen name="Feed" component={FeedStackScreen}  />
                    <Tab.Screen name="Profile" component={ProfileStackScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
   
}




