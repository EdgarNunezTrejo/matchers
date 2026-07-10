import { Text } from "@/components/atoms";
import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Checkbox } from 'expo-checkbox';
import { Pressable, StyleSheet, View } from "react-native";

type CheckboxFieldProps = {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
    error?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ label, value, onChange, error }) => {
    const theme = useTheme();
    const toggle = () => onChange(!value);

    return (
        <View style={style.container}>
            <View style={style.row}>
                <Checkbox
                    onValueChange={onChange}
                    value={value}
                    style={style.checkbox}
                />
                <Pressable onPress={toggle}>
                    <Text variant="labelMd">
                        {label}
                    </Text>
                </Pressable>
            </View>
            {
                error ?
                    <Text variant="labelSm" color={theme.status.error}>{error}</Text>
                    :
                    null
            }
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        gap: Spacing.sm
    },
    row: {
        gap: Spacing.sm,
        flexDirection: 'row',
        alignItems: 'center'
    },
    checkbox: {
        width: 26,
        height: 26
    },
});

export default CheckboxField;
