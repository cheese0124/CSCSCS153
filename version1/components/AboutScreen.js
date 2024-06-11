import React from 'react';
import { Text, View } from 'react-native';

function AboutScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>This app can help you to check your expenses randomly and help you 
            to better manage your money! 
        </Text>
      </View>
    );
  }

export default AboutScreen;
