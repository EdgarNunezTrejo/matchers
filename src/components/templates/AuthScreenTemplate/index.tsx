import { Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, View } from "react-native";

type AuthScreenTemplateProps = {
    children: React.ReactNode;
}

const AuthScreenTemplate: React.FC<AuthScreenTemplateProps> = ({ children }) => {
    const theme = useTheme();
    return (
        <View style={[style.container, { backgroundColor: theme.background.primary }]}>
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
