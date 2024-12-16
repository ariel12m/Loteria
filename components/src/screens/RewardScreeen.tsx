import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RewardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Tu Recompensa!</Text>
      <Image
        style={styles.image}
        source={require('../../../assets/xbox.png')}
      />
      <Text style={styles.subText}>
        Aquí está tu premio por ganar. ¡Gracias por jugar!
      </Text>
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
    color: '#FFD700',
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default RewardScreen;
