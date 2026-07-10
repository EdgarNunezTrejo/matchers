import { Text } from "@/components/atoms";
import { useTheme } from "@/hooks/use-theme";
import { Image } from 'expo-image';
import { StyleSheet } from "react-native";

const WIDTH = 100;
const HEIGHT = 100;

const AuthBrandHeader: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Image style={style.icon} source={require("@/assets/images/icon.png")} />
            <Text color={theme.text.accent} variant="displayLg">
                Matchers
            </Text>
            <Text variant="bodyLg">
                Master the league
            </Text>
            <Text variant="bodyMd" style={style.description}>
                The professional standard for managing high-performance sports leagues and elite athletes.
            </Text>
        </>
    );
}

const style = StyleSheet.create({
    icon: {
        width: WIDTH,
        height: HEIGHT,
        borderRadius: 23
    },
    description: {
        textAlign: 'center'
    }
});

export default AuthBrandHeader;
