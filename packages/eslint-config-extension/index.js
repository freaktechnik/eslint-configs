import globals from "globals";
import eslintConfigBrowser from "@freaktechnik/eslint-config-browser";
import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";
import { fixupConfigRules } from "@eslint/compat";

const dirname = path.dirname(fileURLToPath(import.meta.url)),
    compat = new FlatCompat({
        baseDirectory: dirname,
        resolvePluginsRelativeTo: dirname,
    });

export default [
    ...eslintConfigBrowser,
    ...fixupConfigRules(compat.extends("plugin:no-unsanitized/DOM")),
    {
        files: [ "**/*.js" ],
        languageOptions: {
            globals: {
                ...globals.webextensions,
            },
            ecmaVersion: "latest",
        },
        rules: {
            "strict": 0,
            "tree-shaking/no-side-effects-in-initialization": 0,
        },
    },
];
