import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet,Pressable } from 'react-native';

const BeginScreen =({navigation})=>{
  const handlePress=()=>{
    navigation.navigate('AccountName');
  };
  return (
    <View style={styles.container}>
    <Text style={styles.emoji}> 💰 </Text>
    <Pressable style={styles.button} onPress={handlePress}>
    <Text style={styles.buttonText}> Start to manage your money </Text>
    </Pressable>
    </View>
  );
};

const styles=StyleSheet.create({
  container:{
    flex:1 ,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
  },
  emoji:{
    fontSize:200,
    marginBottom:70,
  },
  button:{
    backgroundColor:'#deb887',
    paddingVertical:15,
    paddingHorizontal:30,
    borderRadius:10,
  },
  buttonText:{
    color:'#fff',
    fontsize:20,
    fontWeight:'bold',
  }
});
export default BeginScreen;
      
