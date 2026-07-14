import EyeHide from '@/assets/images/actionIcons/eye-hide.svg';
import EyeShow from '@/assets/images/actionIcons/eye-show.svg';
import { Text } from '@/components/atoms';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, TextInputProps, View } from "react-native";

type CustomInputProps = {
    leftIcon?: React.FC;
    isPassword?: boolean;
    error?: string;
    label?: string;
    info?: string;
    required?: boolean;
}

const CustomInput: React.FC<TextInputProps & CustomInputProps> = ({
    leftIcon: LeftIcon,
    isPassword = false,
    placeholder,
    error,
    label,
    info,
    inputMode,
    required,
    ...rest
}) => {
    const [showPassword, setShowPassword] = useState<boolean>();
    const theme = useTheme();
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const showPasswordIcon = () => {
        if (isPassword) {
            return (
                <Pressable onPress={handleShowPassword}>
                    {showPassword ?
                        <EyeHide width={20} height={20} color={theme.text.primary} />
                        :
                        <EyeShow width={20} height={20} color={theme.text.primary} />
                    }
                </Pressable>
            );
        }
        return null;
    }
    return (
        <View style={[style.container]}>
            <View style={style.label}>
                <Text variant='labelMd'>
                    {label?.toUpperCase()}
                </Text>
                {!required && <Text variant='labelSm'>
                    Optional
                </Text>}
            </View>
            <View style={[style.inputContainer, { backgroundColor: theme.background.secondary }]}>
                {LeftIcon && <LeftIcon />}
                <TextInput
                    inputMode={inputMode}
                    placeholder={placeholder}
                    style={[style.input, { color: theme.text.primary }]}
                    {...isPassword ? { secureTextEntry: !showPassword } : {}}
                    {...rest}
                />
                {showPasswordIcon()}
            </View>
            {error?.length && <Text variant='labelSm' style={[{ color: theme.status.error }]}>
                {error?.toUpperCase()}
            </Text>}
            {info && <Text variant='labelSm'>
                {info}
            </Text>}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        gap: Spacing.sm,
    },
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        gap: Spacing.sm,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.sm
    },
    input: {
        flex: 1,
    },
    label: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default CustomInput;