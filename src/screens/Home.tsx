import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IRootStackParamList } from '../utils/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../utils/theme';
import { ScreenView } from '../components';

type IHomeScreenProps = {
  navigation: NativeStackNavigationProp<IRootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<IHomeScreenProps> = (): React.JSX.Element => {
  const onClick = () => {
    console.log('clicked');
  };

  return (
    <ScreenView>
      <View style={styles.container}>
        <Text style={styles.header}>Select difficulty</Text>
      </View>
      <View style={styles.btnsContainer}>
        <View style={styles.modeContainer}>
          <TouchableOpacity style={styles.btn} onPress={onClick}>
            <Text style={styles.btnText}>Easy</Text>
          </TouchableOpacity>
          <Text style={styles.helperTxt}>Shows history of guesses</Text>
        </View>
        <View style={styles.modeContainer}>
          <TouchableOpacity style={styles.btn} onPress={onClick}>
            <Text style={styles.btnText}>Hard</Text>
          </TouchableOpacity>
          <Text style={styles.helperTxt}>Doesn't show previous guesses</Text>
        </View>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 16,
    lineHeight: 28,
    textAlign: 'center',
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modeContainer: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor: theme.secondary,
    margin: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: theme.text,
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  helperTxt: {
    color: theme.lightGrey,
    textAlign: 'center',
    width: '70%',
    fontSize: 13,
  },
});

export default HomeScreen;
