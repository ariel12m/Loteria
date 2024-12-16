import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Game'>;

const GameScreen = ({ navigation }: { navigation: GameScreenNavigationProp }) => {
  const [selectedNumber, setSelectedNumber] = useState<string>('');
  const [input, setInput] = useState('');
  const secretNumber = '1234'; // Número Ganador

  const handleSubmit = () => {
    if (input.length === 4) {
      setSelectedNumber(input);
      const winningNumber = secretNumber; 
      const isWinner = input === winningNumber;
      navigation.navigate('Result', { isWinner, selectedNumber: input, winningNumber });
      setInput('');
    } else {
      Alert.alert('Por favor, ingresa un número de 4 dígitos.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Piensa en el Número Ganador</Text>
      <Image style={styles.image} source={require('../../../assets/pensar.png')} />
      <Text style={styles.subText}>Ingresa un número de 4 dígitos</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={input}
        onChangeText={setInput}
        placeholder="Número"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Probar Suerte</Text>
      </TouchableOpacity>
      {selectedNumber && <Text style={styles.subText}>Número seleccionado: {selectedNumber}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3DAB48',
    marginTop: 50,
  },
  subText: {
    fontSize: 18,
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: 100,
    marginTop: 20,
    textAlign: 'center',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#4C9EEB',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default GameScreen;
