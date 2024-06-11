import React from 'react';
import BeginScreen from './components/BeginScreen';
import AboutScreen from './components/AboutScreen';
import HomeScreen from './components/HomeScreen';
import SettingScreen from './components/SettingScreen';
import AccountNamePage from './components/AccountNamePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons} from '@expo/vector-icons';

const Stack=createStackNavigator();
const Tab =createBottomTabNavigator();

function HomeTabs(){
  return (
    <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={({route})=>({
      tabBarIcon:({color, size})=>{
        let iconName;
        if (route.name==='Home'){
          iconName='home';
        } else if(route.name==='About'){
          iconName='information-circle';
        } else if(route.name==='Settings'){
          iconName='settings';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor:'gray',
    }}
    >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="About" component={AboutScreen} />
    <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
}


function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Start">
    <Stack.Screen name="Start" 
    component={BeginScreen}
    options={{headerShown:false}} 
    />

    <Stack.Screen
    name="AccountName"
    component={AccountNamePage}
    options={{headerShown: false}}
    />
    
    <Stack.Screen 
    name="Main" 
    component={HomeTabs}
    options={{headerShown: false}} 
    />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

