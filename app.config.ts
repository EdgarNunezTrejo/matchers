import { ConfigContext, ExpoConfig } from 'expo/config';
import withGoogleSigninModularHeaders from './plugins/withGoogleSigninModularHeaders';

export default ({ config }: ConfigContext): ExpoConfig => {
  const baseConfig: ExpoConfig = {
    ...config,
    name: 'Matchers',
    slug: 'matchters',
    extra: {
      apiUrl: process.env.EXPO_PUBLIC_API_URL,
      env: process.env.EXPO_PUBLIC_ENV,
      iosGoogleReverseClientId: process.env.EXPO_IOS_GOOGLE_REVERSE_CLIENT_ID,
      webClientId: process.env.EXPO_WEB_CLIENT_ID,
    },
    plugins: [
      ...(config.plugins ?? []),
      "expo-secure-store",
      "expo-font",
      [
        "@react-native-google-signin/google-signin",
        {
          "iosUrlScheme": process.env.EXPO_IOS_GOOGLE_REVERSE_CLIENT_ID
        }
      ],
      // "expo-apple-authentication",
    ],
    ios: {
      ...config.ios,
      // entitlements: {
      //   "com.apple.developer.applesignin": ["Default"]
      // }
    }
  };

  return withGoogleSigninModularHeaders(baseConfig);
};