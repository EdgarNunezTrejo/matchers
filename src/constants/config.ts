import Constants from 'expo-constants';

type Extra = {
    apiUrl: string,
    env: string,
};

const extra = Constants.expoConfig?.extra as Extra;

const API_URL = extra.apiUrl;
const ENV = extra.env;

export {
    API_URL,
    ENV
};
