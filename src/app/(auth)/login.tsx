import LockIcon from '@/assets/images/actionIcons/lock.svg';
import MailIcon from '@/assets/images/actionIcons/mail.svg';
import { AuthScreenTemplate, Button, CustomInput, Link, Modal, Text, Toast } from "@/components";
import { Spacing } from '@/constants/theme';
import useAuth from '@/hooks/use-auth';
import { useTheme } from '@/hooks/use-theme';
import { loginSchema, LoginValues } from '@/validators/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { Controller, useForm } from "react-hook-form";
import { ScrollView, StyleSheet, View } from "react-native";

const Login = () => {
    const { control, formState: { errors }, trigger, getValues } = useForm<LoginValues>(
        {
            resolver: zodResolver(loginSchema),
            mode: 'onBlur',
        }
    );
    const theme = useTheme();
    const { loadingLogIn, signIn } = useAuth();

    const handleLogin = async () => {
        const isValid = await trigger();
        const values = getValues();
        if (isValid) {
            signIn(values);
        }
    }

    const handleSignUp = () => {
        router.dismissTo("/(auth)/register");
    }

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

                    <Button onPress={handleLogin} loading={loadingLogIn}>
                        Log in
                    </Button>
                    <View style={style.haveAccount}>
                        <Text>
                            Don't have an account?
                        </Text>
                        <Link onPress={handleSignUp}>
                            Sign up
                        </Link>
                    </View>
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

export default Login;