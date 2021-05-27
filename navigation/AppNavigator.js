import {React} from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from '/webstorm_project/Android_Projects/UPKmobile/src/components/Feed/Feed'
import ProfileScreen from '/webstorm_project/Android_Projects/UPKmobile/src/components/Profile/Profile'
import AddPostScreen from '/webstorm_project/Android_Projects/UPKmobile/src/components/Feed/AddPost'


const Tab = createBottomTabNavigator();

function AppNavigator(){
    
    
    return(
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}

export default AppNavigator