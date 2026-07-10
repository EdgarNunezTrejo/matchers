import { ConfigContext, ExpoConfig } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'Matchers',
  slug: 'matchters',
  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL,
    env: process.env.EXPO_PUBLIC_ENV,
  },
  plugins: [
    ...(config.plugins ?? []),
    "expo-secure-store",
    "expo-font"
  ]
});