"use strict";

module.exports = {
    rules: {
        "no-fallthrough": 0,
        "one-var": 0
    },
    plugins: [ "jsx-a11y" ],
    extends: [
        "@freaktechnik/eslint-config-browser",
        "@freaktechnik/eslint-config-webpack",
        "@freaktechnik/eslint-config-babel",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended"
    ]
};
