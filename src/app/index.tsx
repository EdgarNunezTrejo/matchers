import { useTheme } from '@/hooks/use-theme';
import { ActivityIndicator, View } from 'react-native';

const HomeScreen = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.background.primary, justifyContent: 'center', alignContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
}

export default HomeScreen;