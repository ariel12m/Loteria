import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const VictoryScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Victoria!</Text>
      <Text style={styles.subText}>¡Felicidades, has ganado!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reward')}>
        <Text style={styles.buttonText}>Reclamar</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#FFD700', 
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
});

export default VictoryScreen;
