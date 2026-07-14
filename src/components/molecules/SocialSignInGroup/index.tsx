import { SocialButton } from "@/components/atoms";
import { Spacing } from "@/constants/theme";
// import * as AppleAuthentication from 'expo-apple-authentication';
import { StyleSheet, View } from "react-native";

type SocialSignInGroupProps = {
    onGoogle: () => void;
    onApple: () => void;
    loadingGoogleAuth: boolean;
    loadingAppleAuth: boolean;
}

const SocialSignInGroup: React.FC<SocialSignInGroupProps> = ({ onGoogle, onApple, loadingGoogleAuth, loadingAppleAuth }) => {
    return (
        <View style={style.container}>
            {/* {Platform.OS === "ios" && (
                <AppleAuthentication.AppleAuthenticationButton
                    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
                    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
                    cornerRadius={5}
                    style={{ height: 58 }}
                    onPress={onApple}
                />
            )} */}
            <SocialButton variant="google" onPress={onGoogle} loading={loadingGoogleAuth} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        gap: Spacing.sm
    },
});

export default SocialSignInGroup;
