import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AgendamentoScreen from './screens/AgendamentoScreen';
import ConsultasAgendadaScreen from './screens/ConsultaPacientesAgendadosScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        
        <Tab.Screen name="Agendamento" component={AgendamentoScreen}          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="calendar" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Consultas Agendadas"
          component={ConsultasAgendadaScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="calendar-check" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
