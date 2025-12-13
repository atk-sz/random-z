import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IRootStackParamList } from '../utils/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenView } from '../components';
import { theme } from '../utils/theme';

type IEasyScreenProps = {
  navigation: NativeStackNavigationProp<IRootStackParamList, 'Easy'>;
};

const EasyScreen: React.FC<IEasyScreenProps> = (): React.JSX.Element => {
  return (
    <ScreenView>
      <View style={styles.EasyContainer}>
        <Text style={styles.text}>Easy Screen</Text>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  EasyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.text,
  },
});

export default EasyScreen;
