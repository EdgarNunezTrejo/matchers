import AppleIcon from '@/assets/images/buttonIcons/apple.svg';
import GoogleIcon from '@/assets/images/buttonIcons/google.svg';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { Text } from '../Text';

type ButtonProps = {
    variant?: "google" | "apple";
    onPress: () => void;
}

const SocialButton: React.FC<ButtonProps> = ({ variant = "google", onPress }) => {
    const theme = useTheme();
    const Icon = variant === "google" ? GoogleIcon
        : AppleIcon;
    const text = { "google": "Google", "apple": "Apple" };
    const scheme = useColorScheme();
    return (
        <TouchableOpacity onPress={onPress} style={[style.button, { backgroundColor: theme.background.primary, borderColor: theme.border.default, borderWidth: 1 }]}>
            <Icon width={20} height={20} color={scheme === "light" ? "#000000" : "#ffffff"} />
            <Text variant='bodyLg' color={theme.text.primary}>{text[variant]}</Text>
        </TouchableOpacity>
    );
}

const style = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: Spacing.base,
        padding: Spacing.md,
        alignItems: 'center',
        gap: Spacing.sm
    }
});

export default SocialButton;