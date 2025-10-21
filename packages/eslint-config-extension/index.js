import globals from "globals";
import eslintConfigBrowser from "@freaktechnik/eslint-config-browser";
import nounsanitized from "eslint-plugin-no-unsanitized";
import { defineConfig } from "eslint/config";

export default defineConfig(
    eslintConfigBrowser,
    {
        name: "freaktechnik/eslint-config-extension",
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
);
