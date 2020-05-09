"use strict";

module.exports = {
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2016
    },
    plugins: [ "node" ],
    rules: {
        "node/no-new-require": 2,
        "node/no-sync": 1,
        "node/handle-callback-err": 1,
        "security/detect-non-literal-fs-filename": 1
    },
    extends: [
        "@freaktechnik/eslint-config-base",
        "plugin:node/recommended"
    ]
};
