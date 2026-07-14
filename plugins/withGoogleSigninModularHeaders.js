const { withPodfile } = require('@expo/config-plugins');

const MODULAR_HEADER_PODS = [
    '  pod "GoogleUtilities", :modular_headers => true',
    '  pod "RecaptchaInterop", :modular_headers => true',
];

const INSERT_AFTER = 'use_expo_modules!';

const withGoogleSigninModularHeaders = (config) => {
    return withPodfile(config, (config) => {
        const { contents } = config.modResults;

        if (contents.includes('pod "GoogleUtilities"')) {
            return config;
        }

        config.modResults.contents = contents.replace(
            INSERT_AFTER,
            [INSERT_AFTER, ...MODULAR_HEADER_PODS].join('\n')
        );

        return config;
    });
};

module.exports = withGoogleSigninModularHeaders;
