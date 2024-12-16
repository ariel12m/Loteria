import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del premio</Text>
      <Text style={styles.subText}>Gana un...</Text>
      <Image style={styles.image} source={require('../../../assets/xbox.png')} />
      <Text style={styles.subText}>Gana este fabuloso Xbox 720 de Sony, Edición Deluxe.</Text>
      <Text style={styles.subText}>Inluyendo dos videojuegos: Half life 3 y Super Mario 128</Text>
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
  image: {
    width: 260,
    height: 260,
    marginVertical: 100,
  },
  subText: {
    fontSize: 18,
    color: '#000',
  },
});

export default DetailsScreen;
