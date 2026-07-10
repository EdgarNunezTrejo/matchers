import { useHttp } from "@/hooks/use-http";
import { useAuthStore } from "@/stores/auth.store";
import { AuthResponseType } from "@/types/auth";
import { LoginValues } from "@/validators/loginSchema";
import { RegisterValues } from "@/validators/registerSchema";
import { useState } from "react";
import { Platform } from "react-native";
import Toast from "react-native-toast-message";


const useAuth = () => {
    const http = useHttp();
    const [loadingRegister, setLoadingRegister] = useState<boolean>(false);
    const [loadingLogIn, setLoadingLogIn] = useState<boolean>(false);
    const { setToken, clearToken } = useAuthStore();

    const signIn = async ({ email, password }: LoginValues) => {
        setLoadingLogIn(true);
        try {
            const { token } = await http.post<AuthResponseType>({
                path: "Auth/login", body: {
                    Email: email,
                    Password: password,
                }
            });
            setToken(token);
        } catch (error) {
            if (error instanceof Error) {
                Toast.show({
                    text1: "Error",
                    text2: error.message,
                    type: 'error',
                });
            }
        }
        setLoadingLogIn(false);
    }
    const signUp = async ({ email: Email, password: Password, match: InviteCode, terms: AcceptsTermsAndConditions }: RegisterValues) => {
        setLoadingRegister(true);
        const body = {
            Email,
            Password,
            InviteCode,
            AcceptsTermsAndConditions,
            Platform: Platform.OS.toLowerCase(),
        };
        try {
            const { token } = await http.post<AuthResponseType>({ path: "Auth/register", body });
            setToken(token);
        } catch (error) {
            if (error instanceof Error) {
                Toast.show({
                    text1: "Error",
                    text2: error.message,
                    type: 'error',
                });
            }
        }
        setLoadingRegister(false);
    }
    const signOut = async () => { 
        clearToken();
    }
    const socialAuth = async () => { }

    return {
        signIn,
        signUp,
        signOut,
        socialAuth,
        loadingRegister,
        loadingLogIn,
    }
}

export default useAuth;