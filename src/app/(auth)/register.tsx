import LockIcon from '@/assets/images/actionIcons/lock.svg';
import MailIcon from '@/assets/images/actionIcons/mail.svg';
import TicketIcon from '@/assets/images/actionIcons/ticket.svg';
import UserIcon from '@/assets/images/actionIcons/user.svg';
import { AuthScreenTemplate, Button, CheckboxField, CustomInput, LegalConsentText, Link, Modal, Text } from "@/components";
import { OrDivider, SocialSignInGroup, Toast } from '@/components/molecules';
import { Spacing } from '@/constants/theme';
import useAppleAuth from '@/hooks/use-apple-auth';
import useAuth from '@/hooks/use-auth';
import useGoogleAuth from '@/hooks/use-google-auth';
import { useTheme } from '@/hooks/use-theme';
import { registerSchema, RegisterValues } from '@/validators/registerSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, StyleSheet, View } from "react-native";

const Register = () => {
    const theme = useTheme();
    const { signUp, loadingRegister } = useAuth();
    const { signInWithGoogle, loadingGoogleAuth } = useGoogleAuth();
    const { signinWithApple, loadingAppleAuth } = useAppleAuth();
    const handleSocialLogin = async (platform: 'apple' | 'google') => {

        const isValid = await trigger('terms');

        if(!isValid) return;

        if (platform === 'apple') {
            signinWithApple();
        }
        if (platform === 'google') {
            signInWithGoogle();
        }
    }

    const {
        control,
        formState: {
            errors,
        },
        trigger,
        getValues,

    } = useForm<RegisterValues>(
        {
            resolver: zodResolver(registerSchema),
            mode: 'onBlur',
        }
    );
    const handleRegister = async () => {
        const isValid = await trigger();
        const values = getValues();
        if (isValid) {
            signUp(values);
        }
    }

    const handleSignIn = () => {
        router.dismissTo("/(auth)/login");
    }

    const handleTC = () => {
        router.push('/(modals)/tc');
    };
    const handlePolicy = () => {
        router.push('/(modals)/policy');
    };

    return (
        <Modal>
            <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="handled">
                <AuthScreenTemplate>
                    <View>
                        <Text variant="displayLg">Join Matchers</Text>
                        <Text variant="bodyMd">
                            Create an account to start managing your league and tracking player performance with professional tools.
                        </Text>
                    </View>
                    <Controller
                        control={control}
                        name="name"
                        render={({ field: { value, onChange, onBlur } }) =>
                            <CustomInput
                                leftIcon={() => <UserIcon color={theme.text.primary} width={24} height={24} />}
                                placeholder='Joan'
                                label="NAME"
                                inputMode="text"
                                autoCapitalize="none"
                                error={errors.name?.message}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                required
                            />
                        }
                    />
                    <Controller
                        control={control}
                        name="lastName"
                        render={({ field: { value, onChange, onBlur } }) =>
                            <CustomInput
                                leftIcon={() => <UserIcon color={theme.text.primary} width={24} height={24} />}
                                placeholder='Doe'
                                label="LAST NAME"
                                inputMode="text"
                                autoCapitalize="none"
                                error={errors.lastName?.message}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                required
                            />
                        }
                    />
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { value, onChange, onBlur } }) =>
                            <CustomInput
                                leftIcon={() => <MailIcon color={theme.text.primary} width={24} height={24} />}
                                placeholder='emal@example.com'
                                label="EMAIL ADDRESS"
                                inputMode="email"
                                autoCapitalize="none"
                                error={errors.email?.message}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                required
                            />
                        }
                    />

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { value, onChange, onBlur } }) =>
                            <CustomInput
                                leftIcon={() => <LockIcon color={theme.text.primary} width={24} height={24} />}
                                placeholder='********'
                                label="PASSWORD"
                                info="Min 8 chars, uppercase, number, special char"
                                autoCapitalize="none"
                                error={errors.password?.message}
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                isPassword
                                required
                            />
                        }
                    />

                    <Controller
                        control={control}
                        name="match"
                        render={({ field: { value, onChange, onBlur } }) =>
                            <CustomInput
                                leftIcon={() => <TicketIcon color={theme.text.primary} width={24} height={24} />}
                                placeholder='MATCH-2024'
                                label="INVITE CODE"
                                value={value}
                                onChangeText={onChange}
                                onBlur={onBlur}
                            />
                        }
                    />

                    <Controller
                        control={control}
                        name="terms"
                        render={({ field: { onChange, value } }) =>
                            <CheckboxField
                                label="I accept Terms of Service"
                                value={!!value}
                                onChange={onChange}
                                error={errors.terms?.message}
                            />
                        }
                    />

                    <Button onPress={handleRegister} loading={loadingRegister}>
                        Register
                    </Button>
                    <OrDivider />
                    <SocialSignInGroup onApple={() => handleSocialLogin('apple')} loadingAppleAuth={loadingAppleAuth} onGoogle={() => handleSocialLogin('google')} loadingGoogleAuth={loadingGoogleAuth} />
                    <View style={style.haveAccount}>
                        <Text>
                            Already have an account?
                        </Text>
                        <Link onPress={handleSignIn}>
                            Sign in
                        </Link>
                    </View>
                    <LegalConsentText action='registering' onPressPrivacy={handlePolicy} onPressTerms={handleTC} />
                </AuthScreenTemplate>
            </ScrollView>
            <Toast />
        </Modal>
    );
}

const style = StyleSheet.create({
    haveAccount: {
        flexDirection: 'row',
        gap: Spacing.base,
    },
});

export default Register;