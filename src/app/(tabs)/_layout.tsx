import { useTheme } from "@/hooks/use-theme";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => {
    const theme = useTheme();

    return (
        <SafeAreaView edges={["bottom", "top"]} style={{flex: 1, backgroundColor: theme.background.primary}}>
            <Stack>
                <Stack.Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaView>
    );
};

export default TabsLayout;
