"use strict";

module.exports = {
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module"
    },
    plugins: [ "ava" ],
    rules: {
        "jsdoc/check-param-names": 0,
        "jsdoc/check-tag-names": 0,
        "jsdoc/check-types": 0,
        "jsdoc/newline-after-description": 0,
        "jsdoc/require-description-complete-sentence": 0,
        "jsdoc/require-hyphen-before-param-description": 0,
        "jsdoc/require-param": 0,
        "jsdoc/require-param-type": 0,
        "jsdoc/require-param-description": 0,
        "jsdoc/require-returns-type": 0,
        "jsdoc/require-returns-description": 0,
        "one-var": 0,
        "no-magic-numbers": 0,
        "node/no-unsupported-features": 0,
        "filenames/match-regex": [
            2,
            "^_?[a-z0-9-]+$"
        ],
        "security/detect-non-literal-fs-filename": 0
    },
    extends: [
        "plugin:ava/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "@freaktechnik/eslint-config-node"
    ]
};
