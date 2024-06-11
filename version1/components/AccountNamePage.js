import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, StyleSheet} from 'react-native';

const AccountNamePage=({navigation})=>{
  const [accountName, setAccountName]=useState('');

  const handleFinish=()=>{
    navigation.replace('Main', {screen: 'Home'});
  };
  return (
    <View style={styles.container}>
    <Text style={styles.title}> Enter your account name </Text>
    <TextInput
    style={styles.input}
    placeholder="Account Name"
    value={accountName}
    onChangeText={setAccountName}
    />
    <Pressable style={styles.button} onPress={handleFinish}>
    <Text style={styles.buttonText}> Finish </Text>
    </Pressable>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    backgroundColor:'#fff',
  },
  title:{
    fontSize:24,
    marginBottom:20,
  },
  input:{
    width:'100%',
    height:40,
    borderColor:'gray',
    borderwidth:1,
    paddingHorizontal:10,
    marginBottom:20,
    borderRadius:5,
  },
  button:{
    position:'absolute',
    bottom:20,
    left:20,
    backgroundColor:'#007BFF',
    paddingVertical:15,
    paddingHorizontal:30,
    borderRadius:5,
  },
  buttonText:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
  },
});

export default AccountNamePage;