import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Setup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Setup Guide</Text>
        <Text style={styles.content}>
          Welcome to the Expense and Savings Tracker App! Follow these steps to register and set up your account:
          {"\n\n"}
          1. **First Time Login**: When you open the app for the first time, you will be prompted to enter your account name and upload a profile photo.
          {"\n\n"}
          2. **Enter Account Name**: On the setup screen, enter your desired account name in the provided field.
          {"\n\n"}
          3. **Upload Profile Photo**: Tap on the upload button to select and upload a profile photo from your device.
          {"\n\n"}
          4. **Save Personal Information**: After entering your account name and uploading a profile photo, press the save button to complete the setup. Your personal information will be stored and displayed on the settings page.
          {"\n\n"}
          5. **Change Account Information**: If you wish to update your account name or profile photo later, navigate to the settings screen. Here, you can directly change your account name or upload a new profile photo.
          {"\n\n"}
          6. **Saving Changes**: Any changes made on the settings screen will be saved and reflected across the app, ensuring your profile information is always up-to-date.
          {"\n\n"}
          By following these simple steps, you can easily set up and manage your account. Enjoy using the app!
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  scrollViewContent: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'left',
  },
});

export default Setup;