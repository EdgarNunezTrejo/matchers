import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type AuthScreenTemplateProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>
}

const AuthScreenTemplate: React.FC<AuthScreenTemplateProps> = ({ children, style: StyleProps }) => {
    const theme = useTheme();
    return (
        <View style={[style.container, { backgroundColor: theme.background.primary }, StyleProps]}>
            {children}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: Spacing.md,
        gap: Spacing.md
    },
});

export default AuthScreenTemplate;
