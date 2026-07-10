import Toast from "@/components/molecules/Toast";
import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = () => {
    const theme = useTheme();
    return (
        <SafeAreaView edges={["bottom", "top"]} style={{ flex: 1, backgroundColor: theme.background.primary }}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
                <Stack.Screen name="login" options={{ headerShown: false, presentation: 'modal', animation: 'slide_from_bottom' }} />
                <Stack.Screen name="register" options={{ headerShown: false, presentation: 'modal', animation: 'slide_from_bottom' }} />
            </Stack>
            <Toast />
        </SafeAreaView>
    );
}

export default AuthLayout;