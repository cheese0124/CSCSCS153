import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Pressable, Alert ,Text} from 'react-native';
import { AccountContext } from './AccountContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const AccountNamePage = ({ navigation }) => {
  const [inputName, setInputName] = useState('');
  const [photoUri, setPhotoUri] = useState(null);
  const { setAccountName } = useContext(AccountContext);

  useEffect(() => {
    // Load saved profile photo
    const loadProfilePhoto = async () => {
      const storedPhotoUri = await AsyncStorage.getItem('profilePhoto');
      if (storedPhotoUri) {
        setPhotoUri(storedPhotoUri);
      }
    };

    loadProfilePhoto();
  }, []);

  const handleSave = async () => {
    if (inputName) {
      await AsyncStorage.setItem('accountName', inputName);
      setAccountName(inputName);
      if (photoUri) {
        await AsyncStorage.setItem('profilePhoto', photoUri);
      }
      navigation.navigate('Main');
    } else {
      Alert.alert("Please enter your account name.");
    }
  };

  const pickImage = async () => {
    // Request permission to access the photo library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'You need to grant camera roll permissions to upload photos.');
      return;
    }

    // Launch the image library to pick an image
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setPhotoUri(result.assets[0].uri); // Set the URI of the selected image
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your account name"
        value={inputName}
        onChangeText={setInputName}
      />
      <Pressable onPress={pickImage}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.profileImage} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text>Tap to select a profile photo</Text>
          </View>
        )}
      </Pressable>
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default AccountNamePage;