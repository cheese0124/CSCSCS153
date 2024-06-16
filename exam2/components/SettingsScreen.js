import React from 'react';
import { Text, View, TextInput } from 'react-native';
import {useValue} from './ValueContext';

function SettingsScreen() {
    const {currentValue,setCurrentValue} = useValue();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
        <TextInput 
            placeholder="Enter username"
            onChangeText={(text) => {
                setCurrentValue({...currentValue, username: text});
            }}
        />
        <TextInput
            placeholder="Enter password"
            onChangeText={(text) => {
                setCurrentValue({...currentValue, password: text});
            }}
            />
        <Text>usename:{currentValue['username']}</Text>
        <Text>Password: {currentValue['password']}</Text>
      </View>
    );
  }

export default SettingsScreen;