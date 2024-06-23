import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AnimatedBeginScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleStartPress = async () => {
    try {
      const accountName = await AsyncStorage.getItem('accountName');
      if (accountName) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'AccountName' }],
        });
      }
    } catch (error) {
      console.error('Failed to check account name in storage', error);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo.jpg')}
        style={[styles.logo, { opacity: fadeAnim }]}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Start to Manage Your Money"
          onPress={handleStartPress}
          color="#6495ed"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20,
    width: '80%',
  },
});

export default AnimatedBeginScreen;