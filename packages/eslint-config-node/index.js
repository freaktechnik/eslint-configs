import eslintConfigBase from "@freaktechnik/eslint-config-base";
import node from "eslint-plugin-n";
import {
 defineConfig, globalIgnores, 
} from "eslint/config";

export default defineConfig(
    eslintConfigBase,
    {
        files: [
            "**/*.js",
            "**/*.mjs",
        ],
        extends: [ node.configs["flat/recommended-module"] ],
        rules: {
            "n/no-new-require": 2,
            "n/no-sync": 1,
            "n/handle-callback-err": 1,
            "n/no-missing-import": 0,
        },
    },
    {
        files: [
            "**/*.js",
            "**/*.mjs",
        ],
        languageOptions: {
            ecmaVersion: "latest",
        },
        rules: {
            "security/detect-non-literal-fs-filename": 1,
            "unicorn/prefer-node-protocol": "error",
            "unicorn/prefer-module": "error",
            "unicorn/no-invalid-remove-event-listener": "error",
            "unicorn/prefer-json-parse-buffer": "error",
            "import/no-unresolved": 0,
            "unicorn/text-encoding-identifier-case": "error",
            "unicorn/prefer-event-target": "error",
        },
    },
    globalIgnores([ "node_modules" ], "Node modules"),
);
