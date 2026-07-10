import { Typography } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { Text as RNText, StyleProp, TextStyle } from "react-native";

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
}

const Text: React.FC<CustomTextProps> = ({ children, variant = "bodyMd", style, color }) => {
    const theme = useTheme();
    return (
        <RNText style={[Typography[variant], { color: color ? color : theme.text.primary }, style]}>
            {children}
        </RNText>
    );
}

export default Text;