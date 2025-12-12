import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IRootStackParamList } from '../utils/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenView } from '../components';

type IDevScreenProps = {
  navigation: NativeStackNavigationProp<IRootStackParamList, 'Dev'>;
};

const DevScreen: React.FC<IDevScreenProps> = ({}): React.JSX.Element => {
  const onClick = () => {
    console.log('clicked');
  };
  return (
    <ScreenView>
      <Text style={styles.text}>Dev Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={onClick}>
        <Text>Show Loading</Text>
      </TouchableOpacity>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  },
  btn: {
    backgroundColor: '#00ff00',
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default DevScreen;
