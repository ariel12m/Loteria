import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOTERÍA</Text>
      <TouchableOpacity style={styles.questionMark} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.questionMarkText}>?</Text>
      </TouchableOpacity>
      <Image style={styles.image} source={require('../../../assets/loteria.png')} />
      <Text style={styles.subText}>¡Participa y Gana!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Participar</Text>
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
  questionMark: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  questionMarkText: {
    fontSize: 28,
    color: '#000',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  subText: {
    fontSize: 18,
    color: '#000',
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
});

export default HomeScreen;
