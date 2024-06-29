import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native'; // Use this to navigate
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon

// Assuming you have a way to securely store and retrieve your API key, for example using an environment variable or secure storage
const API_KEY = 'your_openai_api_key_here';

const SavingsSuggestionsPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { goal, date, amount } = route.params; // Get goal, date, and amount from route parameters
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [prompt, setPrompt] = useState(`Give me some savings suggestions to achieve the goal of ${goal} by ${date} with a target amount of $${amount}.`);

  const getResponse = async () => {
    try {
      const url = 'https://api.openai.com/v1/chat/completions';
      const config = {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + API_KEY,
        },
      };

      const msg_data = {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      };

      const response = await axios.post(url, msg_data, config);
      const result = await response.data;
      setLoading(false);
      setData(result.choices);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { getResponse() }, [prompt]);

  const ChatResponse = ({ role, content }) => (
    <View style={styles.responseContainer}>
      <Text style={styles.responseText}>{content}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <Text style={styles.title}>Savings Suggestions</Text>
      <Text style={styles.label}>Goal: {goal}</Text>
      <Text style={styles.label}>When needed: {date}</Text>
      <Text style={styles.label}>Amount: ${amount}</Text>
      <Button
        onPress={() => { setLoading(true); setData([]); getResponse(); }}
        title={loading ? 'Loading...' : 'Get Suggestions'}
        color="#841584"
      />
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ChatResponse {...item.message} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  responseContainer: {
    backgroundColor: 'lightblue',
    margin: 10,
    padding: 20,
  },
  responseText: {
    backgroundColor: 'white',
    padding: 10,
  },
});

export default SavingsSuggestionsPage;