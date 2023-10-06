// HomeScreen.js
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={{padding: 50, marginBottom: 20, fontSize: 30, alignSelf: 'center',}}>Home</Text>
      <TouchableOpacity style={{   alignContent: 'center',
       alignItems: 'center',
       backgroundColor: '#34eb9e',
       padding: 10, fontFamily: 'arial'}}
        onPress={() => navigation.navigate('Agendamento')}
      >Agendar Consulta</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignSelf: 'center'
  }
})

export default HomeScreen;


