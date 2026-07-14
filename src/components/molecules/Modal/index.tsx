import CloseIcon from '@/assets/images/actionIcons/close.svg';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ModalSheetProps {
  children: React.ReactNode;
}

const ModalSheet = ({ children }: ModalSheetProps) => {
  const theme = useTheme();
  const router = useRouter();
  const onPress = ()=>{
    router.back();
  }
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background.primary }]}>
      <View style={styles.header}>
        <Pressable onPress={onPress}>
          <CloseIcon width={16} height={16} color={theme.text.primary} />
        </Pressable>
      </View>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: Spacing.lg
  },
});

export default ModalSheet;
