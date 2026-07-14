import { useAuthStore } from "@/stores/auth.store";
import { useState } from "react";
import { useHttp } from "./use-http";
const useAppleAuth = () => {
    const [loadingAppleAuth, setLoadingAppleAuth] = useState<boolean>(false);
    const http = useHttp();
    const { setToken } = useAuthStore();

    const signinWithApple = async () => {
        // setLoadingAppleAuth(true);
        // try {
        //     const credential = await AppleAutentication.signInAsync({
        //         requestedScopes: [
        //             AppleAutentication.AppleAuthenticationScope.FULL_NAME,
        //             AppleAutentication.AppleAuthenticationScope.EMAIL,
        //         ]
        //     });
        //     const idToken = credential.identityToken;
        //     if (!idToken) {
        //         Toast.show({ text1: 'Error!', text2: 'No ID Token received from Apple', type: 'error' });
        //         return;
        //     }

        //     const response = await http.post<AuthResponseType>({
        //         path: 'auth/apple',
        //         body: {
        //             IdToken: idToken,
        //             Name: credential.fullName?.givenName ?? null,
        //             LastName: credential.fullName?.familyName ?? null,
        //             Platform: Platform.OS.toLowerCase(),
        //         },
        //     });

        //     setToken(response.token);
        // } catch (error) {
        //     if (error instanceof Error) {
        //         if ((error as any).code === 'ERR_REQUEST_CANCELED') {
        //             return;
        //         }
        //         Toast.show({ text1: 'Error!', text2: error.message, type: 'error' });
        //     }
        // }
        // finally {
        //     setLoadingAppleAuth(false);
        // }
    }
    return { signinWithApple, loadingAppleAuth };
}

export default useAppleAuth;
