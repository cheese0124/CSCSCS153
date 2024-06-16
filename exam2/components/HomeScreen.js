import React from 'react';
import { Text, View } from 'react-native';
import {useValue} from './ValueContext';

function HomeScreen() {
    const {currentValue} = useValue();

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome!</Text>
        <Text>{currentValue['username']}</Text>
        <Text>Your current password is: {currentValue['password']}</Text>
        <Text>{currentValue['admin']}</Text>
      </View>
    );
  }

export default HomeScreen;
