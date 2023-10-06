
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import agendamentos from '../data';

const AgendamentoScreen = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [data, setData] = useState('');

  const agendarConsulta = () => {
    const paciente = {
      nome,
      cpf,
      dataNascimento,
      endereco,
      data
    };

    agendamentos.push({
      id: agendamentos.length + 1,
      paciente,
      dataConsulta: 'Data da consulta', 
      valorCobrado: 0, 
    });


    setNome('');
    setCpf('');
    setDataNascimento('');
    setEndereco('');
    setData('');

    console.log('Dados do paciente:', paciente);
    console.log('Agendamentos atualizados:', agendamentos);
  };

  return (
    <View style={styles.container}>
      <Text style={{padding:20, fontSize: 25}}>Coloque suas informações para o agendamento:</Text>
      <View style={styles.inputs}>
      <Text style={{marginBottom: 10}}>Nome:</Text>
      <TextInput
        style={{borderWidth: 2, marginBottom: 15, borderColor: 'black'}}
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
      <Text style={{marginBottom: 10}}>CPF:</Text>
      <TextInput
       style={{borderWidth: 2, marginBottom: 15, borderColor: 'black'}}
        onChangeText={(text) => setCpf(text)}
        value={cpf}
      />
      <Text style={{marginBottom: 10}}>Data de Nascimento:</Text>
      <TextInput
       style={{borderWidth: 2, marginBottom: 15, borderColor: 'black'}}
        onChangeText={(text) => setDataNascimento(text)}
        value={dataNascimento}
      />
      <Text style={{marginBottom: 10}}>Endereço:</Text>
      <TextInput
        style={{borderWidth: 2, marginBottom: 15, borderColor: 'black'}}
        onChangeText={(text) => setEndereco(text)}
        value={endereco}
      />
      </View>
      <TouchableOpacity style={{ alignContent: 'center',
       alignItems: 'center',
       backgroundColor: '#34eb9e',
       padding: 10, fontFamily: 'arial'}} onPress={agendarConsulta} >Confirmar Agendamento</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignSelf: 'center',
  },
  inputs: {
    padding: 30,
  }
})

export default AgendamentoScreen;
