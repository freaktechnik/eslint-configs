"use strict";

module.exports = {
    env: {
        node: true
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [ "node" ],
    rules: {
        "node/no-new-require": 2,
        "node/no-sync": 1,
        "node/handle-callback-err": 1,
        "security/detect-non-literal-fs-filename": 1,
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-module": "error"
    },
    extends: [
        "@freaktechnik/eslint-config-base",
        "plugin:node/recommended"
    ]
};
