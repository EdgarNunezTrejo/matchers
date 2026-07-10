import { SocialButton } from "@/components/atoms";
import { Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

type SocialSignInGroupProps = {
    onGoogle: () => void;
    onApple: () => void;
}

const SocialSignInGroup: React.FC<SocialSignInGroupProps> = ({ onGoogle, onApple }) => {
    return (
        <View style={style.container}>
            <SocialButton variant="google" onPress={onGoogle} />
            <SocialButton variant="apple" onPress={onApple} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        gap: Spacing.sm
    },
});

export default SocialSignInGroup;
