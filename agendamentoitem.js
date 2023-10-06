// src/components/AgendamentoItem.js

import React from 'react';
import { View, Text } from 'react-native';

const AgendamentoItem = ({ agendamento }) => {
  return (
    <View>
      <Text>Nome: {agendamento.paciente.nome}</Text>
      <Text>CPF: {agendamento.paciente.cpf}</Text>
      <Text>Data de Nascimento: {agendamento.paciente.dataNascimento}</Text>
      <Text>Endereço: {agendamento.paciente.endereco}</Text>
      <Text>Data da Consulta: {agendamento.dataConsulta}</Text>
      <Text>Valor Cobrado: R$ {agendamento.valorCobrado.toFixed(2)}</Text>
    </View>
  );
};

export default AgendamentoItem;
