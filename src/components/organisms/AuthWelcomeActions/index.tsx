import { Button } from "@/components/atoms";
import { Spacing } from "@/constants/theme";
import { StyleSheet, View } from "react-native";

type AuthWelcomeActionsProps = {
    onCreateAccount: () => void;
    onSignIn: () => void;
}

const AuthWelcomeActions: React.FC<AuthWelcomeActionsProps> = ({ onCreateAccount, onSignIn }) => {
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
