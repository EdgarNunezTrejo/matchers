import { Text } from "@/components";
import { useTheme } from "@/hooks/use-theme";
import { View } from "react-native";

const Index = () => {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
            <Text>Welcome to Expo!</Text>
        </View>
    );
}

export default Index;