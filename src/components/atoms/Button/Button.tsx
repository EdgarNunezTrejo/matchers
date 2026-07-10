import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from '../Text';

type ButtonProps = {
    variant?: "primary" | "onPrimary" | "secondary" | "outline";
    leftIcon?: React.FC;
    children: React.ReactNode | string;
    onPress: () => void;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ loading, variant = "primary", leftIcon: LeftIcon, children, onPress }) => {
    const theme = useTheme();
    return (
        <TouchableOpacity onPress={onPress} style={[style.button, ...(variant !== "outline" ? [{ backgroundColor: theme.button[variant] }] : [{ backgroundColor: theme.background.primary, borderWidth: 1, borderColor: theme.border.focus }])]}>
            {LeftIcon && <LeftIcon />}
            {typeof children === 'string' ?
                <Text variant='bodyLg'>{children}</Text> : children
            }
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

export default Button;