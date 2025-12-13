import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IRootStackParamList } from '../utils/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenView } from '../components';
import { theme } from '../utils/theme';

type IHardScreenProps = {
  navigation: NativeStackNavigationProp<IRootStackParamList, 'Hard'>;
};

const HardScreen: React.FC<IHardScreenProps> = (): React.JSX.Element => {
  return (
    <ScreenView>
      <View style={styles.HardContainer}>
        <Text style={styles.text}>Hard Screen</Text>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  HardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.text,
  },
});

export default HardScreen;
