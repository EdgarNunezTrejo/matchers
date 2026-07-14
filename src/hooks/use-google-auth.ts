import { IOS_GOOGLE_CLIENT_ID, WEB_CLIENT_ID } from '@/constants/config';
import { useAuthStore } from '@/stores/auth.store';
import { AuthResponseType } from '@/types/auth';
import { GoogleSignin, isErrorWithCode, statusCodes } from '@react-native-google-signin/google-signin';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import { useHttp } from './use-http';

const useGoogleAuth = () => {
    const [loadingGoogleAuth, setLoadingGoogleAuth] = useState<boolean>(false);
    const http = useHttp();
    const { setToken } = useAuthStore();

    useEffect(() => {
        GoogleSignin.configure({
            iosClientId: IOS_GOOGLE_CLIENT_ID,
            webClientId: WEB_CLIENT_ID,
            offlineAccess: true,
        });
    }, [])

    const signInWithGoogle = async () => {
        setLoadingGoogleAuth(true);
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            const idToken = userInfo.data?.idToken;
            if (!idToken) {
                Toast.show({ text1: "Error!", text2: "No ID Token received from Google", type: 'error' })
                setLoadingGoogleAuth(false);
                return;
            }
            const response = await http.post<AuthResponseType>({
                path: 'Auth/google',
                body: {
                    IdToken: idToken,
                    Platform: Platform.OS.toLocaleLowerCase()
                }
            });

            setToken(response.token);

        } catch (error) {
            console.log({error})
            if (isErrorWithCode(error)) {
                let errorMessage: string = '';
                switch (error.code) {
                    case statusCodes.SIGN_IN_CANCELLED:
                        errorMessage = 'Sign in cancelled';
                    case statusCodes.IN_PROGRESS:
                        errorMessage = 'Sign in already in progress';
                    case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                        errorMessage = 'Play Services not available';
                    default:
                        errorMessage = 'Google Sign In failed';
                }
                Toast.show({ text1: "Error!", text2: errorMessage, type: 'error' })
                setLoadingGoogleAuth(false);
                return;
            }
            if (error instanceof Error) {
                Toast.show({ text1: "Error!", text2: error.message, type: 'error' })
                setLoadingGoogleAuth(false);
                return;
            }
            Toast.show({ text1: "Error!", text2: "Unknown error", type: 'error' })
        }
        setLoadingGoogleAuth(false);
    }

    const signOutFromGoogle = async () => {
        try {
            await GoogleSignin.signOut();
        } catch {

        }
    };

    return { loadingGoogleAuth, signInWithGoogle, signOutFromGoogle };
}

export default useGoogleAuth;