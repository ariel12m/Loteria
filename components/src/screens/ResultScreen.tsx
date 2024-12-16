import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const ResultScreen = ({ route, navigation }: { route: any, navigation: any }) => {
  const { selectedNumber } = route.params;

  // Número ganador predefinido
  const winningNumber = '1234';

  const isWinner = selectedNumber === winningNumber;

  const handleNavigation = () => {
    if (isWinner) {
      navigation.navigate('Victory'); 
    } else {
      navigation.navigate('Home'); 
    }
  };

  const randomWinningNumber = isWinner ? winningNumber : (Math.floor(Math.random() * 9000) + 1000).toString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isWinner ? '¡Felicidades!' : 'Lo Sentimos'}</Text>

      {isWinner ? (
        // Vista para el caso de victoria
        <View style={styles.winnerContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/happy.png')} // Imagen para la victoria
          />
          <Text style={styles.subText}>
            ¡Ganaste! El número ganador era: <Text style={styles.winningNumber}>{randomWinningNumber}</Text>.
          </Text>
        </View>
      ) : (
        // Vista para el caso de pérdida
        <View style={styles.loserContainer}>
          <Image
            style={styles.image}
            source={require('../../../assets/sad.png')} // Imagen para la pérdida
          />
          <Text style={styles.subText}>
            Perdiste. El número ganador era: <Text style={styles.winningNumber}>{randomWinningNumber}</Text>.
          </Text>
        </View>
      )}

      <Text style={styles.subText}>
        Tu número era: <Text style={styles.selectedNumber}>{selectedNumber}</Text>.
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.buttonText}>
          {isWinner ? 'Ir al Premio' : 'Volver al Inicio'}
        </Text>
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
  winningNumber: {
    color: 'green',
    fontWeight: 'bold',
  },
  selectedNumber: {
    color: 'red',
    fontWeight: 'bold',
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
  winnerContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  loserContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default ResultScreen;
