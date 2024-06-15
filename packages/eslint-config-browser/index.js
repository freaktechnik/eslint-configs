import globals from "globals";
import eslintConfigBase from "@freaktechnik/eslint-config-base";
import xss from "eslint-plugin-xss";
import * as compat from "eslint-plugin-compat";
import { fixupPluginRules } from "@eslint/compat";

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
            xss: fixupPluginRules(xss),
            compat,
        },
        rules: {
            "xss/no-mixed-html": "off", // "error" - disabled due to https://github.com/Rantanen/eslint-plugin-xss/issues/15#issuecomment-2105744706
            "xss/no-location-href-assign": "error",
            "compat/compat": "error",
            "tree-shaking/no-side-effects-in-initialization": "off",
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
