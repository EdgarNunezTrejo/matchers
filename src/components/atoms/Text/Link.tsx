import { Typography } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Text as RNText, StyleProp, TextStyle, TouchableOpacity } from "react-native";

type CustomTextProps = {
    children: React.ReactNode;
    variant?:
    "displayLg"
    | "headlineMd"
    | "headlineSm"
    | "bodyLg"
    | "bodyMd"
    | "labelMd"
    | "labelSm",
    color?: string;
    style?: StyleProp<TextStyle>;
    onPress: ()=>void
}

const Link: React.FC<CustomTextProps> = ({ children, variant = "bodyMd", style, color, onPress }) => {
    const theme = useTheme();
    return (
        <TouchableOpacity onPress={onPress}>
            <RNText style={[Typography[variant], { color: color ? color : theme.text.accent, textDecorationLine: 'underline' }, style]}>
                {children}
            </RNText>
        </TouchableOpacity>
    );
}

export default Link;