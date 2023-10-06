// src/screens/ConsultaPacientesAgendadosScreen.js

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AgendamentoItem from '../../agendamentoitem'; // Importe o componente AgendamentoItem
import agendamentos from '../data'; // Importe os dados fictícios

const ConsultaPacientesAgendadosScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 30}}>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <AgendamentoItem agendamento={item} />}
      />
      </View>
    </View>
  );
};

export default ConsultaPacientesAgendadosScreen;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    alignSelf: 'center',
  }
})