import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { IRootStackParamList } from '../utils/interfaces';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenView } from '../components';
import { theme } from '../utils/theme';

type IFindScreenProps = {
  navigation: NativeStackNavigationProp<IRootStackParamList, 'Find'>;
};

const FindScreen: React.FC<IFindScreenProps> = (): React.JSX.Element => {
  return (
    <ScreenView>
      <View style={styles.FindContainer}>
        <Text style={styles.text}>Find Screen</Text>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  FindContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.text,
  },
});

export default FindScreen;
