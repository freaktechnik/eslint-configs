import globals from "globals";
import node from "eslint-plugin-node";
import eslintConfigBase from "@freaktechnik/eslint-config-base";

export default [
    ...eslintConfigBase,
    node.configs["recommended-module"],
    {
        files: [
            "**/*.js",
            "**/*.mjs",
        ],
        languageOptions: {
            globals: {
                ...globals.node,
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        plugins: { node },
        rules: {
            "node/no-new-require": 2,
            "node/no-sync": 1,
            "node/handle-callback-err": 1,
            "security/detect-non-literal-fs-filename": 1,
            "unicorn/prefer-node-protocol": "error",
            "unicorn/prefer-module": "error",
            "unicorn/no-invalid-remove-event-listener": "error",
            "unicorn/prefer-json-parse-buffer": "error",
            "import/no-unresolved": 0,
            "node/no-missing-import": 0,
            "unicorn/text-encoding-identifier-case": "error",
            "unicorn/prefer-event-target": "error",
        },
    },
];
