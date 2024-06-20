import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const BeginScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity value of 0
  const navigation = useNavigation(); // Use navigation hook

  useEffect(() => {
    // Start the fade-in animation
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000, // Duration of the fade-in effect
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleStartPress = () => {
    navigation.navigate('AccountName'); // Navigate to HomeTabs (Home screen)
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('../assets/logo.jpg')} // Path to your image
        style={[styles.logo, { opacity: fadeAnim }]} // Apply animated opacity
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Start to Manage Your Money"
          onPress={handleStartPress}
          color="#6495ed" // Customize the button color
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
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 50, // Space between the image and button
    width: '80%', // Adjust the width to fit your design
  },
});

export default BeginScreen;