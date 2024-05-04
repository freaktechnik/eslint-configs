import globals from "globals";
import eslintConfigBase from "@freaktechnik/eslint-config-base";
import xss from "eslint-plugin-xss";
import compat from "eslint-plugin-compat";

export default [
    ...eslintConfigBase,
    {
        files: [
            "**/*.js",
            "**/*.mjs",
            "**/*.jsx",
            "**/*.vue",
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            ecmaVersion: "latest",
        },
        plugins: {
            xss,
            compat,
        },
        rules: {
            "xss/no-mixed-html": 2,
            "xss/no-location-href-assign": 2,
            "compat/compat": 2,
            "tree-shaking/no-side-effects-in-initialization": 0,
            "unicorn/prefer-add-event-listener": "error",
            "unicorn/prefer-dom-node-append": "warn",
            "unicorn/prefer-dom-node-remove": "warn",
            "unicorn/prefer-dom-node-text-content": "error",
            "unicorn/prefer-dom-node-dataset": "error",
            "unicorn/prefer-modern-dom-apis": "warn",
            "unicorn/no-invalid-remove-event-listener": "error",
            "unicorn/prefer-keyboard-event-key": "error",
        },
    },
];
