import { AuthBrandHeader, AuthScreenTemplate, AuthWelcomeActions, Divider, LegalConsentText } from "@/components";
import { router } from "expo-router";

const Index = () => {
    const handleCreateAccount = () => { router.push('/(auth)/register') };
    const handleSignIn = () => { router.push('/(auth)/login') };
    const handleGoogle = () => { };
    const handleApple = () => { };
    const handleTC = () => {
        router.push('/(modals)/tc');
    };
    const handlePolicy = () => {
        router.push('/(modals)/policy');
    };

    return (
        <AuthScreenTemplate>
            <AuthBrandHeader />
            <Divider />
            <AuthWelcomeActions
                onCreateAccount={handleCreateAccount}
                onSignIn={handleSignIn}
                onGoogle={handleGoogle}
                onApple={handleApple}
            />
            <LegalConsentText onPressTerms={handleTC} onPressPrivacy={handlePolicy} action="continuing" />
        </AuthScreenTemplate>
    );
}

export default Index;