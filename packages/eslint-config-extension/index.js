import globals from "globals";
import eslintConfigBrowser from "@freaktechnik/eslint-config-browser";
import nounsanitized from "eslint-plugin-no-unsanitized";

export default [
    ...eslintConfigBrowser,
    {
        files: [ "**/*.js" ],
        plugins: {
            "no-unsanitized": nounsanitized,
        },
        languageOptions: {
            globals: {
                ...globals.webextensions,
            },
            ecmaVersion: "latest",
        },
        rules: {
            "strict": 0,
            "tree-shaking/no-side-effects-in-initialization": 0,
            "no-unsanitized/method": "error",
            "no-unsanitized/property": "error",
        },
    },
];
