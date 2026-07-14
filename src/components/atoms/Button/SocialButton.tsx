import AppleIcon from '@/assets/images/buttonIcons/apple.svg';
import GoogleIcon from '@/assets/images/buttonIcons/google.svg';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ActivityIndicator, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Text } from '../Text';

type ButtonProps = {
    variant?: "google" | "apple";
    onPress: () => void;
    loading?: boolean;
}

const SocialButton: React.FC<ButtonProps> = ({ variant = "google", onPress, loading }) => {
    const theme = useTheme();
    const Icon = variant === "google" ? GoogleIcon
        : AppleIcon;
    const text = { "google": "Google", "apple": "Apple" };
    const scheme = useColorScheme();
    return (
        <TouchableOpacity onPress={onPress} style={[style.button, { backgroundColor: theme.background.primary, borderColor: theme.border.default, borderWidth: 1 }]}>
            <Icon width={20} height={20} color={scheme === "light" ? "#000000" : "#ffffff"} />
            <Text variant='bodyLg' color={theme.text.primary}>{text[variant]}</Text>
            {loading && <ActivityIndicator />}
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: Spacing.sm,
        borderRadius: Spacing.base,
        padding: Spacing.md,
        width: '100%',
        alignItems: 'center'
    }
});

export default SocialButton;