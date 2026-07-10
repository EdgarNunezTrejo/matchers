import { Button } from "@/components/atoms";
import { OrDivider, SocialSignInGroup } from "@/components/molecules";
import { Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

type AuthWelcomeActionsProps = {
    onCreateAccount: () => void;
    onSignIn: () => void;
    onGoogle: () => void;
    onApple: () => void;
}

const AuthWelcomeActions: React.FC<AuthWelcomeActionsProps> = ({ onCreateAccount, onSignIn, onGoogle, onApple }) => {
    return (
        <View style={style.container}>
            <View style={style.buttons}>
                <Button onPress={onCreateAccount}>
                    Create Account
                </Button>
                <Button variant="outline" onPress={onSignIn}>
                    Sign in
                </Button>
            </View>
            <OrDivider />
            <SocialSignInGroup onGoogle={onGoogle} onApple={onApple} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        gap: Spacing.md
    },
    buttons: {
        gap: Spacing.xs,
        width: '100%'
    },
});

export default AuthWelcomeActions;
