import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IRootStackParamList } from '../utils/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { theme } from '../utils/theme';
import { ScreenView } from '../components';

type IHomeScreenProps = {
  navigation: NativeStackNavigationProp<IRootStackParamList, 'Home'>;
};

const HomeScreen: React.FC<IHomeScreenProps> = ({
  navigation,
}): React.JSX.Element => {
  const gotoEasy = () => {
    navigation.navigate('Easy');
  };

  const gotoHard = () => {
    navigation.navigate('Hard');
  };

  const gotoFind = () => {
    navigation.navigate('Find');
  };

  return (
    <ScreenView>
      <View style={styles.homeContainer}>
        <View style={styles.gameContainer}>
          <View style={styles.gameHeaderContainer}>
            <Text style={styles.headerTxt}>Guess Z</Text>
            <Text style={styles.titleTxt}>
              Select the difficulty of the game
            </Text>
          </View>
          <View style={styles.btnsContainer}>
            <View style={styles.modeContainer}>
              <TouchableOpacity style={styles.btn} onPress={gotoEasy}>
                <Text style={styles.btnText}>Easy</Text>
              </TouchableOpacity>
              <Text style={styles.helperTxt}>Shows history of guesses</Text>
            </View>
            <View style={styles.modeContainer}>
              <TouchableOpacity style={styles.btn} onPress={gotoHard}>
                <Text style={styles.btnText}>Hard</Text>
              </TouchableOpacity>
              <Text style={styles.helperTxt}>
                Doesn't show previous guesses
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.calcContainer}>
          <View style={styles.calcHeaderContainer}>
            <Text style={styles.headerTxt}>Find Z</Text>
            <Text style={styles.titleTxt}>Find the value of Z</Text>
            <TouchableOpacity style={styles.btnZ} onPress={gotoFind}>
              <Text style={styles.btnZText}>Enter relative values</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  gameContainer: {
    height: '50%',
  },
  calcContainer: {
    height: '50%',
  },
  gameHeaderContainer: {
    backgroundColor: theme.primary,
    padding: 16,
    paddingBottom: 0,
  },
  headerTxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: theme.text,
    marginBottom: 16,
    lineHeight: 28,
    textAlign: 'center',
  },
  titleTxt: {
    color: theme.text,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontStyle: 'italic',
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
  calcHeaderContainer: {
    alignItems: 'center',
  },
  btnZ: {
    backgroundColor: theme.secondary,
    margin: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnZText: {
    color: theme.text,
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default HomeScreen;
