import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ChatGPTPage = ({ navigation }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = async () => {
    // Here you should connect to ChatGPT API and get the response
    // For demonstration purposes, we'll just mock the response
    setResponse(`Your input: ${input}\nResponse from ChatGPT: Here's a suggestion...`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your trouble with saving?</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe your issue..."
        value={input}
        onChangeText={setInput}
      />
      <Button title="Ask ChatGPT" onPress={handleChat} />
      {response ? (
        <View style={styles.responseContainer}>
          <Text style={styles.response}>{response}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    borderRadius: 5,
    width: '100%',
  },
  responseContainer: {
    marginTop: 20,
  },
  response: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ChatGPTPage;