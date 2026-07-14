import { Button } from "@/components";
import useAuth from "@/hooks/use-auth";
import { useTheme } from "@/hooks/use-theme";
import { View } from "react-native";

const Index = () => {
    const theme = useTheme();
    const { signOut } = useAuth();
    

    return (
        <View style={{ flex: 1, backgroundColor: theme.background.primary }}>
            <Button onPress={signOut}>
                Logout
            </Button>
        </View>
    );
}

export default Index;