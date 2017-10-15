module.exports = {
    env:  {
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2016
    },
    plugins: [
        "node"
    ],
    rules: {
        "no-new-require": 2,
        "no-sync": 1,
        "no-buffer-constructor": 2,
        "handle-callback-err": 1,
        "security/detect-non-literal-fs-filename": 1
    },
    extends: [
        "@freaktechnik/eslint-config-base",
        "plugin:node/recommended"
    ]
};
