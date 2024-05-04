import eslintConfigBase from "@freaktechnik/eslint-config-base";
import node from "eslint-plugin-n";

export default [
    ...eslintConfigBase,
    node.configs["flat/recommended-module"],
    {
        files: [
            "**/*.js",
            "**/*.mjs",
        ],
        languageOptions: {
            ecmaVersion: "latest",
        },
        rules: {
            "n/no-new-require": 2,
            "n/no-sync": 1,
            "n/handle-callback-err": 1,
            "security/detect-non-literal-fs-filename": 1,
            "unicorn/prefer-node-protocol": "error",
            "unicorn/prefer-module": "error",
            "unicorn/no-invalid-remove-event-listener": "error",
            "unicorn/prefer-json-parse-buffer": "error",
            "import/no-unresolved": 0,
            "n/no-missing-import": 0,
            "unicorn/text-encoding-identifier-case": "error",
            "unicorn/prefer-event-target": "error",
        },
    },
    {
        ignores: [ "node_modules" ],
    },
];
