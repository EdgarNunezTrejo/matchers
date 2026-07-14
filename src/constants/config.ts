import Constants from 'expo-constants';

type Extra = {
    apiUrl: string;
    env: string;
    iosGoogleReverseClientId: string;
    webClientId: string;
};

const extra = Constants.expoConfig?.extra as Extra;

const API_URL = extra.apiUrl;
const ENV = extra.env;
const IOS_GOOGLE_REVERSE_CLIENT_ID = extra.iosGoogleReverseClientId;
const WEB_CLIENT_ID = extra.webClientId;

const IOS_GOOGLE_CLIENT_ID = `${IOS_GOOGLE_REVERSE_CLIENT_ID.replace('com.googleusercontent.apps.', '')}.apps.googleusercontent.com`;

export {
    API_URL,
    ENV, IOS_GOOGLE_CLIENT_ID, IOS_GOOGLE_REVERSE_CLIENT_ID, WEB_CLIENT_ID
};

