import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IRootStackParamList } from '../utils/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenView } from '../components';
import { theme } from '../utils/theme';

type ILevelsScreenProps = {
  navigation: NativeStackNavigationProp<IRootStackParamList, 'Levels'>;
};

const LevelsScreen: React.FC<ILevelsScreenProps> = (): React.JSX.Element => {
  return (
    <ScreenView>
      <View style={styles.LevelsContainer}>
        <Text style={styles.text}>Levels Screen</Text>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  LevelsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.text,
  },
});

export default LevelsScreen;
