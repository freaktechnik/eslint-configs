import globals from "globals";
import eslintConfigBase from "@freaktechnik/eslint-config-base";
import xss from "eslint-plugin-xss";
import compat from "eslint-plugin-compat";
import { fixupPluginRules } from "@eslint/compat";
import { defineConfig } from "eslint/config";

export default defineConfig(
    eslintConfigBase,
    {
        name: "freaktechnik/eslint-config-browser",
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
            "unicorn/prefer-classlist-toggle": "error",
            "unicorn/no-incorrect-query-selector": "error",
            "unicorn/no-late-current-target-access": "warn",
            "unicorn/require-css-escape": "error",
            "unicorn/require-passive-events": "error",
            "unicorn/no-prevent-default-in-passive-listener": "error",
            "unicorn/no-unsafe-dom-html": "warn",
            "unicorn/prefer-add-event-listener-options": "error",
            "unicorn/prefer-dom-node-html-methods": "warn",
            "unicorn/no-selector-as-dom-name": "warn",
            "unicorn/prefer-toggle-attribute": "error",
            "unicorn/prefer-observer-apis": "warn",
            "unicorn/prefer-dom-node-replace-children": "error",
            "unicorn/no-late-event-control": "error",
            "unicorn/no-invalid-style-set-property": "error",
            "unicorn/no-invalid-dom-token": "error",
            "unicorn/no-invalid-boolean-attribute-value": "warn",
        },
    },
);
