module.exports = {
    env: {
        browser: true
    },
    parserOptions: {
        ecmaVersion: 2017
    },
    plugins: [
        "xss",
        "compat"
    ],
    rules: {
        "xss/no-mixed-html": 2,
        "xss/no-location-href-assign": 2,
        "compat/compat": 2
    },
    extends: [
        "@freaktechnik/eslint-config-base"
    ]
};
