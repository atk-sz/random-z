import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native';
import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../utils/theme';

type ScreenViewProps = {
  children: ReactNode;
};

const ScreenView: React.FC<ScreenViewProps> = ({ children }) => {
  const topPadding =
    Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0;
  const { width } = Dimensions.get('window');
  const horizontalPadding = width * 0.05;

  return (
    <SafeAreaView
      style={[
        styles.container,
        { paddingTop: topPadding, paddingHorizontal: horizontalPadding },
      ]}
    >
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.primary,
  },
});
export default ScreenView;
